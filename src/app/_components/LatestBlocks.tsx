"use client";
import { useEffect, useState } from "react";
import { BlockHeader } from "@/_types";
import LatestBlock from "./LatestBlock";

export default function LatestBlocks() {
  const [latestBlocks, setLatestBlocks] = useState<BlockHeader[]>([]);
  const steps = {
    // get 5 blocks to start with - API max amount of blocks = 500
    first: {
      amount: 5,
      nextAmount: 100,
    },
    second: {
      amount: 100,
      nextAmount: 500,
    },
    last: {
      amount: 500,
      nextAmount: 5,
    },
  };
  const [currentStep, setCurrentStep] = useState(steps.first);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(
      `https://blockspotter.com/api/latestblocks?amount=${currentStep.amount}`,
      {
        signal: signal,
      }
    )
      .then((response) => {
        if (!response.ok) {
          setLoading(false);
          return setError("Reponse not ok. Fetch failed.");
        }
        return response.json();
      })
      .then((data) => {
        setLatestBlocks(data);
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
  }, [currentStep.amount]);

  function fetchMore() {
    if (currentStep.amount === steps.first.amount)
      return setCurrentStep(steps.second);
    if (currentStep.amount === steps.second.amount)
      return setCurrentStep(steps.last);

    if (currentStep.amount === steps.last.amount)
      return setCurrentStep(steps.first);
  }

  if (isLoading) return <p>Loading...</p>;
  if (!latestBlocks) return <p>No profile data</p>;
  if (error) return <p>{`Latest blocks: ${error}`}</p>;

  return (
    <section className="p-2 w-full flex flex-col items-start md:w-3/5">
      <h2 className="mb-4 italic font-semibold text-slate-800">
        Latest Blocks
      </h2>
      <ul role="list" className="w-full flex flex-col gap-y-4">
        {latestBlocks.length > 0 ? (
          latestBlocks.map((block) => (
            <LatestBlock key={block.height} block={block} />
          ))
        ) : (
          <p>No blocks found</p>
        )}
      </ul>
      <button
        onClick={fetchMore}
        type="button"
        title="show more blocks"
        className="mt-4 w-full h-14 flex justify-center items-center gap-2 rounded border border-slate-500 shadow"
      >
        <p className="text-center text-sm">
          {currentStep.amount === steps.last.amount ? (
            <span className="flex items-center gap-2">
              Show less
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-chevron-up"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Show last {currentStep.nextAmount} blocks
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5"
              >
                <path
                  d="M18.7099 8.21C18.6169 8.11627 18.5063 8.04187 18.3844 7.99111C18.2626 7.94034 18.1319 7.9142 17.9999 7.9142C17.8679 7.9142 17.7371 7.94034 17.6153 7.99111C17.4934 8.04187 17.3828 8.11627 17.2899 8.21L12.7099 12.79C12.6169 12.8837 12.5063 12.9581 12.3844 13.0089C12.2626 13.0596 12.1319 13.0858 11.9999 13.0858C11.8679 13.0858 11.7371 13.0596 11.6153 13.0089C11.4934 12.9581 11.3828 12.8837 11.2899 12.79L6.70986 8.21C6.6169 8.11627 6.5063 8.04187 6.38444 7.99111C6.26258 7.94034 6.13187 7.9142 5.99986 7.9142C5.86785 7.9142 5.73714 7.94034 5.61528 7.99111C5.49343 8.04187 5.38282 8.11627 5.28986 8.21C5.10361 8.39736 4.99907 8.65081 4.99907 8.915C4.99907 9.17918 5.10361 9.43263 5.28986 9.61999L9.87986 14.21C10.4424 14.7718 11.2049 15.0873 11.9999 15.0873C12.7949 15.0873 13.5574 14.7718 14.1199 14.21L18.7099 9.61999C18.8961 9.43263 19.0007 9.17918 19.0007 8.915C19.0007 8.65081 18.8961 8.39736 18.7099 8.21V8.21Z"
                  fill="#0C0C0C"
                />
              </svg>
            </span>
          )}
        </p>
      </button>
    </section>
  );
}
