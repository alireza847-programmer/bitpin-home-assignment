"use client";
import AssetList from "@/components/assetList";
import { GET_MARKETS_API_URL, MarketsResponseDto } from "@/types/api/markets";
import { WEB_SOCKET_URL } from "@/types/api/socket";
import { useEffect, useState } from "react";
// i use react-api-wrapper-hook because its written by me and i want to show my skills you can see this package details in npm
import { useApi } from "react-api-wrapper-hook";
import useWebSocket, { ReadyState } from "react-use-websocket";

export default function Home() {
  const { data, error, fetch, loading, setData } = useApi<MarketsResponseDto>({
    url: `${GET_MARKETS_API_URL}`,
  });
  const { sendMessage, lastJsonMessage, lastMessage, readyState } =
    useWebSocket(WEB_SOCKET_URL);

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      sendMessage(
        JSON.stringify({
          method: "sub_to_price_info",
        })
      );
    }
  }, [readyState]);

  useEffect(() => {
    if (data?.results && lastJsonMessage) {
      const res = data.results.map((item) => {
        return {
          ...item,
          price_info: {
            ...item.price_info,
            ...lastJsonMessage[item.id],
          },
        };
      });
      setData({
        ...data,
        results: res,
      });
      console.log(lastJsonMessage);
    }
  }, [lastJsonMessage]);
  return (
    <main className="flex items-center justify-betwwen p-5">
      <AssetList data={data} />
    </main>
  );
}
