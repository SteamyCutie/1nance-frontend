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
import ArrowComponent from './ArrowComponent'
import MemberComponent from '../MemberComponent'

import { useEffect, useState } from 'react';

export const HomeComponent = ({ handler }) => {
  return (
    <div className="grid m-[12px] my-12 md:m-18 xl:m-24">
      <div className="grid items-center m-auto xl:flex">
        <div className="grid w-[calc(100vw-24px)] xl:w-1/2 justify-items-center xl:justify-items-end gap-10 xl:gap-12">
          <p className="font-medium text-[36px] xl:text-4xl text-left xl:text-center leading-[50px] px-0 xl:px-6 w-4/5 place-items-end">We envision that <b>1nance</b> will build a world-class crypto exchange, powering the future of crypto finance.</p>
          <div className="grid w-4/5 gap-3 xl:flex justify-left xl:justify-center">
            <CommonButton title="Purchase Token" handler={() => handler('tokenSale')} className="text-[20px] xl:text-[24px] leading-[28px] xl:leading-[26px] py-3 xl:py-4 min-w-[0] xl:min-w-[200px] w-[fit-content] xl:w-auto" />
            <CommonButton title="Whitepaper" handler={() => handler('whitepaper')} className="text-[20px] xl:text-[24px] leading-[28px] xl:leading-[26px] py-3 xl:py-4 min-w-[0] xl:min-w-[200px] w-[fit-content] xl:w-auto" />
          </div>
        </div>
        <div className="w-[calc(100vw-24px)] grid justify-items-center xl:w-1/2">
          <img src={ilustrHome1nance1} alt="Home ilustr" />
        </div>
      </div>
    </div>
  )
}

export const IOCComponent = () => {
  // Open Model to show video
  const handlePlay = () => { }
  return (
    <div className="grid m-[12px] my-12 md:m-18 xl:m-24">
      <TitleComponent anchor="ico" title="What is Crypto ICO" content="The ICO will be done in BTC and ETH, on multiple platforms around the world." />
      <div className="flex items-center m-auto space-x-12">
        <div className="grid items-center m-auto xl:flex gap-x-24">
          <div className="xl:order-last min-w-[30%] justify-center grid">
            <img src={ilustrWhatisICO1} alt="Illustrs" />
            <PlayButton handler={handlePlay} />
          </div>
          <div className="flex-row mt-16 space-y-4 xl:mt-0">
            <div className="font-light text-[18px] xl:text-[24px] leading-[24px] xl:leading-[32.13px] max-w-xl px-8 xl:px-0 indent-4">Basically, there are two types of exchanges: the ones that deal with fiat currency; and others that deal purely in cryptocurrency. It is the latter one that we will focus on. Even though pure crypto exchanges are small now, we strongly believe that they will be bigger, many times bigger, than fiat based exchanges in the near future. Ultimately, they will play an ever more important role in world finance. We call this new paradigm <b className='font-bold'>1nance</b>.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SolutionsComponent = () => {
  return (
    <div className="grid m-[18px] my-18 md:m-24 xl:m-36">
      <TitleComponent anchor="solutions" title="Problems and Solutions" content="Most existing cryptocurrency exchanges suffer from a number of problems:" />
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
  return (
    <div className="grid m-[18px] my-20 md:m-24 xl:m-36 mx-8 xl:mx-auto">
      <TitleComponent anchor="whitepaper" title="White Paper" content="Announce 1nance ICO plan, and release whitepaper to general public." />
      <div className="flex items-center gap-24 m-auto mt-2 xl:mt-20">
        <div className="hidden xl:flex min-w-[30%] justify-center"><img src={_1nanceWhite} alt="IOC ilustr" /></div>
        <div className="grid flex-row space-y-12 justify-items-center xl:justify-items-start">
          <div className="font-light text-[18px] xl:text-[22px] leading-[28.13px] max-w-xl indent-4">Basically, there are two types of exchanges: the ones that deal with fiat currency; and others that deal purely in cryptocurrency. It is the latter one that we will focus on. Even though pure crypto exchanges are small now, we strongly believe that they will be bigger, many times bigger, than fiat based exchanges in the near future. Ultimately, they will play an ever more important role in world finance. We call this new paradigm 1nance.</div>
          <div className="flex xl:hidden min-w-[30%] justify-center"><img src={_1nanceWhite} alt="IOC ilustr" className="rounded-[20px] xl:rounded-0" /></div>
          <DownloadButton lang="English" flag={USFlag} />
        </div>
      </div>
    </div>
  )
}

export const TokenSaleComponent = () => {
  const fontSize = window.innerWidth / 1920 * 48;
  const [remainAmount, setRemainAmount] = useState(0);

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

  return (
    <div className="grid m-[18px] my-20 md:m-10 xl:m-36">
      <TitleComponent anchor="tokenSale" title="Token Sale" content="Our matching engine is capable of sustaining upto 1,400,000 orders / second, making 1nance one of the fastest exchanges in the market today." />
      <div className="grid items-center gap-4 mt-8 lg:flex xl:gap-16 xl:mt-20">
        <div className="grid w-auto h-full lg:w-1/2 align-center justify-items-end">
          <div className="grid justify-items-end rounded-[16px] px-4 md:px-6 py-6 lg:px-6 lg:p-10 lg:pt-16 w-full h-full bg-gradient-to-b from-[#FFAF10] to-[#F97919]" >
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
            <div className="flex justify-around w-full lg:mt-6">
              <TokenSaleStepComponent name="Pre-Sale" />
              <TokenSaleStepComponent name="Soft Cap" />
              <TokenSaleStepComponent name="Bonus" />
            </div>
            <div className="w-full bg-white rounded-full p-1 px-1.5 lg:p-1.5 lg:px-2"><div className="bg-gradient-to-r from-[#03185B] to-[#0040C1] rounded-[5px] lg:rounded-[8px] w-2/3 h-4 xl:h-6"></div></div>
            <div className="grid w-full mt-6 justify-items-center lg:mt-12" ><a href='/tokenSale'><CommonButton title="Purchase Token" className="from-[#03185B] via-[#133295] to-[#03185B] text-white font-[500] rounded-[12px] lg:rounded-[16px] text-[19px] lg:text-[24px] leading-[22px] lg:leading-[28px] min-w-[220px] lg:min-w-[250px] py-4" /></a></div>
          </div>
        </div>
        <div className="flex-row w-full space-y-6 lg:w-1/2 xl:space-y-12">
          <div className="font-light hidden xl:flex text-[24px] leading-[28.13px] w-full indent-4">Our matching engine is capable of sustaining upto 1,400,000 orders / second, making 1nance one of the fastest exchanges in the market today. As a result, your orders will never be stuck due to the matching engine even when there are too many transactions.</div>
          <div className="grid w-full grid-cols-1 px-4 xl:grid-cols-2 justify-items-start gap-y-0 xl:gap-y-1 gap-x-4">
            <ArrowComponent content="We will roll out the platform in" emphasize="Spot trading" />
            <ArrowComponent content="We will roll out the platform in" emphasize="Margin trading" />
            <ArrowComponent content="We will roll out the platform in" emphasize="Futures" />
            <ArrowComponent content="We will roll out the platform in" emphasize="Anonymous instant exchange" />
            <ArrowComponent content="We will roll out the platform in" emphasize="Decen-tralized (on-chain) exchange" />
            <ArrowComponent content="We will roll out the platform in" emphasize="And more …" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const MobileAppComponent = () => {
  return (
    <div className="grid m-[18px] my-20 md:m-24 xl:m-36">
      <TitleComponent anchor="mobile" title="Mobile App" content="We will support English, Chinese, Japanese and Korean on all our user interfaces." />
      <div className="grid items-center gap-4 m-auto mt-8 xl:flex xl:gap-16 xl:mt-20">
        <div className="flex-row px-2 space-y-4 xl:px-0 ">
          <div className="font-bold uppercase text-[20px] xl:text-[28px] leading-[32.81px] max-w-xl">ANDROID &amp; IOS APP</div>
          <div className="font-light px-2 xl:px-0 text-[18px] xl:text-[24px] indent-4 leading-[28.13px] max-w-xl">We will support English, Chinese， Japanese and Korean on all our user interfaces. (The very initial release will be in English and Chinese only.) More languages will be added over time.</div>
          <div className="grid max-w-xl pt-4 gap-y-4 xl:gap-y-8 xl:pt-8">
            <div className="flex gap-2 items-center text-[18px] xl:text-[20px]"><img src={Capa2} alt="Capa2" />Live crypto rate</div>
            <div className="flex gap-2 items-center text-[18px] xl:text-[20px]"><img src={subir1} alt="subir1" />Latest cryptocurrency news</div>
            <div className="flex gap-2 items-center text-[18px] xl:text-[20px]"><img src={change1} alt="change1" />Cryptocurrenci exchange</div>
          </div>
          <div className="flex justify-center w-full gap-3 py-4 xl:flex xl:w-4/5 xl:py-8 xl:pl-16">
            <CommonButton title="Android" className="px-8 text-[24px] xl:text-[28px] leading-[32.81px] font-black gap-4 xl:gap-2 min-w-[150px] xl:min-w-[200px]" icon={android1} />
            <CommonButton title="Apple" className="px-8 xl:px-10 text-[24px] xl:text-[28px] leading-[32.81px] font-black gap-4 xl:gap-2  min-w-[150px] xl:min-w-[200px]" icon={apple1} />
          </div>
        </div>
        <div className="flex min-w-[30%] justify-center mt-3 xl:mt-1"><img src={ilustrAppMobile1} alt="Illustrs" /></div>
      </div>
    </div>
  )
}

export const RoadmapComponent = () => {
  return (
    <div className="grid mb-0 my-36">
      <div className="mx-8 md:mx-12 xl:mx-16">
        <TitleComponent anchor="roadmap" title="Roadmap" content="The time stated in the schedule below is in Universal Time Coordinated UTC+8 hours." />
      </div>
      <div className="hidden xl:grid gap-16 -mt-6 bg-[url('./assets/svg/roadmap1nance1.svg')] bg-center bg-no-repeat min-h-[860px]"></div>
      <div className="md:grid lg:hidden xl:hidden gap-16 -mt-6 bg-[url('./assets/svg/roadmap1nance2.svg')] bg-center bg-no-repeat min-h-[766px]"></div>
      <div className="lg:grid hidden xl:hidden gap-16 -mt-6 bg-[url('./assets/svg/roadmap1nance3.svg')] bg-center bg-no-repeat min-h-[1124px]"></div>
    </div>
  )
}

export const OurCoinComponent = () => {
  return (
    <div className="grid m-[18px] my-20 md:m-24 xl:m-36">
      <TitleComponent anchor="ourCoin" title="Our Coin" content="1nance Coin is an ERC 20 token since it exists on the ethereum blockchain." />
      <div className="grid items-center w-full gap-4 px-2 mt-3 xl:flex xl:gap-16 xl:mt-20 xl:px-0">
        <IllustComponent illust={ilustrOurCoin1} title="1NANCE COIN" content="1nance Coin is an ERC 20 token since it exists on the ethereum blockchain. However, more coins will be added over time. Generally, we will only add coins that have strong credibility, high user base, and high liquidity. If you have a coin that you wish to list on 1nance later, it is important to participate in our ICO. At the moment, we have no plans to support any fiat currencies such as USD, RMB, JPY, or KRX." />
      </div>
    </div>
  )
}

export const TokenDistributionComponent = () => {
  return (
    <div className="grid m-[18px] my-20 md:m-24 xl:m-36">
      <TitleComponent anchor="tokenDistribution" title="Token Distribution" content="We will issue our token, the 1nance Coin, which has a straight limit of 200MM. 1nance Coin is an ERC 20 token since it exists on the ethereum blockchain." />
      <div className="flex items-center gap-16 m-auto mt-4 xl:mt-20">
        <IllustComponent illust={ilustGraficFunds1} title="1NANCE COIN" content={
          <div className="grid gap-3">
            <p className="indent-4">
              ● 35% of the funds will be used to build the <b className="font-[900]">1Nance</b> platform and perform
              upgrades to the system as well as team recruiting, training, and the
              development budget.</p>
            <p className="indent-4">
              ● 50% will be used for 1nance branding and marketing, including continuous
              promotion and education. There will be a sufficient budget for various
              advertisement activities, to help  <b className="font-[900]">1Nance</b> become popular among investors,
              and to attract active users to the platform.</p>
            <p className="indent-4">
              ● 15% will be kept in reserve to cope with any unexpected situations that might
              come up.</p>
          </div>
        } isRTL />
      </div>
    </div>
  )
}

export const TeamComponent = () => {
  const items = Array([])

  for (let i = 0; i < _1NanceTeam.length; i++) {
    let item = _1NanceTeam[i]
    let idx = parseInt(i / 3)
    items[idx] = (items[idx] === undefined ? [] : items[idx])
    items[idx].push(<MemberComponent key={i} profile={item.profile} name={item.name} role={item.role} link={item.link} description={item.description} className="justify-center" />)
  }

  return (
    <div className="grid m-[18px] my-20 md:m-24 lg:m-36">
      <TitleComponent anchor="team" showContent title="Team" content="We have a solid team with both traditional Wall Street finance and cryptocurrency experience. We have a track record of successful startups under our belt." />
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
            <MemberComponent key={i} profile={item.profile} name={item.name} role={item.role} link={item.link} description={item.description} className={i % 2 === 0 ? "justify-start" : "justify-end"} />
          )
        }
      </div>
    </div>
  )
}