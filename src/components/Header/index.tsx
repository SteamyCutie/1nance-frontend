/* eslint-disable @typescript-eslint/no-unused-vars */
import Logo from "../../assets/png/logo.png"
import LogoSM from "../../assets/png/logo-sm.png"
import Flag1 from "../../assets/png/flag1.png"
import Flag2 from "../../assets/png/flag2.png"
import Flag3 from "../../assets/png/flag3.png"
import Flag4 from "../../assets/png/flag4.png"
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { CommonButton } from "../../components/ButtonComponent"
import { useState } from "react"
import { useEffect } from "react"
import Drawer from "./Drawer"
import { useHistory, useLocation } from "react-router-dom"
import { useWeb3React } from "@web3-react/core"
import { connectors } from "../../connectors"
import WalletModal from "../../pages/PreSale/WalletModal"
import { ToastContainer, toast } from 'react-toastify';

interface HeaderProps {
  handler?: any
}

const Header: React.FC<HeaderProps> = ({ handler }) => {

  const { activate, account, chainId, deactivate } = useWeb3React()

  const padL = ((1920 - window.innerWidth) * (300 / (1920 - 1300))).toFixed()
  const getNavLinkClassName = "z-50 cursor-pointer px-4 py-10 items-center text-[papayawhip] mx-auto text-[18px] hover:text-[papayawhip]/50 flex transform-all duration-300 ease-in"
  const getDrawerLinkClassName = "text-[18px] w-[calc(100%-48px)] text-left outline-none ml-[16px] mr-[32px] px-[16px] py-[24px] border-b-2 border-b-[#F97919] font-black text-black hover:text-[#133295] transition-all duration-300 ease-in"
  const moreClassName = "flex items-center cursor-pointer hover:ml-3.5 active:ml-2.5 transition-all duration-300 ease-out text-[#2f2f2f] font-[700] text-[14px] m-0 py-1.5"

  const [menuMore, setMenuMore] = useState(false)
  const [langMore, setLangMore] = useState(false)
  const [langMoreSM, setLangMoreSM] = useState(false)
  const [menuLeft, setMenuLeft] = useState(0)
  const [langLeft, setLangLeft] = useState(0)
  const [langLeftSM, setLangLeftSM] = useState(0)
  const [uiLang, setUiLang] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);
  const [wrongNet, setWrongNet] = useState(false)

  const location = useLocation();
  const history = useHistory()

  const setMoreMenu = (type: any) => {
    if (type === "LANG" && langMore === true)
      setLangMore(true)
    if (type === "LANG" && langMoreSM === true)
      setLangMoreSM(true)
    if (type === "MENU" && menuMore === true)
      setMenuMore(true)
  }

  const flagInfo = [
    { img: Flag1, code: "EN", lang: "English" },
    { img: Flag2, code: "JA", lang: "Japanese" },
    { img: Flag3, code: "RU", lang: "Russian" },
    { img: Flag4, code: "ZH", lang: "Chinese" },
  ]

  useEffect(() => {
    let menuLeft = document.getElementById("menuMore")?.offsetLeft
    let langLeft = document.getElementById("langMore")?.offsetLeft
    let langLeftSM = document.getElementById("langMoreSM")?.offsetLeft
    setMenuLeft(menuLeft ? menuLeft : 0)
    setLangLeft(langLeft ? langLeft : 0)
    setLangLeftSM(langLeftSM ? langLeftSM - 28 : 0)
  }, [])

  const handleGoSection = (index: string) => {
    if (location.pathname === '/' && index !== '/') {
      if (index === '') return
      let element: any = document.getElementById(index)
      let topPos = element.offsetTop
      let headerHeight: any = document.getElementById('header')?.offsetHeight
      if (headerHeight === 0) headerHeight = 70
      window.scrollTo({
        top: topPos - headerHeight,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      handler(index)
      history.push('/')
    }
  }

  useEffect(() => {
    if (!account) return
    toast.success('👋 Wallet is successfully connected!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, [account])

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

  const handleConnect = () => {
    activate(connectors.injected)
  }

  const handleDisconnect = () => {
    deactivate()
  }

  return (
    <div className={`${langMoreSM ? "open " : ""}`}>
      <WalletModal isOpen={isModalOpen} connectHandler={handleConnect} closeHandler={(e: any) => setModalOpen(false)} />
      <div className="items-center hidden xl:grid" id="header">
        <div className="absolute z-0 flex">
          <div className="cursor-pointer">
            <a href="https://1nance.com"><img src={Logo} alt="logo" /></a>
          </div>
        </div>
        <div className="flex justify-center" style={{ paddingLeft: padL + "px" }}>
          <div className="flex items-center">
            <div onClick={() => handleGoSection('section-ico')} className={getNavLinkClassName}>
              What is 1nance
            </div>
            <div onClick={() => handleGoSection('section-solutions')} className={getNavLinkClassName}>
              Solutions
            </div>
            <div onClick={() => handleGoSection('section-whitepaper')} className={getNavLinkClassName}>
              WhitePaper
            </div>
            <div onClick={() => handleGoSection('section-token')} className={getNavLinkClassName}>
              Token Sale
            </div>
            <div onClick={() => handleGoSection('section-roadmap')} className={getNavLinkClassName}>
              Roadmap
            </div>
            <div id="menuMore" onMouseEnter={() => setMenuMore(true)} onMouseLeave={() => setMenuMore(false)} className={getNavLinkClassName}>
              More
              <ChevronDownIcon className="w-6 h-6" />
            </div>
            <div id="moreMenu" onMouseEnter={() => setMoreMenu('MENU')} onMouseLeave={() => setMenuMore(false)} className={`${menuMore ? "opacity-1 scale-y-100" : "opacity-0 scale-y-0"} origin-top grid transition-all duration-300 absolute bg-[rgba(240,240,240,0.9)] backdrop-blur-sm px-2 py-1.5 w-[180px] rounded-[0.25rem] drop-shadow-lg"`} style={{ left: menuLeft, top: menuMore ? 90 : 80 }}>
              <div onClick={() => handleGoSection('section-mobile')} className={moreClassName}><ChevronRightIcon width={20} height={20} /> Mobile App</div>
              <div onClick={() => handleGoSection('section-ourcoin')} className={moreClassName}><ChevronRightIcon width={20} height={20} /> Our Coin</div>
              <div onClick={() => handleGoSection('section-distribution')} className={moreClassName}><ChevronRightIcon width={20} height={20} /> Token Distribution</div>
              <div onClick={() => handleGoSection('section-team')} className={moreClassName}><ChevronRightIcon width={20} height={20} /> Team</div>
            </div>
            <div id="langMore" onMouseEnter={() => setLangMore(true)} onMouseLeave={() => setLangMore(false)} className={`${getNavLinkClassName} flex flex-rows`}>
              <div className="flex items-center w-16">
                <img src={flagInfo[uiLang].img} className="w-8 h-8" alt={flagInfo[uiLang].code} />
                <div className="ml-2 font-[700] tracking-widest">{flagInfo[uiLang].code}</div>
              </div>
              <ChevronDownIcon className="w-6 h-6" />
            </div>
            <div id="moreLang" onMouseEnter={() => setMoreMenu('LANG')} onMouseLeave={() => setLangMore(false)} className={`${langMore ? "opacity-1 scale-y-100" : "opacity-0 scale-y-0"} origin-top grid transition-all duration-300 absolute bg-[rgba(240,240,240,0.9)] backdrop-blur-sm px-3 py-2 w-[160px] rounded-[0.25rem] drop-shadow-lg"`} style={{ left: langLeft, top: langMore ? 90 : 80, boxShadow: "-1px 2px 15px 0 rgb(0 0 0 / 20%)" }}>
              {flagInfo.map((item, i) =>
                <div key={i} onClick={() => { setUiLang(i); setLangMore(false) }} className={moreClassName}>
                  <div className="flex items-center gap-2">
                    <img src={item.img} className="w-8 h-8" alt={item.lang} />
                    <div>{item.lang}</div>
                  </div>
                </div>
              )}
            </div>
            {/* <a href="https://presale.1nance.com/"><CommonButton title="Join Presale" isSmall /></a> */}
            {!account ? <CommonButton title="Connect" handler={() => setModalOpen(true)} className="text-[black] font-[500] px-4 py-2 mr-2 rounded-[12px] text-[18px] lg:text-[22px] leading-[20px] lg:leading-[24px] min-w-[80px] lg:min-w-[160px]" />
              : <CommonButton title="Disconnect" handler={handleDisconnect} className="text-[black] font-[500] px-4 py-2 mr-2 rounded-[12px] text-[18px] lg:text-[22px] leading-[20px] lg:leading-[24px] min-w-[80px] lg:min-w-[160px]" />}
          </div>
        </div>
      </div >
      <div className="items-center justify-between flex xl:hidden ml-5 md:ml-[40px] md:mr-[20px]">
        <div className="grid gap-[2px] md:gap-[4px] hover:scale-105 active:scale-95" onClick={() => setIsOpen(!isOpen)}>
          <hr className="w-[20px] md:w-[24px]" style={{ border: '2px solid white' }} />
          <hr className="w-[20px] md:w-[24px]" style={{ border: '2px solid white' }} />
          <hr className="w-[20px] md:w-[24px]" style={{ border: '2px solid white' }} />
        </div>
        <div className="z-0 flex">
          <div onClick={() => handleGoSection('/')} className="justify-center cursor-pointer" style={{ transform: 'translateX(10px)' }}>
            <img src={LogoSM} alt="logo" />
          </div>
          <Drawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            position="left"
          >
            <div className="demo-content">
              <img src={Logo} className="w-[250px] h-[72px] mb-[20px]" alt="logo" />
              <button onClick={() => { setIsOpen(false); handleGoSection('section-ico') }} className={getDrawerLinkClassName}>
                What is 1nance
              </button>
              <button onClick={() => { setIsOpen(false); handleGoSection('section-solutions') }} className={getDrawerLinkClassName}>
                Solution
              </button>
              <button onClick={() => { setIsOpen(false); handleGoSection('section-whitepaper') }} className={getDrawerLinkClassName}>
                Whitepaper
              </button>
              <button onClick={() => { setIsOpen(false); handleGoSection('section-token') }} className={getDrawerLinkClassName}>
                Token Sale
              </button>
              <button onClick={() => { setIsOpen(false); handleGoSection('section-roadmap') }} className={getDrawerLinkClassName}>
                Roadmap
              </button>
              <button onClick={() => { setIsOpen(false); handleGoSection('section-mobile') }} className={getDrawerLinkClassName}>
                Mobile App
              </button>
              <button onClick={() => { setIsOpen(false); handleGoSection('section-ourcoin') }} className={getDrawerLinkClassName}>
                Our Coin
              </button>
              <button onClick={() => { setIsOpen(false); handleGoSection('section-distribution') }} className={getDrawerLinkClassName}>
                Token Distribution
              </button>
              <button onClick={() => { setIsOpen(false); handleGoSection('section-team') }} className={getDrawerLinkClassName}>
                Team
              </button>
            </div>
          </Drawer>
        </div>
        {/* <div id="langMoreSM" onClick={() => { if (!langMoreSM) { setLangMoreSM(true); setMoreMenu('LANG') } else { setLangMoreSM(false) } }} className={`${getNavLinkClassName} z-[998] flex flex-rows text-[14px] spacing-[3px] px-0 mx-0 py-5`}>
          <div className="flex items-center w-13">
            <img src={flagInfo[uiLang].img} className="w-6 h-6 md:w-8 md:h-8" alt={flagInfo[uiLang].code} />
            <div className="ml-2 font-[700] w-[20px] md:w-[24px] md:text-[17px] text-center tracking-widest">{flagInfo[uiLang].code}</div>
          </div>
          <ChevronDownIcon className="w-6 h-6" />
        </div>
        <div id="moreLangSM" className={`${langMoreSM ? "opacity-1 scale-y-100" : "opacity-0 scale-y-0"} z-[998] origin-top grid transition-all duration-300 absolute bg-[rgba(240,240,240,0.9)] backdrop-blur-sm px-3 py-2 w-[120px] md:w-[140px] rounded-[0.25rem] drop-shadow-lg"`} style={{ left: langLeftSM, top: langMoreSM ? 70 : 80, boxShadow: "-1px 2px 15px 0 rgb(0 0 0 / 20%)" }}>
          {flagInfo.map((item, i) =>
            <div key={i} onClick={() => { setUiLang(i); setLangMoreSM(false) }} className={`${moreClassName}`}>
              <div className="flex items-center gap-1.5 md:gap-2 md:text-[16px]">
                <img src={item.img} className="w-5 h-5 md:w-6 md:h-6" alt={item.lang} />
                <div>{item.lang}</div>
              </div>
            </div>
          )}
        </div> */}
        {/* <a href="https://presale.1nance.com/" className="md:hidden"><CommonButton title="Join" className="px-5 py-2 mr-4" isSmall /></a>
        <a href="https://presale.1nance.com/" className="hidden md:flex"><CommonButton title="Join Presale" isSmall /></a> */}
        {!account ? <CommonButton title="Connect" handler={() => setModalOpen(true)} className="text-[black] font-[500] px-4 py-2 mr-2 rounded-[12px] text-[18px] lg:text-[22px] leading-[20px] lg:leading-[24px] min-w-[80px] lg:min-w-[160px]" />
          : <CommonButton title="Disconnect" handler={handleDisconnect} className="text-[black] font-[500] px-4 py-2 mr-2 rounded-[12px] text-[18px] lg:text-[22px] leading-[20px] lg:leading-[24px] min-w-[80px] lg:min-w-[160px]" />}
      </div>
      <div className="backdrop langdrop" onClick={() => setLangMoreSM(false)} />
      <ToastContainer />
    </div>
  )
}

export default Header
