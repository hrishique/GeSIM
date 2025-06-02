import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }: { cards: number }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="mt-5 border border-zinc-600 rounded-xl p-5 bg-[#0F1729] text-white md:w-[30rem] mx-auto space-y-4"
      >
        {/* Plan Name */}
        <div className="text-lg font-semibold">
          <Skeleton highlightColor="white" baseColor="gray" width={120} height={20} />
        </div>

        {/* Validity, Price, Data Limit */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Validity:</span>
            <Skeleton highlightColor="white" baseColor="gray" width={60} height={16} />
          </div>
          <div className="flex justify-between">
            <span>Price:</span>
            <Skeleton highlightColor="white" baseColor="gray" width={60} height={16} />
          </div>
          <div className="flex justify-between">
            <span>Data Limit:</span>
            <Skeleton highlightColor="white" baseColor="gray" width={60} height={16} />
          </div>
        </div>

        {/* Package Details Label */}
        <div className="text-sm font-medium pt-2">
          Package Details:
        </div>

        {/* Paragraph-like Description */}
        <div>
          <Skeleton highlightColor="white" baseColor="gray" count={2} />
        </div>

        {/* Buttons (Edit + Delete Icons) */}
        <div className="flex justify-end space-x-2 pt-2">
          <Skeleton highlightColor="white" baseColor="gray" width={32} height={32} borderRadius={8} />
          <Skeleton highlightColor="white" baseColor="gray" width={32} height={32} borderRadius={8} />
        </div>
      </div>
    ));
};

export default CardSkeleton;
