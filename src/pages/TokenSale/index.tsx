import { useEffect, useState } from "react";
import Select from "react-select";
import TitleComponent from "../../components/DynaComponent/TitleComponent";
import Footer from "../../components/Footer/index";
import ETH from "../../assets/png/ETH.png";
import BNB from "../../assets/png/BNB.png";
// import USDT from "../../assets/png/USDT.png";
// import USDC from "../../assets/png/USDC.png";
// import SOL from "../../assets/png/SOL.png";
// import AVAX from "../../assets/png/AVAX.png";
// import DOGE from "../../assets/png/DOGE.png";
// import MATIC from "../../assets/png/MATIC.png";
// import CRO from "../../assets/png/CRO.png";
// import DAI from "../../assets/png/DAI.png";

import { useWeb3React } from "@web3-react/core";
import { connectors } from "../../connectors";
import { ethers } from "ethers";

import _1NanceICO from "../../configs/_1NanceICO.json";
import { ONENANCE_ICO } from "../../configs/constant";
import { CommonButton } from "../../components/ButtonComponent";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const TokenSale: React.FC = () => {
  const [pValue, setPValue] = useState<number>(1);
  const [tokenETHRate, setTokenETHRate] = useState<number>(1);
  const [totalUSD, setTotalUSD] = useState<number>(1);
  const [ethPrice, setETHPrice] = useState<number>(1);
  const [ethCoinRate, setETHCoinRate] = useState<number>(1);
  const { activate } = useWeb3React();

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/ethereum")
      .then((res) => res.json())
      .then((data) => {
        let usdPrice = data.market_data.current_price.usd;
        setETHPrice(usdPrice);
      });
    activate(connectors.injected);
  }, [activate]);

  useEffect(() => {
    if (!ethPrice) return
    setTokenETHRate(1 / ethPrice)
  }, [ethPrice])

  useEffect(() => {
    let usdTotal = pValue * tokenETHRate * ethCoinRate;
    setTotalUSD(usdTotal);
  }, [ethCoinRate, pValue, tokenETHRate])

  const handlePlusBtn = () => {
    if (!ethCoinRate || !tokenETHRate) return
    let value = Number(pValue) + 1;
    setPValue(value);
  };

  const handleMinusBtn = () => {
    if (!ethCoinRate || !tokenETHRate) return
    if (Number(pValue) > 0) setPValue(Number(pValue) - 1);
  };

  const handleCoinInput = (e: any) => {
    if (!ethCoinRate || !tokenETHRate) return
    let coinValue = e.target.value;
    if (parseInt(coinValue) >= 1) {
      if (coinValue[0] === "0")
        coinValue = coinValue.slice(1);
      setPValue(coinValue);
      let usdTotal = Number(coinValue) * tokenETHRate * ethCoinRate;
      setTotalUSD(usdTotal);
    } else if (coinValue >= 0) {
      setPValue(coinValue);
      if (coinValue === "") {
        coinValue = "0";
      }
      let usdTotal = Number(coinValue) * tokenETHRate * ethCoinRate;
      setTotalUSD(usdTotal);
    }
  };

  const handleSelectCoin = (e: any) => {
    if (!pValue || !tokenETHRate) return
    let cryptoName = e.value;
    fetch(`https://api.coingecko.com/api/v3/coins/${cryptoName}`)
      .then((res) => res.json())
      .then((data) => {
        if (!ethPrice) return
        let coinPrice = data.market_data.current_price.usd;
        let coinETHRate = ethPrice / coinPrice;
        let usdTotal = pValue * tokenETHRate * coinETHRate;
        setTotalUSD(usdTotal);
        setETHCoinRate(coinETHRate);
      });
  };

  const handleUSDInput = (e: any) => {
    if (!ethCoinRate || !tokenETHRate) return
    let USDValue = e.target.value;
    if (parseInt(USDValue) >= 1) {
      if (USDValue[0] === "0") {
        USDValue = USDValue.slice(1);
      }
      setTotalUSD(USDValue);
      let tokenAmount = Number(USDValue) / (tokenETHRate * ethCoinRate);
      setPValue(tokenAmount);
    } else if (USDValue >= 0) {
      setTotalUSD(USDValue);
      if (USDValue === "") {
        USDValue = "0";
      }
    }
  };

  const handleBuyToken = async () => {
    if (!totalUSD) return
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const nbICOContract = new ethers.Contract(
      ONENANCE_ICO,
      _1NanceICO,
      signer
    );
    const etherAmount = ethers.utils.parseUnits(totalUSD.toString(), 'ether');
    try {
      await nbICOContract.buyTokens({ value: etherAmount });
    } catch (error) {
      console.log(error)
    }
  }

  const options = [
    {
      value: "ethereum",
      label: (
        <span className="flex text-[20px] mx-1 my-2 items-center">
          <img src={ETH} className="flex items-center justify-center mr-2 rounded-full w-7 h-7" alt="ETH" />
          ETH
        </span>
      ),
    },
    {
      value: "binancecoin",
      label: (
        <span className="flex text-[20px] mx-1 my-2 items-center">
          <img src={BNB} className="flex items-center justify-center mr-2 rounded-full w-7 h-7" alt="BNB" />
          BNB
        </span>
      ),
    }
    // {
    //   value: "tether",
    //   label: (
    //     <span className="flex text-[20px] mx-1 my-2 items-center">
    //       <img src={USDT} className="flex items-center justify-center mr-2 rounded-full w-7 h-7" alt="USDT" />
    //       USDT
    //     </span>
    //   ),
    // },
    // {
    //   value: "usd-coin",
    //   label: (
    //     <span className="flex text-[20px] mx-1 my-2 items-center">
    //       <img src={USDC} className="flex items-center justify-center mr-2 rounded-full w-7 h-7" alt="USDC" />
    //       USDC
    //     </span>
    //   ),
    // },
    // {
    //   value: "solana",
    //   label: (
    //     <span className="flex text-[20px] mx-1 my-2 items-center">
    //       <img src={SOL} className="flex items-center justify-center mr-2 rounded-full w-7 h-7" alt="SOL" />
    //       SOL
    //     </span>
    //   ),
    // },
    // {
    //   value: "avalanche-2",
    //   label: (
    //     <span className="flex text-[20px] mx-1 my-2 items-center">
    //       <img src={AVAX} className="flex items-center justify-center mr-2 rounded-full w-7 h-7" alt="AVAX" />
    //       AVAX
    //     </span>
    //   ),
    // },
    // {
    //   value: "dogecoin",
    //   label: (
    //     <span className="flex text-[20px] mx-1 my-2 items-center">
    //       <img src={DOGE} className="flex items-center justify-center mr-2 rounded-full w-7 h-7" alt="DOGE" />
    //       DOGE
    //     </span>
    //   ),
    // },
    // {
    //   value: "matic-network",
    //   label: (
    //     <span className="flex text-[20px] mx-1 my-2 items-center">
    //       <img src={MATIC} className="flex items-center justify-center mr-2 rounded-full w-7 h-7" alt="MATIC" />
    //       MATIC
    //     </span>
    //   ),
    // },
    // {
    //   value: "crypto-com-chain",
    //   label: (
    //     <span className="flex text-[20px] mx-1 my-2 items-center">
    //       <img src={CRO} className="flex items-center justify-center mr-2 rounded-full w-7 h-7" alt="CRO" />
    //       CRO
    //     </span>
    //   ),
    // },
    // {
    //   value: "dai",
    //   label: (
    //     <span className="flex text-[20px] mx-1 my-2 items-center">
    //       <img src={DAI} className="flex items-center justify-center mr-2 rounded-full w-7 h-7" alt="DAI" />
    //       DAI
    //     </span>
    //   ),
    // },
  ];

  const customStyles = {
    dropdownIndicator: () => ({
      width: 20,
    }),
  };

  return (
    <div className="m-auto tokenSale-background">
      <div>
        <TitleComponent title="Purchase Token" anchor="" content="" />
        <div className="flex items-center m-auto space-x-3">
          <div className="grid items-start gap-4 m-auto lg:flex">
            <div className="md:order-last flex-1 m-auto min-w-[60%] justify-center grid">
              <div className="w-[350px] grid justify-center items-start md:w-[500px] rounded-[16px] bg-gradient-to-b from-[#FFAF10] to-[#F97919] h-[400px]">
                <div className="flex items-center justify-center gap-4 mt-20">
                  <button
                    onClick={handleMinusBtn}
                    className="drop-shadow-[0_5px_6px_rgba(0,0,0,0.5)] hover:scale-[1.02] active:scale-[0.98] bg-gradient-radial from-[#03185B] to-[#133295] w-12 h-12 text-xl text-white transition-all duration-200 ease-out bg-blue-700 rounded-full hover:bg-indigo-900/90"
                  >
                    -
                  </button>
                  <div className="w-32 mx-5 md:w-48">
                    <input
                      type="number"
                      id="simple-email"
                      value={pValue}
                      onChange={handleCoinInput}
                      className="flex-1 w-full px-2 py-2 rounded-[8px] text-center text-[24px] text-gray-700 placeholder-gray-400 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    onClick={handlePlusBtn}
                    className="drop-shadow-[0_5px_6px_rgba(0,0,0,0.5)] hover:scale-[1.02] active:scale-[0.98] bg-gradient-radial from-[#03185B] to-[#133295] w-12 h-12 text-xl text-white transition-all duration-200 ease-out bg-blue-700 rounded-full hover:bg-indigo-900/90"
                  >
                    +
                  </button>
                </div>
                <div className="grid justify-center w-full grid-cols-1 gap-2 mt-5 md:flex">
                  <input
                    type="number"
                    value={totalUSD}
                    onChange={handleUSDInput}
                    className="flex w-full px-2 rounded-[16px] text-[24px] text-center text-gray-700 placeholder-gray-400 bg-white border shadow-sm appearance-none md:w-72 focus: border-sky-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="flex items-center justify-center w-full">
                    <Select
                      className="justify-center w-full text-gray-700 rounded shadow-sm"
                      defaultValue={options[0]}
                      options={options}
                      styles={customStyles}
                      onChange={handleSelectCoin}
                    />
                  </div>
                </div>

                <div className="flex justify-center px-6 py-2 mt-4">
                  <CommonButton handler={handleBuyToken} title="Purchase Token" className="from-[#03185B] via-[#133295] to-[#03185B] text-white font-[500] rounded-[12px] lg:rounded-[16px] text-[19px] lg:text-[24px] leading-[22px] lg:leading-[28px] min-w-[220px] lg:min-w-[250px] py-4" />
                </div>

              </div>
            </div>
            <div className="mt-16 space-y-4 xl:mt-0">
              <div className="font-light indent-4 text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[24px] md:leading-[32.13px] max-w-xl px-8 xl:px-0">
                We will issue our token, the 1nance Coin, which has a straight limit of 200MM. 1nance Coin is an ERC 20 token since it exists on the ethereum blockchain.
              </div>
              <div className="font-light indent-4 text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[24px] md:leading-[32.13px] max-w-xl px-8 xl:px-0">
                Our matching engine is capable of sustaining upto 1,400,000 orders / second, making 1nance one of the fastest exchanges in the market today. As a result, your orders will never be stuck due to the matching engine even when there are too many transactions.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TokenSale;