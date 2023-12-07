import { AssetListProps } from "@/types/components/assetList";
import AssetCard from "../assetCard";
import { useState } from "react";

const AssetList = (props: AssetListProps) => {
  const { data } = props;
  const [page, setPage] = useState<number>(1);
  const renderContent = () => {
    if (data) {
      return data.results
        .slice(10 * (page - 1), 10 * page)
        .map((item, index) => {
          return <AssetCard data={item} key={item.id} />;
        });
    }
  };
  const onNext = () => {
    if (data?.results.slice(10 * page, 10 * (page + 1)).length !== 0) {
      setPage((page) => page + 1);
    }
  };
  const onPrev = () => {
    if (data?.results.slice(10 * (page - 2), 10 * (page - 1)).length !== 0) {
      setPage((page) => page - 1);
    }
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex w-full justify-between">
        <button onClick={onNext} className="bg-black">
          Next
        </button>
        <button onClick={onPrev} className="bg-black">
          Prev
        </button>
      </div>
      {renderContent()}
    </div>
  );
};
export default AssetList;
