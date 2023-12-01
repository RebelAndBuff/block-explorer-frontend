import React from "react";

import CoinStatCard from "./CoinStatCard";

type CoinStats = {
  coin_hashrate: number;
  coin_supply: number;
  coin_btc: string;
  coin_usd: number;
  coin_difficulty: number;
  coin_marketcap: number;
};

async function getCoinStats() {
  const res = await fetch("https://www.blockspotter.com/api/coinstats");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function CoinStats() {
  const data: CoinStats = await getCoinStats();
  
  function formatCurrency(value: number, fractionDigits: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: fractionDigits,
    }).format(value);
  }

  function formatNumber(value: number, fractionDigits: number) {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: fractionDigits,
    }).format(value);
  }

  return (
    <section className="py-4 w-full">
      <ul className="px-4 pb-2 w-full flex gap-4 items-center overflow-x-auto text-sm lg:justify-center">
        <CoinStatCard type="currency" title="Price in BTC" data={data.coin_btc} />
        <CoinStatCard
          type="currency"
          title="Price in USD"
          data={formatCurrency(data.coin_usd, 5)}
        />
        <CoinStatCard
          type="stat"
          title="Market Cap"
          data={formatCurrency(data.coin_marketcap, 2)}
        />
        <CoinStatCard
          type="stat"
          title="Supply"
          data={formatNumber(data.coin_supply, 2)}
        />
        <CoinStatCard type="stat" title="Hashrate" data={data.coin_hashrate} />
        <CoinStatCard type="stat" title="Difficulty" data={data.coin_difficulty} />
      </ul>
    </section>
  );
}
