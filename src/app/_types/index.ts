export interface MarketInfo {
  marketid: string;
  volume24h: string;
  average24h: string;
  high: string;
  low: string;
  last: string;
  highestBuy: string;
  lowestSell: string;
  percent_change_24: string;
}

export interface BlockHeader {
  _id: string;
  height: number;
  hash: string;
  date: string;
  transactions: number;
  valueOut: number;
  coinsCreated: number;
}

export interface MarketInfoBTC extends MarketInfo {
  volume24h_btc: string;
}

export interface MarketInfoLTC extends MarketInfo {
  volume24h_ltc: string;
}

export interface FRCdata {
  FRC_BTC: MarketInfoBTC[];
  FRC_LTC: MarketInfoLTC[];
}

export interface BTCdata {
  bitcoin: {
    usd: number;
  };
}

export interface Vin {
  coinbase?: string;
  txid?: string;
  vout?: number;
  scriptSig: {
    asm: string;
    hex: string;
  };
  sequence: number;
}

export interface Vout {
  value: number;
  n: number;
  scriptPubKey: {
    asm: string;
    hex: string;
    reqSigs?: number;
    type: string;
    addresses?: string[];
  };
}

// export interface Transaction {
//   txid: string;
//   hash: string;
//   version: number;
//   size: number;
//   vsize: number;
//   weight: number;
//   locktime: number;
//   lockheight: number;
//   vin: Vin[];
//   vout: Vout[];
//   hex: string;
// }
