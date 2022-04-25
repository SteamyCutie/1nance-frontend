/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useWeb3React } from "@web3-react/core"
import Web3 from "web3"
import Web3Modal from "web3modal"
import { AbiItem } from 'web3-utils'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CommonButton } from "../../components/ButtonComponent"
import TitleComponent from "../../components/DynaComponent/TitleComponent"
import Footer from "../../components/Footer"
import { ONENANCE_PRESALE_WALLET, PRESALE_END } from "../../configs/constant"
import { connectors } from "../../connectors"
import tokenLogo from "../../assets/png/logoSM.png"
import contractLogo from "../../assets/png/contract.png"
import { TO_ETHER, ONENANCE_TOKEN, ONENANCE_PRESALE } from "../../configs/constant"
import _1NancePresale from "../../configs/_1NancePresale.json"
import WalletModal from "./WalletModal"

const web3 = new Web3(Web3.givenProvider)

const PreSale: React.FC = () => {

  const { activate, account, chainId } = useWeb3React()

  const [presaleContract, setPresaleContract] = useState<any>()
  const [tokenBalance] = useState(0)
  const [bnbBalance, setBNBBalance] = useState(0)
  const [hardCap, setHardCap] = useState(4000)
  const [isLive, setLive] = useState(true)
  const [minLimit, setMinLimit] = useState(0.05)
  const [maxLimit, setMaxLimit] = useState(10)
  const [bnbPrice, setBNBPrice] = useState<number>(1)
  const [wrongNet, setWrongNet] = useState(false)

  const [amount, setAmount] = useState<any>(0.05)
  const [userContributed, setUserContributed] = useState(0)
  const [totalContributed, setTotalContributed] = useState(0)
  const [totalSold, setTotalSold] = useState(0)

  const [timer, setTimer] = useState<any>()
  const [remain, setRemain] = useState(["00", "00", "00", "00"])
  const [isOpen, setOpen] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, [])

  useEffect(() => {
    let _timer = setInterval(() => {
      setDateTime()
    }, 1000)
    setTimer(_timer)

    fetch("https://api.coingecko.com/api/v3/coins/binancecoin")
      .then((res) => res.json())
      .then((data) => {
        let usdPrice = data.market_data.current_price.usd
        setBNBPrice(usdPrice)
      })

    setPresaleContract(new web3.eth.Contract(_1NancePresale as AbiItem[], ONENANCE_PRESALE))
    const getContractInfo = async () => {
      if (!presaleContract) return
      presaleContract.methods.contractPaused().call().then((result: string) => {
        setLive(result !== 'false')
      })
      // presaleContract.methods.hardCap().call().then((result: string) => {
      //   setHardCap(TO_ETHER(parseFloat(result)))
      // })
      presaleContract.methods.minBNBLimit().call().then((result: string) => {
        setMinLimit(TO_ETHER(parseFloat(result)))
      })
      presaleContract.methods.maxBNBLimit().call().then((result: string) => {
        setMaxLimit(TO_ETHER(parseFloat(result)))
      })
      presaleContract.methods.totaltokenSold().call().then((result: string) => {
        setTotalSold(TO_ETHER(parseFloat(result), 6))
      })
      presaleContract.methods.totalRaisedBNB().call().then((result: string) => {
        setTotalContributed(TO_ETHER(parseFloat(result)))
      })
    }
    getContractInfo()
  }, [])

  useEffect(() => {
    if (!account || !web3) return
    toast.success('👋 Wallet is successfully connected!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    web3.eth.getBalance(account).then((result: string) => {
      setBNBBalance(TO_ETHER(parseFloat(result)) - 0.002)
    });
    presaleContract.methods.usersInvestments(account).call().then((result: string) => {
      setUserContributed(TO_ETHER(parseFloat(result)))
    })
  }, [account])

  useEffect(() => {
    setBNBBalance(bnbBalance > 0 ? bnbBalance : 0)
  }, [bnbBalance])

  useEffect(() => {
    if (chainId === undefined) return
    setWrongNet(chainId !== 56)
  }, [chainId])

  useEffect(() => {
    if (!wrongNet) return
    toast.error('Wrong network! Change your network to BSC Mainnet (ChainId: 56) 😰', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, [wrongNet])

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

  const handleConnect = () => {
    activate(connectors.injected)
  }

  const handleContribute = () => {
    if (!account) {
      toast.info('Please connect your wallet first 👍', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return
    }
    if (wrongNet) {
      toast.error('Wrong network! Change your network to BSC Mainnet (ChainId: 56) 😰', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return
    }
    let amountToWei = web3.utils.toWei(amount.toString(), 'ether')
    presaleContract.methods.deposit().send({ from: account, value: amountToWei }).then(() => {
      toast.success(`Successfully deposited ${amount} BNB! 😍`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch((err: any) => {
      if (err.code === 4001) {
        toast.error('User Rejected your request! 😰', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  }

  if (!didMount) {
    return null;
  }

  return (
    <div className="m-auto tokenSale-background">
      <WalletModal isOpen={isOpen} connectHandler={handleConnect} closeHandler={(e: any) => setOpen(false)} />
      <TitleComponent title="presale ends in" anchor="" content="" />
      <div className="grid justify-center w-full -mt-12 md:-mt-8 ">
        <div className="flex items-center justify-center m-auto space-x-3 md:space-x-12 lg:space-x-16 xl:space-x-16">
          <div className="flex-1 min-w-[25%]">
            <p className="text-center text-[#FFAF10] text-[20px]">Days</p>
            <p className="text-center text-white text-[48px] font-[700]">{remain[0].length === 1 ? `0${remain[0]}` : remain[0]}</p>
          </div>
          <div className="flex-1 min-w-[25%]">
            <p className="text-center text-[#FFAF10] text-[20px]">Hours</p>
            <p className="text-center text-white text-[48px] font-[700]">{remain[1].length === 1 ? `0${remain[1]}` : remain[1]}</p>
          </div>
          <div className="flex-1 min-w-[25%]">
            <p className="text-center text-[#FFAF10] text-[20px]">Minutes</p>
            <p className="text-center text-white text-[48px] font-[700]">{remain[2].length === 1 ? `0${remain[2]}` : remain[2]}</p>
          </div>
          <div className="flex-1 min-w-[25%]">
            <p className="text-center text-[#FFAF10] text-[20px]">Seconds</p>
            <p className="text-center text-white text-[48px] font-[700]">{remain[3].length === 1 ? `0${remain[3]}` : remain[3]}</p>
          </div>
        </div>
        <div className="grid items-center mt-3 md:mt-4 max-w-[1024px] bg-gradient-to-b from-[#141828ad] to-[#141828ad] rounded-3xl border-[#91b4ff] border-2 border-b-4">
          <div className="grid items-center m-5 md:flex md:justify-between">
            <p className="flex text-[20px] md:text-[24px] text-white justify-self-start">Contribute BNB to Get 1NB</p>
            {
              isLive ?
                <p className="text-[14px] md:text-[18px] text-[#2cd337] justify-self-end">Presale now is live</p>
                : <p className="text-[14px] md:text-[18px] text-[#ed3b3b] justify-self-end">Presale now is not live</p>
            }
          </div>
          <div className="grid items-center gap-4 mx-8 mb-6 md:flex justify-items-center md:justify-between">
            <div className="flex justify-center justify-self-center border-[1px] max-w-[600px] rounded-xl lg:flex md:flex items-start text-[14px] lg:text-[22px] leading-[20px] lg:leading-[24px]">
              <div className="m-auto grid justify-center text-[20px] md:text-[24px] lg:text-[28px]">
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} step="1" min={minLimit} max={maxLimit}
                  className="text-white border-[none] text-center m-0 w-48 md:w-52 lg:w-64" style={{ background: "none", outline: "none" }}
                />
              </div>
              <div className="grid justify-center p-2 md:px-4">
                <CommonButton title="Max" handler={() => setAmount(bnbBalance.toFixed(3))} className="text-black text-[14px] p-2 w-[36px] min-w-0" />
              </div>
            </div>
            {!account ? <CommonButton title="Connect" handler={() => setOpen(true)} className="text-[black] font-[500] rounded-[8px] lg:rounded-[8px] text-[18px] lg:text-[22px] leading-[20px] lg:leading-[24px] min-w-[220px] lg:min-w-[250px]" />
              : <CommonButton title="Contribute" handler={handleContribute} className="text-[black] font-[500] rounded-[8px] lg:rounded-[8px] text-[18px] lg:text-[22px] leading-[20px] lg:leading-[24px] min-w-[220px] lg:min-w-[250px]" />}
          </div>
        </div>
        <div className="flex-row justify-between w-full space-x-0 md:flex md:space-x-4">
          <div className="grid items-center mt-3 md:mt-4 w-full md:w-1/2 bg-gradient-to-b from-[#141828ad] to-[#141828ad] rounded-3xl border-[#91b4ff] border-2 border-b-4">
            <div className="m-6 text-[14px] md:text-[18px]">
              <p className="mt-0">Your 1NB Balance : </p>
              <div className="flex gap-1 text-white text-[16px] md:text-[22px] items-center ml-4"><p className="text-[#FFAF10] text-[18px] md:text-[24px]">{tokenBalance}</p> 1NB</div>
              <p className="mt-2">Your Available Contribute Amount : </p>
              <div className="flex gap-1 text-white text-[16px] md:text-[22px] items-center ml-4"><p className="text-[#FFAF10] text-[18px] md:text-[24px]">{bnbBalance < maxLimit ? bnbBalance.toFixed(3) : maxLimit}</p> BNB</div>
              <p className="mt-2">Your Contributed Amount : </p>
              <div className="flex gap-1 text-white text-[16px] md:text-[22px] items-center ml-4"><p className="text-[#FFAF10] text-[18px] md:text-[24px]">{userContributed}</p> BNB</div>
              <p className="mt-2">Total Contributed Amount : </p>
              <div className="w-full border-[1px] rounded flex-row justify-center text-[12px]"><p className="items-center text-center -mt-[2px]">{Number(userContributed / hardCap).toFixed(2)}%</p><div className="flex m-[1px] justify-self-start bg-[#2cd337]/80 -mt-[15px] min-h-[15px] rounded-sm" style={{ width: `${userContributed / hardCap}%` }}></div></div>
              <div className="flex gap-1 text-white text-[16px] md:text-[22px] items-center ml-4"><p className="text-[#FFAF10] text-[18px] md:text-[24px]">{totalContributed}</p> BNB</div>
              <p className="mt-2">Total Token Sold Amount : </p>
              <div className="w-full border-[1px] rounded flex-row justify-center text-[12px]"><p className="items-center text-center -mt-[2px]">{Number(userContributed / hardCap).toFixed(2)}%</p><div className="flex m-[1px] justify-self-start bg-[#ed3b3b]/80 -mt-[15px] min-h-[15px] rounded-sm" style={{ width: `${userContributed / hardCap}%` }}></div></div>
              <div className="flex gap-1 text-white text-[16px] md:text-[22px] items-center ml-4"><p className="text-[#FFAF10] text-[18px] md:text-[24px]">{totalSold}</p> 1NB</div>
            </div>
          </div>
          <div className="grid items-center mt-3 md:mt-4 w-full md:w-1/2 bg-gradient-to-b from-[#141828ad] to-[#141828ad] rounded-3xl border-[#91b4ff] border-2 border-b-4">
            <div className="m-6 text-[14px] md:text-[18px]">
              <p className="mt-0">HardCap : </p>
              <div className="flex gap-1 text-white text-[16px] md:text-[22px] items-center ml-4"><p className="text-[#FFAF10] text-[18px] md:text-[24px]">{hardCap}</p> BNB</div>
              <p className="mt-4">PreSale Price : </p>
              <div className="flex gap-1 text-white text-[16px] md:text-[22px] items-center ml-4"><p className="text-[#FFAF10] text-[18px] md:text-[24px]">{Number(bnbPrice / 10).toFixed(3)}</p> 1NB Per 1BNB</div>
              <p className="mt-4">Launch Price : </p>
              <div className="flex gap-1 text-white text-[16px] md:text-[22px] items-center ml-4"><p className="text-[#FFAF10] text-[18px] md:text-[24px]">{Number(bnbPrice / 15).toFixed(3)}</p> 1NB PER 1BNB</div>
              <p className="mt-4">Min Contribute : </p>
              <div className="flex gap-1 text-white text-[16px] md:text-[22px] items-center ml-4"><p className="text-[#FFAF10] text-[18px] md:text-[24px]">{minLimit}</p> BNB PER WALLET</div>
              <p className="mt-4">Max Contribute : </p>
              <div className="flex gap-1 text-white text-[16px] md:text-[22px] items-center ml-4"><p className="text-[#FFAF10] text-[18px] md:text-[24px]">{maxLimit}</p> BNB PER WALLET</div>
            </div>
          </div>
        </div>
        <div className="grid gap-0 mt-4 w-full rounded-3xl border-[#91b4ff] border-2 border-b-4 p-4">
          {/* <div className="flex items-center justify-start my-3 space-x-4">
            <div className="flex justify-center w-[72px]">
              <img src={tokenLogo} width={56} alt="token" />
            </div>
            <div className="grid">
              <p className="text-white text-[18px] font-extrabold uppercase">1NB Token Address</p>
              <p className="">{ONENANCE_TOKEN}</p>
            </div>
          </div>
          <div className="flex items-center justify-start my-3 space-x-4">
            <div className="flex justify-center w-[72px]">
              <img src={contractLogo} width={64} alt="contract" />
            </div>
            <div className="grid">
              <p className="text-white text-[18px] font-extrabold uppercase">Presale Contract Address</p>
              <a href={`https://bscscan.com/address/${ONENANCE_PRESALE}/`} target="_blank" className="max-w-[300px] md:max-w-[768px] lg:max-w-[1024px] text-ellipsis overflow-hidden" rel="noreferrer">{ONENANCE_PRESALE}</a>
            </div>
          </div> */}
          <div className="flex items-center justify-start my-3 space-x-4">
            <div className="flex justify-center w-[72px]">
              <img src={tokenLogo} width={56} alt="wallet" />
            </div>
            <div className="grid">
              <p className="text-white text-[18px] font-extrabold uppercase">Presale Wallet Address</p>
              <a href={`https://bscscan.com/address/${ONENANCE_PRESALE_WALLET}/`} target="_blank" className="text-[20px] text-[#FFAF10] active:text-[#ffaf108d] hover:text-[#ffaf10b1] transition-all duration-150 max-w-[240px] md:max-w-[768px] lg:max-w-[1024px] text-ellipsis overflow-hidden" rel="noreferrer">{ONENANCE_PRESALE_WALLET}</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div >
  )
}

export default PreSale