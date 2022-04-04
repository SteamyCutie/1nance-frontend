import IllustComponent from '../IllustComponent'
import ilustrHome1nance1 from '../../assets/svg/ilustrHome1nance1.svg'
import ilustrWhatisICO1 from '../../assets/png/ilustrWhatisICO1.png'
import ilustrPoorarkitectr1 from '../../assets/svg/ilustrPoorarkitectr1.svg'
import ilustrWebinsegura2 from '../../assets/svg/ilustrWebinsegura2.svg'
import ilustr9 from '../../assets/png/ilustr9.png'
import ilustrBadservice1 from '../../assets/svg/ilustrBadservice1.svg'
import ilustrBadlenguagesupport1 from '../../assets/svg/ilustrBadlenguagesupport1.svg'
import _1nanceWhite from '../../assets/svg/_1nanceWhite.svg'
import ilustrAppMobile1 from '../../assets/png/ilustrAppMobile1.png'
import Capa2 from "../../assets/svg/Capa2.svg"
import subir1 from "../../assets/svg/subir1.svg"
import change1 from "../../assets/svg/change1.svg"
import ilustrOurCoin1 from "../../assets/svg/ilustrOurCoin1.svg"
import ilustGraficFunds1 from "../../assets/svg/ilustGraficFunds1.svg"
import _1NanceTeam from "../../configs/_1NanceTeam.json"

import USFlag from "../../assets/png/estados-unidos1.png"
import android1 from "../../assets/png/android1.png"
import apple1 from "../../assets/png/apple1.png"

import Flipclock from "react-simple-flipclock"
import { CommonButton, DownloadButton, PlayButton } from '../ButtonComponent'

import TitleComponent from './TitleComponent'
import { TokenSaleStepComponent } from '../StepComponent'
// import ArrowComponent from './ArrowComponent'
import MemberComponent from '../MemberComponent'
import _1NanceLinks from "../../configs/_1NanceLinks.json"

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export const HomeComponent = ({ handler }) => {

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
  }, []);

  useEffect(() => {
    if (window.pageYOffset > document.getElementById("section-home").offsetTop - 300) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [pageYOffset])

  return (
    <div className="grid m-[12px] my-12 md:m-18 xl:m-24" id="section-home">
      <div className="grid items-center m-auto xl:flex">
        <div className="grid w-[calc(100vw-24px)] xl:w-1/2 justify-items-center xl:justify-items-end gap-10 xl:gap-12">
          <div className="font-medium text-[18px] text-left xl:text-justify leading-[30px] px-0 xl:px-6 w-4/5 place-items-end">
            <p className="indent-4" style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07)" }}>In our view, there are fundamentally two different types of exchanges: the ones that deal with fiat currency; and the ones that deal purely in crypto. It is the latter one that we will focus on. Even though they are small now, we strongly believe that pure crypto exchanges will be bigger, many times bigger, than fiat based exchanges in the near future. They will play an ever more important role in world finance and we call this new paradigm <b className='font-bold'>1nance</b>.</p>
            <p className="indent-4 mt-2" style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 100ms" }}>With your help, <b className='font-bold'>1nance</b> will build a world-class crypto exchange, powering the future of crypto finance.</p>
          </div>
          <div className="grid w-4/5 gap-3 xl:flex justify-left xl:justify-center" style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 200ms" }}>
            <CommonButton title="Purchase Token" handler={() => handler('section-token')} className="text-[20px] xl:text-[24px] leading-[28px] xl:leading-[26px] py-3 xl:py-4 min-w-[0] xl:min-w-[200px] w-[fit-content] xl:w-auto" />
            <CommonButton title="Whitepaper" handler={() => handler('section-whitepaper')} className="text-[20px] xl:text-[24px] leading-[28px] xl:leading-[26px] py-3 xl:py-4 min-w-[0] xl:min-w-[200px] w-[fit-content] xl:w-auto" />
          </div>
        </div>
        <div className="w-[calc(100vw-24px)] grid justify-items-center xl:w-1/2" style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 300ms" }}>
          <img src={ilustrHome1nance1} alt="Home ilustr" />
        </div>
      </div>
    </div>
  )
}

export const IOCComponent = () => {

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  const [modal, setModal] = useState(false);
  const [videoHeight, setVideoHeight] = useState(100);
  const updateWindowDimensions = () => setVideoHeight(window.innerHeight / 2);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions)
  }, []);

  useEffect(() => {
    if (window.pageYOffset > document.getElementById("section-ico").offsetTop - 300) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [pageYOffset])


  useEffect(() => {
    if (modal)
      document.body.style.overflow = 'hidden'
    else
      document.body.style.overflow = 'unset'
  }, [modal])

  // Open Model to show video
  const handlePlay = () => setModal(!modal)

  return (
    <div className="grid m-[12px] my-12 md:m-18 xl:m-24" id="section-ico">
      {
        modal ? <div className="modal w-[100%] h-[100%] m-auto flex" style={{ position: "fixed", top: "0", left: "0", right: "0", backgroundColor: "rgb(255,255,255,0.4)", zIndex: "1000", backdropFilter: "blur(4px)" }} onClick={() => { setModal(!modal) }}>
          <div className="modal-dialog w-[50%] h-{videoHeight} m-auto items-center rounded-[7px]" style={{ zIndex: "1001", backgroundColor: "rgb(240,240,240)" }}>
            <div className="m-auto modal-content">
              <div className="p-2 modal-body">
                <iframe
                  width="100%"
                  height={videoHeight}
                  src={_1NanceLinks.youtube}
                  title="Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div> : <></>
      }
      {/* <TitleComponent anchor="ico" title="What is Crypto ICO" content="The ICO will be done in BTC and ETH, on multiple platforms around the world." /> */}
      <div style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07)" }}><TitleComponent anchor="ico" title="What is 1nance" content="" /></div>
      <div className="flex items-center m-auto space-x-12">
        <div className="grid items-center m-auto xl:flex gap-x-24">
          <div className="xl:order-last min-w-[30%] justify-center grid" style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 200ms" }}>
            <img src={ilustrWhatisICO1} alt="Illustrs" />
            <PlayButton handler={handlePlay} />
          </div>
          <div className="flex-row mt-16 space-y-4 xl:mt-0" style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 100ms" }}>
            <div className="font-light text-justify text-[16px] xl:text-[20px] leading-[24px] xl:leading-[32.13px] max-w-xl px-4 xl:px-0 indent-4 gap-2 grid">
              <p className="indent-4">
                1nance exchange will be a world leading crypto currency exchange. Which will feature a strong focus on altcoin trading. 1nance will offer crypto-to-crypto trading in more than 500 cryptocurrencies and virtual tokens, including Bitcoin (BTC), Ether (ETH), Litecoin (LTC), Dogecoin (DOGE), and our own token 1nance Coin (1NB). 1nance will be an online exchange where users can trade cryptocurrencies. It will  support most commonly traded cryptocurrencies.
              </p>
              <p className="indent-4">
                1nance will provide a crypto wallet for traders to store their electronic funds.
              </p>
              <p className="indent-4">
                The exchange will be supporting services for users to earn interest or transact using cryptocurrencies. It will also offer programs for miners and to help traders make investment decisions.
              </p>
              <p className="indent-4">
                1nance will have its own blockchain-based token, 1nance Coin (1NB).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SolutionsComponent = () => {

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
  }, []);

  useEffect(() => {
    if (window.pageYOffset > document.getElementById("section-solutions").offsetTop - 600) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [pageYOffset])

  return (
    <div className="grid m-[18px] my-18 md:m-24 xl:m-36" id="section-solutions">
      <div style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 100ms" }}>
        <TitleComponent anchor="solutions" title="Problems and Solutions" content="Most existing cryptocurrency exchanges suffer from a number of problems:" />
      </div>
      <div className="grid gap-24 mx-4 mt-8 xl:gap-36 xl:mt-24 xl:mx-0">
        <IllustComponent illust={ilustrPoorarkitectr1} title="POOR TECHNICAL ARCHITECTURE" content={
          <div className="grid gap-2 pt-2 mx-2 text-justify xl:mx-0">
            <p className="indent-4">Many exchanges are developed by tech people who have little or no experience in finance or in operating exchanges. They often choose the simplest approach to get the system up and running. While this may work well in the beginning, as traffic grows the system will not be able to handle the increased load. The truth is: Exchange systems need to be engineered with proper security, efficiency, speed, and scalability in mind. Although this often slows down the initial development, this is critical for long-term success.</p>
            <p className="indent-4">Our team has decades of combined experience in building and maintaining world class financial systems that shape the economy. As a result, we understand how these systems are built and work.</p>
          </div>
        } />
        <IllustComponent illust={ilustrWebinsegura2} title="INSECURE PLATFORM" content={
          <div className="grid gap-4 pt-2 mx-2 text-justify xl:mx-0">
            <p className="indent-4">There are hundreds of exchanges that went down due to <a className="font-[900] underline underline-offset-4 decoration-solid decoration-2" href='https://bitcointalk.org/index.php?topic=576337' target="_blank" rel="noreferrer">hacking</a>.</p>
            <p className="indent-4"><b className="font-[900]">1Nance</b> has high security standards, audited, and penetration tested. We have experience in building financial systems to the highest security standards.</p>
          </div>
        } isRTL />
        <IllustComponent illust={ilustr9} title="POOR MARKET LIQUIDITY" content={
          <div className="grid gap-2 pt-2 mx-2 text-justify xl:mx-0">
            <p className="indent-4">Poor market liquidity affects both professional traders and normal users. For instance, having a shallow orderbook means high slippage. Getting miners, institutional investors and large traders into a new exchange is a chicken and egg problem, and requires a team with deep industry resources.</p>
            <p className="indent-4"><b className="font-[900]">1Nance's</b> team have worked in both the traditional finance sector and the crypto industry for many years. Primarily, the team has worked on and operated a number of exchanges, and have accumulated a large network of partners in this space. These partners will be key in bootstrapping the exchange.</p>
          </div>
        } />
        <IllustComponent illust={ilustrBadservice1} title="POOR CUSTOMER SERVICE" content={
          <div className="grid gap-2 pt-2 mx-2 text-justify xl:mx-0">
            <p className="indent-4">Traders are people who behave differently from other users. Thus, understanding the trader mentality is vital for running a successful exchange. This is becasue money is literally on-the-line. Many exchanges service traders as if they were running a social media site. A 3-second delay in seeing your friends’ status update would hardly be noticed. However, on an exchange the same would be unacceptable, resulting in a torrent of user complaints.</p>
            <p className="indent-4">In addition to the technology stack, <b className="font-[900]">1Nance</b> is built with quality service in mind. It shares support responsibilities among its staff. Therefore, when traders face problems, they get support from someone who knows the system, not someone reading from a script.</p>
          </div>
        } isRTL />
        <IllustComponent illust={ilustrBadlenguagesupport1} title="POOR INTERNATIONALIZATION AND LANGUAGE SUPPORT" content={
          <div className="grid gap-2 pt-2 mx-2 text-justify xl:mx-0">
            <p className="indent-4">Blockchains have no borders. However, some exchanges focus only on one language or country or region of the world.</p>
            <p className="indent-4">In contrast, our international multi-lingual team has extensive working experience in North America, Europe and Asia; therefore we are able to smoothly support the global market.</p>
          </div>
        } />
      </div>
    </div>
  )
}

export const WhitepaperComponent = () => {

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
  }, []);

  useEffect(() => {
    if (window.pageYOffset > document.getElementById("section-whitepaper").offsetTop - 600) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [pageYOffset])

  return (
    <div className="grid m-[18px] my-20 md:m-24 xl:m-36 mx-8 xl:mx-auto" id="section-whitepaper">
      <div style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07)" }}>
        <TitleComponent anchor="whitepaper" title="White Paper" content="Announce 1nance ICO plan, and release whitepaper to general public." />
      </div>
      <div className="flex items-center gap-24 m-auto mt-2 xl:mt-20">
        <div className="hidden xl:flex min-w-[30%] justify-center" style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 100ms" }}><img src={_1nanceWhite} alt="IOC ilustr" /></div>
        <div className="grid flex-row space-y-12 justify-items-center xl:justify-items-start">
          <div className="font-light text-[18px] xl:text-[22px] leading-[28.13px] max-w-xl indent-4"></div>
          <div className="flex xl:hidden min-w-[30%] justify-center"><img src={_1nanceWhite} alt="IOC ilustr" className="rounded-[20px] xl:rounded-0" style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 200ms" }} /></div>
          <div style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 300ms" }}><DownloadButton lang="English" flag={USFlag} /></div>
        </div>
      </div>
    </div>
  )
}

export const TokenSaleComponent = () => {
  const fontSize = window.innerWidth / 1920 * 48;
  const [remainAmount, setRemainAmount] = useState(0);
  const [percent] = useState(0)

  const loadBalance = async () => {
    return 5000;
  }

  const updateBalance = async () => {
    let remainAmount = await loadBalance();
    setRemainAmount(remainAmount);
  }

  useEffect(() => {
    const fetchData = async () => {
      await updateBalance();
    }
    fetchData();
  });

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
  }, []);

  useEffect(() => {
    if (window.pageYOffset > document.getElementById("section-token").offsetTop - 300) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [pageYOffset])

  return (
    <div className="grid m-[18px] my-20 md:m-10 xl:m-36" id="section-token">
      <div style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 1000ms cubic-bezier(0.07, 0.75, 0.33, 1.07)" }}><TitleComponent anchor="tokenSale" title="Token Sale" content="" /></div>
      <div className="grid items-center gap-4 my-8 lg:flex xl:gap-16 xl:my-20">
        <div className="grid w-auto h-full lg:w-1/2 align-center justify-items-end">
          <div className="grid justify-items-end rounded-[16px] px-4 md:px-6 py-6 lg:px-6 lg:p-10 lg:pt-16 w-full h-full bg-gradient-to-b from-[#FFAF10] to-[#F97919]" style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 100ms" }}>
            <div className="grid w-full h-24 mt-0 place-items-center justify-items-center lg:mt-4">
              <Flipclock
                seconds={12 * 24 * 60 * 60}
                dark={false}
                fontSize={fontSize > 25 ? (window.innerWidth >= 1024 && window.innerWidth < 1280 ? fontSize + 5 : fontSize) : (window.innerWidth >= 720 ? fontSize + 14 : 25)}
                fontWeight={900}
                fontFamily="fantasy"
              />
            </div>
            <div className="grid w-full place-items-center justify-items-center mt-6 lg:mt-6 text-[24px] text-white font-bold">
              Remain Amount : {remainAmount}
            </div>
            <div className="grid gap-0 w-full items-end">
              <div className="flex justify-around w-full lg:mt-6 h-[48px]">
                <TokenSaleStepComponent name="Pre-Sale" />
                <TokenSaleStepComponent name="Soft Cap" />
                <TokenSaleStepComponent name="Bonus" />
              </div>
              <div className="place-self-start w-full bg-white rounded-full p-1 px-1.5 xl:p-1.5 xl:px-2 h-[24px] xl:h-8 flex items-center"><div className={`bg-gradient-to-r from-[#03185B] to-[#0040C1] rounded-[5px] xl:rounded-[8px] w-[${percent === 0 ? '0px' : percent + '%'}] h-4 xl:h-6`}></div></div>
            </div>
            <div className="grid w-full mt-6 justify-items-center lg:mt-12" ><Link to='tokenSale'><CommonButton title="Purchase Token" className="from-[#03185B] via-[#133295] to-[#03185B] text-white font-[500] rounded-[12px] lg:rounded-[16px] text-[19px] lg:text-[24px] leading-[22px] lg:leading-[28px] min-w-[220px] lg:min-w-[250px] py-4" /></Link></div>
          </div>
        </div>
        <div className="flex-row w-full space-y-6 lg:w-1/2 xl:space-y-12">
          <div className="font-light grid text-[18px] md:text-[20px] lg:text-[22px] tracking-[1px] leading-[28.13px] text-justify w-full indent-4 space-y-4" style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 200ms" }}>
            <p className="indent-4">ICO will start from 3PM July 1st, investors can purchase in 3 phases on a first-come, first-served basis until 100,000,000 tokens are sold.
              As each new phase starts, the price will increase.
            </p>
            <p className="indent-4">
              Investors will receive 1nance tokens within 5 working days after the ICO finishes.
              The detailed schedule is as below:
            </p>
          </div>
          {/* <div className="grid w-full grid-cols-1 px-4 xl:grid-cols-2 justify-items-start gap-y-0 xl:gap-y-1 gap-x-4"> */}
          <div className="w-full px-0 justify-items-start gap-y-0 xl:gap-y-1 gap-x-4" style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 300ms" }}>
            {/* <ArrowComponent content="We will roll out the platform in" emphasize="Spot trading" />
            <ArrowComponent content="We will roll out the platform in" emphasize="Margin trading" />
            <ArrowComponent content="We will roll out the platform in" emphasize="Futures" />
            <ArrowComponent content="We will roll out the platform in" emphasize="Anonymous instant exchange" />
            <ArrowComponent content="We will roll out the platform in" emphasize="Decen-tralized (on-chain) exchange" />
            <ArrowComponent content="We will roll out the platform in" emphasize="And more …" /> */}
            <table className="text-white w-full shadow-md">
              <thead>
                <tr>
                  <th className="bg-white bg-opacity-5 text-white p-6">ICO Phase</th>
                  <th className="bg-white bg-opacity-5 text-white p-6">1st week</th>
                  <th className="bg-white bg-opacity-5 text-white p-6">2nd week</th>
                  <th className="bg-white bg-opacity-5 text-white p-6">3rd week</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-white">
                  <td className="p-4">CST/GMT+8</td>
                  <td className="p-4">15:00 April 14th - <br />15:00 April 21st</td>
                  <td className="p-4">15:00 April 22nd - <br />15:00 April 28th</td>
                  <td className="p-4">15:00 April 29th - <br />15:00 May 06th</td>
                </tr>
                <tr className="bg-white text-white bg-opacity-10">
                  <td className="p-4">1 ETH</td>
                  <td className="p-4">2700 <b>1nance tokens</b></td>
                  <td className="p-4">2500 <b>1nance tokens</b></td>
                  <td className="p-4">2300 <b>1nance tokens</b></td>
                </tr>
                <tr className="text-white">
                  <td className="p-4">1 BNB</td>
                  <td className="p-4" colSpan={3}>Based on market price</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MobileAppComponent = () => {

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
  }, []);

  useEffect(() => {
    if (window.pageYOffset > document.getElementById("section-mobile").offsetTop - 300) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [pageYOffset])

  return (
    <div className="grid m-[18px] my-20 md:m-24 xl:m-36" id="section-mobile">
      <div style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07)" }}><TitleComponent anchor="mobile" title="Mobile App" content="We will support English, Chinese, Japanese and Korean on all our user interfaces." /></div>
      <div className="grid items-center gap-4 m-auto mt-8 xl:flex xl:gap-16 xl:mt-20">
        <div className="flex-row px-2 space-y-4 xl:px-0 ">
          <div className="font-bold uppercase text-[20px] xl:text-[28px] leading-[32.81px] max-w-xl" style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 300ms" }}>ANDROID &amp; IOS APP</div>
          <div className="font-light px-2 xl:px-0 text-[18px] xl:text-[24px] indent-4 leading-[30.13px] max-w-xl text-justify" style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 400ms" }}>We will support English, Chinese， Japanese and Korean on all our user interfaces. (The very initial release will be in English and Chinese only.) More languages will be added over time.</div>
          <div className="grid max-w-xl pt-4 gap-y-4 xl:gap-y-8 xl:pt-8">
            <div className="flex gap-2 items-center text-[18px] xl:text-[20px]" style={{ transform: `translateY(${anim ? '0' : '50'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 500ms" }}><img src={Capa2} alt="Capa2" />Live crypto rate</div>
            <div className="flex gap-2 items-center text-[18px] xl:text-[20px]" style={{ transform: `translateY(${anim ? '0' : '50'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 550ms" }}><img src={subir1} alt="subir1" />Latest cryptocurrency news</div>
            <div className="flex gap-2 items-center text-[18px] xl:text-[20px]" style={{ transform: `translateY(${anim ? '0' : '50'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 600ms" }}><img src={change1} alt="change1" />Cryptocurrenci exchange</div>
          </div>
          <div className="flex justify-center w-full gap-3 py-4 xl:flex xl:w-4/5 xl:py-8 xl:pl-16" style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 700ms" }}>
            <CommonButton title="Android" className="px-8 text-[24px] xl:text-[28px] leading-[32.81px] font-black gap-4 xl:gap-2 min-w-[150px] xl:min-w-[200px]" icon={android1} />
            <CommonButton title="Apple" className="px-8 xl:px-10 text-[24px] xl:text-[28px] leading-[32.81px] font-black gap-4 xl:gap-2  min-w-[150px] xl:min-w-[200px]" icon={apple1} />
          </div>
        </div>
        <div className="flex min-w-[30%] justify-center mt-3 xl:mt-1" style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 200ms" }}><img src={ilustrAppMobile1} alt="Illustrs" /></div>
      </div>
    </div>
  )
}

export const RoadmapComponent = () => {

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
  }, []);

  useEffect(() => {
    if (window.pageYOffset > document.getElementById("section-roadmap").offsetTop - 300) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [pageYOffset])

  return (
    <div className="grid mb-0 my-36" id="section-roadmap">
      <div className="mx-8 md:mx-12 xl:mx-16" style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07)" }}>
        <TitleComponent anchor="roadmap" title="Roadmap" content="The time stated in the schedule below is in Universal Time Coordinated UTC+8 hours." />
      </div>
      <div style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 250ms" }}>
        <div className="hidden xl:grid gap-16 -mt-6 bg-[url('./assets/svg/roadmap1nance1.svg')] bg-center bg-no-repeat min-h-[860px]"></div>
        <div className="md:grid lg:hidden xl:hidden gap-16 -mt-6 bg-[url('./assets/svg/roadmap1nance2.svg')] bg-center bg-no-repeat min-h-[766px]"></div>
        <div className="lg:grid hidden xl:hidden gap-16 -mt-6 bg-[url('./assets/svg/roadmap1nance3.svg')] bg-center bg-no-repeat min-h-[1124px]"></div>
      </div>
    </div>
  )
}

export const OurCoinComponent = () => {

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
  }, []);

  useEffect(() => {
    if (window.pageYOffset > document.getElementById("section-ourcoin").offsetTop - 300) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [pageYOffset])

  return (
    <div className="grid m-[18px] my-20 md:m-24 xl:m-36" id="section-ourcoin">
      <div style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07)" }}>
        <TitleComponent anchor="ourCoin" title="Our Coin" content="1nance Coin is an ERC 20 token since it exists on the ethereum blockchain." />
      </div>
      <div className="grid items-center w-full gap-4 px-2 mt-3 xl:flex xl:gap-16 xl:mt-20 xl:px-0">
        <IllustComponent illust={ilustrOurCoin1} title="" content={
          <div className="">
            <p className="font-normal pl-5 my-2">We will issue our token, the 1nance Coin, which has a straight limit of 200MM.</p>
          </div>
        } />
      </div>
    </div>
  )
}

export const TokenDistributionComponent = () => {

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
  }, []);

  useEffect(() => {
    if (window.pageYOffset > document.getElementById("section-distribution").offsetTop - 500) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [pageYOffset])

  return (
    <div className="grid m-[18px] my-20 md:m-24 xl:m-36" id="section-distribution">
      <div style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07)" }}>
        <TitleComponent anchor="tokenDistribution" title="Token Distribution" content="" />
      </div>
      <div className="flex items-center gap-16 m-auto mt-4 xl:mt-20">
        <IllustComponent illust={ilustGraficFunds1} title="Allocation" content={
          <div className="grid gap-3">
            <p className="indent-4">
              ● 50% ( 100,000,000 ) will be used for ICO - 1nance branding and marketing, including continuous
              promotion and education. There will be a sufficient budget for various
              advertisement activities, to help  <b className="font-[900]">1Nance</b> become popular among investors,
              and to attract active users to the platform.</p>
            <p className="indent-4">
              ● 40% ( 80,000,000 ) of the funds will be used to build the <b className="font-[900]">1Nance</b> platform and perform
              upgrades to the system as well as team recruiting, training, and the development budget.</p>
            <p className="indent-4">
              ● 10% ( 20,000,000 ) will be provided to the Angel Investors who supports us.</p>
          </div>
        } isRTL />
      </div>
    </div >
  )
}

export const TeamComponent = () => {
  const items = Array([])

  for (let i = 0; i < _1NanceTeam.length; i++) {
    let item = _1NanceTeam[i]
    let idx = parseInt(i / 3)
    items[idx] = (items[idx] === undefined ? [] : items[idx])
    items[idx].push(<MemberComponent key={i} anchor={item.link} profile={item.profile} name={item.name} role={item.role} link={item.link} description={item.description} className="justify-center" />)
  }

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
  }, []);

  useEffect(() => {
    if (window.pageYOffset > document.getElementById("section-team").offsetTop - 500) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [pageYOffset])

  return (
    <div className="grid m-[18px] my-20 md:m-24 lg:m-36" id="section-team">
      <div style={{ transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: "all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07)" }}>
        <TitleComponent anchor="team" showContent title="Team" content="We have a solid team with both traditional Wall Street finance and cryptocurrency experience. We have a track record of successful startups under our belt." />
      </div>
      <div className="hidden xl:grid">
        {
          items.map((item, i) =>
            <div key={i} className="flex items-center gap-48 m-auto mt-20 justify-items-center">
              {item}
            </div>
          )
        }
      </div>
      <div className="grid mx-4 xl:hidden lg:mx-12">
        {
          _1NanceTeam.map((item, i) =>
            <MemberComponent key={i} anchor={"anchor-" + item.link} profile={item.profile} name={item.name} role={item.role} link={item.link} description={item.description} className={i % 2 === 0 ? "justify-start" : "justify-end"} />
          )
        }
      </div>
    </div>
  )
}
