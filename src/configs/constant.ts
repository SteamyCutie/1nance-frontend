// ------------ smart contract
export const SERVER_URL = "";
export const INFURA_ENDPOINT =
  "https://rinkeby.infura.io/v3/b7f1ceb6b5804743827a20b964dcf617";
export const PRODUCT_KEY = "c05789ae507e4276b0936e73d08216a0";
const DECIMALS = 10 ** 18;
export const TO_ETHER = (wei:any, decimal = 0) => {
  if (wei) {
    return wei / (decimal ? 10 ** decimal : DECIMALS); // 18 decimal places
  }
  return 0;
};
export const PRESALE_END = "2022:06:30:23:59";
export const ONENANCE_TOKEN = "Coming Soon...";
export const ONENANCE_ICO = "Coming Soon...";
export const ONENANCE_PRESALE_WALLET = "0xaCdBe67c9086e7C09Ea4783D793A2a0F2D28041A";
export const ONENANCE_PRESALE = "0xd0f43400f0d5bBdA8f3B42945A3BBaC3f843486C";
export const ONENANCE_PRESALE_TEST =
  "0x9F37267130a0cE8d381e678Afd75b32463c6f5B6";
