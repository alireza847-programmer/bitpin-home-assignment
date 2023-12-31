import { AssetListProps } from "@/types/components/assetList";
import AssetCard from "../assetCard";
import { memo, useState } from "react";

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
    setPage((page) => page + 1);
  };
  const onPrev = () => {
    setPage((page) => page - 1);
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex w-full justify-between">
        <button
          disabled={!(data && 10 * page < data.results.length)}
          onClick={onNext}
          className="bg-black"
        >
          Next
        </button>
        <button disabled={!(page !== 1)} onClick={onPrev} className="bg-black">
          Prev
        </button>
      </div>
      {renderContent()}
    </div>
  );
};
export default memo(AssetList);
