import Link from "next/link";
import { BlockHeader } from "@/_types";
import { formatDate } from "@/_utils/date";

type Props = {
  block: BlockHeader;
};

export default function LatestBlock({ block }: Props) {
  return (
    <li
      role="listitem"
      className="relative p-2 w-full flex flex-col gap-y-1.5 text-xs rounded border border-slate-300 shadow-sm lg:text-sm hover:border-slate-600 transition ease-in"
    >
      <Link href={`/block?height=${block.height}`}>
        {/* top row */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <p>{`#${block.height}`}</p>
            <p className="px-1 flex items-center">
              ID:
              <span className="ml-1">...{block.hash.substring(56)}</span>
            </p>
          </div>
        </div>

        {/* bottom row */}
        <div className="w-full flex items-center justify-between">
          <p>
            {block.coinsCreated.toFixed(2)} freicoins &#x2022;{" "}
            {block.transactions} transactions
          </p>
          <p className="text-slate-500">{formatDate(block.date)}</p>
        </div>
      </Link>
    </li>
  );
}
