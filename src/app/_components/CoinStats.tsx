import React from "react";

import { FRCdata, BTCdata } from "@/_types";
import CoinStatCard from "./CoinStatCard";

async function getFRCinfo() {
  const res = await fetch("https://api.freiexchange.com/public/ticker/FRC");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getBTCinfo() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function CoinStats() {
  const FRCinfo: FRCdata = await getFRCinfo();
  const BTCinfo: BTCdata = await getBTCinfo();

  // Serialize price
  const { FRC_BTC } = FRCinfo;
  const { last: priceInBTC } = FRC_BTC[0];
  const priceInUSD: string = (
    parseFloat(priceInBTC) * BTCinfo.bitcoin.usd
  ).toFixed(5);

  return (
    <section className="py-4 w-full">
      <ul className="px-4 pb-2 w-full flex gap-4 items-center overflow-x-auto text-sm lg:justify-center">
        <CoinStatCard type="currency" title="Price in BTC" data={priceInBTC} />
        <CoinStatCard type="currency" title="Price in USD" data={priceInUSD} />
        <CoinStatCard type="stat" title="Market Cap" data={priceInUSD} />
        <CoinStatCard type="stat" title="Supply" data={priceInUSD} />
        <CoinStatCard type="stat" title="Hashrate" data={priceInUSD} />
        <CoinStatCard type="stat" title="Difficulty" data="12131" />
      </ul>
    </section>
  );
}
