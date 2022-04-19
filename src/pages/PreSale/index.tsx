import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import { CommonButton } from "../../components/ButtonComponent"
import TitleComponent from "../../components/DynaComponent/TitleComponent"
import Footer from "../../components/Footer"
import { PRESALE_END } from "../../configs/constant"
import { connectors } from "../../connectors"
import tokenLogo from "../../assets/png/logoSM.png"
import contractLogo from "../../assets/png/contract.png"

const PreSale: React.FC = () => {

  const { activate } = useWeb3React();

  const [pValue, setPValue] = useState<number>(1);
  const [tokenETHRate, setTokenETHRate] = useState<number>(1);
  const [totalUSD, setTotalUSD] = useState<number>(1);
  const [amount, setAmount] = useState(0);
  const [ethPrice, setETHPrice] = useState<number>(1);
  const [ethCoinRate, setETHCoinRate] = useState<number>(1);

  var timer: any
  const [remain, setRemain] = useState(["00", "00", "00", "00"])
  const [isLive, setLive] = useState(true)

  useEffect(() => {
    counter()
  }, [])

  const counter = () => {
    timer = setInterval(() => {
      setDateTime()
    }, 1000)
  }

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/ethereum")
      .then((res) => res.json())
      .then((data) => {
        let usdPrice = data.market_data.current_price.usd
        setETHPrice(usdPrice)
      })
    activate(connectors.injected)
  }, [activate])

  const setDateTime = () => {
    let timeInfo_end = PRESALE_END.split(':');
    let now = new Date();
    let countdownEnd = new Date(parseInt(timeInfo_end[0]), parseInt(timeInfo_end[1]) - 1, parseInt(timeInfo_end[2]), parseInt(timeInfo_end[3]), parseInt(timeInfo_end[4]));
    let distance = countdownEnd.getTime() - now.getTime();
    if (distance > 0) {
      let remainValue = [];
      remainValue[0] = (Math.floor(distance / (1000 * 60 * 60 * 24))).toString();
      remainValue[1] = (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString();
      remainValue[2] = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).toString();
      remainValue[3] = (Math.floor((distance % (1000 * 60)) / 1000)).toString();
      setRemain(remainValue);
    }
    else {
      clearInterval(timer);
    }
  }

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

  return (
    <div className="m-auto tokenSale-background">
      <TitleComponent title="presale ends in" anchor="" content="" />
      <div className="grid -mt-12 md:-mt-8 w-full justify-center">
        <div className="flex items-center m-auto space-x-3 md:space-x-12 lg:space-x-16 xl:space-x-16 justify-center">
          <div className="flex-1 min-w-[25%]">
            <p className="text-center text-[#04d9ff] text-[20px]">Days</p>
            <p className="text-center text-[white] text-[48px] font-[700]">{remain[0].length === 1 ? `0${remain[0]}` : remain[0]}</p>
          </div>
          <div className="flex-1 min-w-[25%]">
            <p className="text-center text-[#04d9ff] text-[20px]">Hours</p>
            <p className="text-center text-[white] text-[48px] font-[700]">{remain[1].length === 1 ? `0${remain[1]}` : remain[1]}</p>
          </div>
          <div className="flex-1 min-w-[25%]">
            <p className="text-center text-[#04d9ff] text-[20px]">Minutes</p>
            <p className="text-center text-[white] text-[48px] font-[700]">{remain[2].length === 1 ? `0${remain[2]}` : remain[2]}</p>
          </div>
          <div className="flex-1 min-w-[25%]">
            <p className="text-center text-[#04d9ff] text-[20px]">Seconds</p>
            <p className="text-center text-[white] text-[48px] font-[700]">{remain[3].length === 1 ? `0${remain[3]}` : remain[3]}</p>
          </div>
        </div>
        <div className="grid items-center mt-3 md:mt-4 max-w-[1024px] bg-gradient-to-b from-[#141828ad] to-[#141828ad] rounded-3xl border-[#91b4ff] border-2 border-b-4">
          <div className="grid md:flex items-center m-5 md:justify-between">
            <p className="flex text-[20px] md:text-[24px] text-[#04d9ff] justify-self-start">Contribute to Get 1NB</p>
            {
              isLive ?
                <p className="text-[14px] md:text-[18px] text-[#2cd337] justify-self-end">Presale now is live</p>
                : <p className="text-[14px] md:text-[18px] text-[#ed3b3b] justify-self-end">Presale now is not live</p>
            }
          </div>
          <div className="grid md:flex justify-items-center md:justify-between gap-4 items-center mx-8 mb-6">
            <div className="flex justify-center justify-self-center border-[1px] max-w-[600px] rounded-xl lg:flex md:flex items-start text-[14px] lg:text-[22px] leading-[20px] lg:leading-[24px]">
              <div className="m-auto grid justify-center text-[20px] md:text-[24px] lg:text-[28px]">
                <input type="number" value={amount} onChange={handleCoinInput} step="1"
                  className="text-[white] border-[none] text-center m-0 w-48 md:w-52 lg:w-64" style={{ background: "none", outline: "none" }}
                />
              </div>
              <div className="grid justify-center p-2 md:px-4">
                <CommonButton title="Max" className="text-black from-[#04d9ff] via-[#04d9ff] to-[#04d9ff] text-[14px] p-2 w-[36px] min-w-0" />
              </div>
            </div>
            <CommonButton title="Contribute" className="from-[#04d9ff] via-[#04d9ff] to-[#04d9ff] text-[black] font-[500] rounded-[8px] lg:rounded-[8px] text-[18px] lg:text-[22px] leading-[20px] lg:leading-[24px] min-w-[220px] lg:min-w-[250px]" />
          </div>
        </div>
        <div className="flex-row md:flex justify-between space-x-0 md:space-x-4 w-full">
          <div className="grid items-center mt-3 md:mt-4 w-full md:w-1/2 bg-gradient-to-b from-[#141828ad] to-[#141828ad] rounded-3xl border-[#91b4ff] border-2 border-b-4">
            <div className="m-6 text-[14px] md:text-[18px]">
              <p className="mt-0">Your 1NB Balance : </p>
              <p className="text-[#04d9ff] text-[18px] md:text-[24px] ml-4">{ } 1NB</p>
              <p className="mt-2">Your Available Contribute Amount : </p>
              <p className="text-[#04d9ff] text-[18px] md:text-[24px] ml-4">{ } ETH</p>
              <p className="mt-2">Your Contributed Amount : </p>
              <p className="text-[#04d9ff] text-[18px] md:text-[24px] ml-4">{ } ETH</p>
              <p className="mt-2">Total Contributed Amount : </p>
              <p className="text-[#04d9ff] text-[18px] md:text-[24px] ml-4">{ } ETH</p>
              <p className="mt-2">Total Token Sold Amount : </p>
              <p className="text-[#04d9ff] text-[18px] md:text-[24px] ml-4">{ } 1NB</p>
            </div>
          </div>
          <div className="grid items-center mt-3 md:mt-4 w-full md:w-1/2 bg-gradient-to-b from-[#141828ad] to-[#141828ad] rounded-3xl border-[#91b4ff] border-2 border-b-4">
            <div className="m-6 text-[14px] md:text-[18px]">
              <p className="mt-0">HardCap : </p>
              <p className="text-[#04d9ff] text-[18px] md:text-[24px] ml-4">{ } ETH</p>
              <p className="mt-4">PreSale Price : </p>
              <p className="text-[#04d9ff] text-[18px] md:text-[24px] ml-4">{ } 1NB Per 1ETH</p>
              <p className="mt-4">Launch Price : </p>
              <p className="text-[#04d9ff] text-[18px] md:text-[24px] ml-4">{ } 1NB PER 1ETH</p>
              <p className="mt-4">Min Contribute : </p>
              <p className="text-[#04d9ff] text-[18px] md:text-[24px] ml-4">{ } ETH PER WALLET</p>
              <p className="mt-4">Max Contribute : </p>
              <p className="text-[#04d9ff] text-[18px] md:text-[24px] ml-4">{ } ETH PER WALLET</p>
            </div>
          </div>
        </div>
        <div className="grid gap-0 mt-4 w-full rounded-3xl border-[#91b4ff] border-2 border-b-4 p-4">
          <div className="flex justify-start items-center my-3 space-x-4">
            <div className="flex justify-center w-[72px]">
              <img src={tokenLogo} width={56} alt="token" />
            </div>
            <div className="grid">
              <p className="text-[#04d9ff] text-[18px] font-extrabold uppercase">1NB Token Address</p>
              <p className="">HardCap : </p>
            </div>
          </div>
          <div className="flex justify-start items-center my-3 space-x-4">
            <div className="flex justify-center w-[72px]">
              <img src={contractLogo} width={64} alt="contract" />
            </div>
            <div className="grid">
              <p className="text-[#04d9ff] text-[18px] font-extrabold uppercase">Presale Contract Address</p>
              <p className="">HardCap : </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default PreSale