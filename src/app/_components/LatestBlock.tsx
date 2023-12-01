import Link from "next/link";
import { BlockHeader } from "@/_types";
import { formatDate } from "@/_utils/date";

import CopyToClipboardBtn from "./CopyToClipboardBtn";

type Props = {
  block: BlockHeader;
};

export default function LatestBlock({ block }: Props) {
  return (
    <li
      role="listitem"
      className="relative p-2 w-full flex flex-col gap-y-1.5 text-xs rounded border shadow-sm lg:text-sm"
    >
      <CopyToClipboardBtn content={block.hash} />
      <Link href={`/block?height=${block.height}`}>
        {/* top row */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <p>{`# ${block.height}`}</p>
            <p className="flex items-center">
              ID:
              <span className="ml-1 underline">
                ...{block.hash.substring(56)}
              </span>
            </p>
          </div>
          <p>{formatDate(block.date)}</p>
        </div>

        {/* bottom row */}
        <div className="w-full flex items-center justify-between">
          <p>
            {block.coinsCreated.toFixed(2)} freicoins &#x2022;{" "}
            {block.transactions} transactions 
          </p>
        </div>
      </Link>
    </li>
  );
}
