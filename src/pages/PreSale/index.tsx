import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import TitleComponent from "../../components/DynaComponent/TitleComponent"
import Footer from "../../components/Footer"
import { PRESALE_END } from "../../configs/constant"
import { connectors } from "../../connectors"

const PreSale: React.FC = () => {

  const { activate } = useWeb3React();

  const [ethPrice, setETHPrice] = useState<number>(1);

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

  return (
    <div className="m-auto tokenSale-background">
      <TitleComponent title="presale ends in" anchor="" content="" />
      <div className="grid -mt-8">
        <div className="flex items-center m-auto space-x-2 md:space-x-8 lg:space-x-20 xl:space-x-32 justify-center">
          <div className="flex-1 min-w-[25%] justify-center">
            <p className="text-center text-[#04d9ff] text-[20px]">Days</p>
            <p className="text-center text-[white] text-[48px] font-[700]">{remain[0].length === 1 ? `0${remain[0]}` : remain[0]}</p>
          </div>
          <div className="flex-1 min-w-[25%] justify-center">
            <p className="text-center text-[#04d9ff] text-[20px]">Hours</p>
            <p className="text-center text-[white] text-[48px] font-[700]">{remain[1].length === 1 ? `0${remain[1]}` : remain[1]}</p>
          </div>
          <div className="flex-1 min-w-[25%] justify-center">
            <p className="text-center text-[#04d9ff] text-[20px]">Minutes</p>
            <p className="text-center text-[white] text-[48px] font-[700]">{remain[2].length === 1 ? `0${remain[2]}` : remain[2]}</p>
          </div>
          <div className="flex-1 min-w-[25%] justify-center">
            <p className="text-center text-[#04d9ff] text-[20px]">Seconds</p>
            <p className="text-center text-[white] text-[48px] font-[700]">{remain[3].length === 1 ? `0${remain[3]}` : remain[3]}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PreSale