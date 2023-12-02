"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { formatDate } from "@/_utils/date";

import CopyToClipboardBtn from "@/_components/CopyToClipboardBtn";

type Block = {
  _id: string;
  height: number;
  hash: string;
  date: string;
  nTx: number;
  valueOut: number;
  coinsCreated: number;
  difficulty: number;
  txs: Transaction[];
  prevBlockhash: string;
};

type Transaction = {
  txid: string;
  inputs: [
    {
      txid: string;
    }
  ];
  outputs: [{ value: number; type: string; addresses?: string[] }];
};

export default function BlockView() {
  let url: string;
  const searchParams = useSearchParams();
  const height = searchParams.get("height");
  const hash = searchParams.get("hash");
  const [block, setBlock] = useState<Block | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setError(null);
    const controller = new AbortController();
    const signal = controller.signal;

    // Allow only 1 query, either 'hash' or height'
    if (searchParams.size === 0 || searchParams.size > 1) {
      setError(true);
      setLoading(false);
    }

    if (hash) {
      url = `https://blockspotter.com/api/block?hash=${hash}`;
    }

    if (height) {
      url = `https://blockspotter.com/api/block?height=${height}`;
    }

    if (!height && !hash) {
      return () => {
        setError(true);
        setLoading(false);
      };
    }

    fetch(url, {
      signal: signal,
    })
      .then((response) => {
        if (!response.ok) {
          setLoading(false);
          return setError("Reponse not ok. Fetch failed.");
        }
        return response.json();
      })
      .then((data) => {
        setBlock(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("successfully aborted");
        } else {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, [hash || height]);

  if (isLoading) return <p>Loading...</p>;
  if (!block) return <p className="p-4">Unkown block</p>;
  if (error) return <p>{`${error}`}</p>;

  return (
    <main className="p-4 mx-auto flex min-h-screen flex-col">
      {/* block header */}
      <div className="p-2 mb-2 flex items-center gap-2 border border-slate-300 w-fit rounded">
        {block.height > 1 && (
          <Link href={`/block?height=${block.height - 1}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>
        )}
        <p>Block {block.height}</p>
        <Link href={`/block?height=${block.height + 1}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
      <div className="p-2 mb-2 w-fit">
        <div className="flex items-center">
          <p title={block.hash} className="w-36">
            Hash: ...{block.hash.substring(56)}
          </p>
          <CopyToClipboardBtn content={block.hash} />
        </div>

        <p>Date: {formatDate(block.date)} (UTC)</p>
        <p>Difficulty: {block.difficulty}</p>
        <p>Transacions: {block.nTx}</p>
        <p>Coins Created: {block.coinsCreated.toFixed(2)}</p>
        <p>
          Value Out:{" "}
          {block.valueOut === 0
            ? block.coinsCreated.toFixed(2)
            : block.valueOut.toFixed(2)}
        </p>
      </div>

      {/* block transactions */}
      <div>
        <div className="w-full flex flex-col gap-y-4 md:w-fit">
          <div></div>
          {block.txs.map((tx) => (
            <div
              key={tx.txid}
              className="p-2 rounded border border-slate-300 md:flex md:gap-12"
            >
              <Link
                title={tx.txid}
                href={"/"}
                className="px-2 py-1 w-fit h-fit flex items-center gap-2 rounded-sm text-sm bg-slate-200"
              >
                <p>TXID:</p>
                <span className="truncate underline">
                  {tx.txid.slice(0, 9)}...
                </span>
              </Link>

              {/* inputs */}
              <div>
                <p className="mt-2 flex items-center text-sm gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-log-in"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                  From Inputs
                </p>
                {/* inputs container */}
                <div className="flex flex-col">
                  {tx.inputs.map((input) => (
                    <div key={input.txid}>
                      <p className="w-44 truncate">{input.txid}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* outputs */}
              <div>
                <p className="mt-2 flex items-center text-sm gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  To Outputs
                </p>
                {/* outputs container */}
                <div className="flex flex-col">
                  {tx.outputs.map((output, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between md:justify-start md:gap-12"
                    >
                      <p className="w-44 truncate">
                        {output.addresses ? (
                          output.addresses.map((address) => (
                            <span
                              className="underline"
                              key={address}
                              title={address}
                            >
                              {address}
                            </span>
                          ))
                        ) : (
                          <span className="px-2 py-1 rounded text-xs text-red-900 bg-red-200">
                            OP_RETURN
                          </span>
                        )}
                      </p>
                      <p>{output.value.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
