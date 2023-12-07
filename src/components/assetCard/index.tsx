import { AssetCardProps } from "@/types/components/assetCard";
import Image from "next/image";
import { memo } from "react";

const AssetCard = (props: AssetCardProps) => {
  const { data } = props;
  const { currency1, price_info } = data;
  return (
    <div className="flex items-center shadow p-2 justify-between w-full">
      <Image
        alt="logo-btc"
        width={40}
        height={40}
        src={data?.currency1?.image || "logo"}
      />
      <div className="text-black">{currency1?.code}</div>
      <div className="text-black">{price_info?.change}%</div>
      <div className="text-black">{price_info?.price}</div>
      <div className="text-black">{price_info?.max}</div>
      <div className="text-black">{price_info?.min}</div>
    </div>
  );
};

export default memo(AssetCard);
