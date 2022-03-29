import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import $ from "jquery";
import Select from "react-select";
import TitleComponent from "../../components/DynaComponent/TitleComponent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ETH from "../../assets/png/ETH.png";
import BNB from "../../assets/png/BNB.png";
import USDT from "../../assets/png/USDT.png";
import USDC from "../../assets/png/USDC.png";
import SOL from "../../assets/png/SOL.png";
import AVAX from "../../assets/png/AVAX.png";
import DOGE from "../../assets/png/DOGE.png";
import MATIC from "../../assets/png/MATIC.png";
import CRO from "../../assets/png/CRO.png";
import DAI from "../../assets/png/DAI.png";

import { useWeb3React} from "@web3-react/core";
import { connectors } from "../../connectors";
import { ethers } from "ethers";

import NBICO from "../../artifacts/contracts/NBICO.sol/NBICO.json";
import { NBICOAddress } from "../../config";

interface TokenSaleProps {
    handler: any;
}
declare global {
    interface Window {
      ethereum?: any;
    }
  }

const TokenSale: React.FC<TokenSaleProps> = ({ handler }) => {
    const history = useHistory();
    const [pValue, setPValue] = useState(0);
    const [tokenETHRate, setTokenETHRate] = useState(1/2700);
    const [totalUSD, setTotalUSD] = useState(0);
    const [ethPrice,setETHPrice] = useState(0);
    const [ethCoinRate,setETHCoinRate] = useState(1);
    const { library,account,activate,deactivate,active,error } = useWeb3React();
  
    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/ethereum")
            .then((res) => res.json())
            .then((data) => {
                let usdPrice = data.market_data.current_price.usd;             
                setETHPrice(usdPrice);
            });
            activate(connectors.injected);
           
    }, []);
    const handleNavigate = (idx: string) => {
        handler(idx);
        history.push("/");
    };
    const handlePlusBtn = () => {
        let value = Number(pValue) + 1;
        setPValue(value);
        let usdTotal = value * tokenETHRate * ethCoinRate;
        setTotalUSD(usdTotal);
    };
    const handleMinusBtn = () => {
        if (Number(pValue) >= 1) {
            let value = Number(pValue) - 1;
            setPValue(value);
            let usdTotal = value * tokenETHRate * ethCoinRate;
            setTotalUSD(usdTotal);
        }
    };
    const handleCoinInput = (e: any) => {
        let coinValue = e.target.value;

        
        console.log(coinValue);
        if (parseInt(coinValue) >= 1) {
            if (coinValue[0] == "0") {
                coinValue = coinValue.slice(1);
            }
            console.log(coinValue);
            setPValue(coinValue);

            let usdTotal = Number(coinValue) * tokenETHRate * ethCoinRate;
            console.log(usdTotal);
            setTotalUSD(usdTotal);
        } else if (coinValue >= 0) {
            setPValue(coinValue);
            if (coinValue == "") {
                coinValue = "0";
            }
            let usdTotal = Number(coinValue) * tokenETHRate * ethCoinRate;
            console.log(usdTotal);
            setTotalUSD(usdTotal);
        }
    };
    const handleSelectCoin = (e: any) => {
        let coin = e.value;
        let cryptoName = e.value;
        fetch(`https://api.coingecko.com/api/v3/coins/${cryptoName}`)
            .then((res) => res.json())
            .then((data) => {
                let coinPrice = data.market_data.current_price.usd;
                console.log(coinPrice);
                let coinETHRate = ethPrice / coinPrice;
                console.log("coinethrate=>",coinETHRate)
                console.log("pvalue=>",pValue);
                let usdTotal = pValue * tokenETHRate * coinETHRate;
                console.log(usdTotal)
                setTotalUSD(usdTotal);
                setETHCoinRate(coinETHRate); 
            });
    };

    const handleUSDInput = (e: any) => {
        let USDValue = e.target.value;
        console.log(USDValue);
        if (parseInt(USDValue) >= 1) {
            if (USDValue[0] == "0") {
                USDValue = USDValue.slice(1);
            }
            console.log(USDValue);
            setTotalUSD(USDValue);
            let tokenAmount = Number(USDValue) / (tokenETHRate * ethCoinRate) ;
            setPValue(tokenAmount);
        } else if (USDValue >= 0) {
            setTotalUSD(USDValue);
            if (USDValue == "") {
                USDValue = "0";
            }
        }
    };

    const handleBuyToken = async (e:any) => {
       
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log("hi",provider);
         const signer = provider.getSigner();
         const nbICOContract = new ethers.Contract(
             NBICOAddress,
             NBICO.abi,
             signer
         );
         console.log("ICO contract=>",provider,signer,nbICOContract);
         const etherAmount = ethers.utils.parseUnits(totalUSD.toString(),'ether');
         try{
             let tx = await nbICOContract.buyTokens({value:etherAmount});
         } catch(error){
          
         }
    }
    const options = [
        {
            value: "ethereum",
            label: (
                <span>
                    <img src={ETH} className="w-[20%] h-4 inline-block mr-1" />
                    ETH
                </span>
            ),
        },
        {
            value: "binancecoin",
            label: (
                <span>
                    <img src={BNB} className="w-[20%] h-4 inline-block mr-1" />
                    BNB
                </span>
            ),
        },
        {
            value: "tether",
            label: (
                <span>
                    <img src={USDT} className="w-[20%] h-4 inline-block mr-1" />
                    USDT
                </span>
            ),
        },
        {
            value: "usd-coin",
            label: (
                <span>
                    <img src={USDC} className="w-[20%] h-4 inline-block mr-1" />
                    USDC
                </span>
            ),
        },
        {
            value: "solana",
            label: (
                <span>
                    <img src={SOL} className="w-[20%] h-4 inline-block mr-1" />
                    SOL
                </span>
            ),
        },
        {
            value: "avalanche-2",
            label: (
                <span>
                    <img src={AVAX} className="w-[20%] h-4 inline-block mr-1" />
                    AVAX
                </span>
            ),
        },
        {
            value: "dogecoin",
            label: (
                <span>
                    <img src={DOGE} className="w-[20%] h-4 inline-block mr-1" />
                    DOGE
                </span>
            ),
        },
        {
            value: "matic-network",
            label: (
                <span>
                    <img
                        src={MATIC}
                        className="w-[20%] h-4 inline-block mr-1"
                    />
                    MATIC
                </span>
            ),
        },
        {
            value: "crypto-com-chain",
            label: (
                <span>
                    <img src={CRO} className="w-[20%] h-4 inline-block mr-1" />
                    CRO
                </span>
            ),
        },
        {
            value: "dai",
            label: (
                <span>
                    <img src={DAI} className="w-[20%] h-4 inline-block mr-1" />
                    DAI
                </span>
            ),
        },
    ];

    const customStyles = {
        dropdownIndicator: () => ({
            width: 20,
        }),
    };

    return (
        <div className="m-auto">
            <Header handler={handleNavigate} />
            <div>
                <TitleComponent title="Purchase Token" anchor="" content="" />
                <div className="flex m-auto items-center space-x-3">
                    <div className="grid md:flex gap-x-1  m-auto items-start">
                        <div className="md:order-last flex-1 m-auto min-w-[60%] justify-center grid">
                            <div className="w-[350px] grid justify-center items-start md:w-[500px] rounded bg-gradient-to-b from-[#FFAF10] to-[#F97919] h-[400px]">
                                <div className="flex justify-center mt-20">
                                    <button
                                        onClick={handleMinusBtn}
                                        className=" text-white text-xl bg-blue-700 px-[19px] py-0 rounded-full hover:bg-indigo-900"
                                    >
                                        -
                                    </button>
                                    <div className="w-32 mx-2 md:w-32 mx-5">
                                        <input
                                            type="number"
                                            id="simple-email"
                                            value={pValue}
                                            onChange={handleCoinInput}
                                            className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <button
                                        onClick={handlePlusBtn}
                                        className=" text-white text-lg bg-blue-700 px-[17px] py-0 rounded-full hover:bg-indigo-900"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="flex justify-center mt-7 -mb-10">
                                    <input
                                        type="number"
                                        value={totalUSD}
                                        onChange={handleUSDInput}
                                        className=" flex-1 w-20 md:w-72 rounded  appearance-none border focus: border-sky-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <Select
                                        className=" w-28  rounded text-gray-700  border border-gray-300 bg-white  shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                        defaultValue={options[0]}
                                        options={options}
                                        styles={customStyles}
                                        onChange={handleSelectCoin}
                                    />
                                </div>

                                <button onClick = {handleBuyToken} className=" text-white text-lg bg-blue-700 px-6 py-1 rounded hover:bg-indigo-900">
                                    BUY
                                </button>
                            </div>
                        </div>
                        <div className=" space-y-4 mt-16 xl:mt-0 ">
                            <div className="font-light text-[14px] md:text-[18px] leading-[24px] md:leading-[28.13px] max-w-xl px-8 xl:px-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Elit sem suspendisse urna
                                integer est. Ipsum vitae eu dui augue viverra.
                                Enim purus erat commodo eleifend nec enim,
                                ridiculus arcu in. Volutpat, aliquam consequat
                                nulla lorem mauris. Adipiscing mauris eu
                                ultrices et, volutpat, enim. Vitae pretium proin
                                neque neque purus tellus ultrices accumsan.
                                Habitant tellus faucibus volutpat viverra.
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
