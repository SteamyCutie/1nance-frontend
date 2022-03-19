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

export const HomeComponent = ({ handler }) => {
  return (
    <div className="grid m-[12px] my-12 lg:m-24">
      <div className="grid lg:flex m-auto items-center">
        <div className="grid w-[calc(100vw-24px)] lg:w-1/2 justify-items-center lg:justify-items-end gap-10 lg:gap-12">
          <p className="font-medium text-[36px] lg:text-4xl text-left lg:text-center leading-[46.88px] px-0 lg:px-6 w-4/5 place-items-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="grid lg:flex gap-3 w-4/5 justify-left lg:justify-center">
            <CommonButton title="Purchase Token" handler={() => handler('tokensale')} className="text-[20px] lg:text-[24px] leading-[28px] lg:leading-[26px] py-3 lg:py-4 min-w-[0] lg:min-w-[200px] w-[fit-content] lg:w-auto" />
            <CommonButton title="Whitepaper" handler={() => handler('whitepaper')} className="text-[20px] lg:text-[24px] leading-[28px] lg:leading-[26px] py-3 lg:py-4 min-w-[0] lg:min-w-[200px] w-[fit-content] lg:w-auto" />
          </div>
        </div>
        <div className="w-[calc(100vw-24px)] lg:w-1/2">
          <img src={ilustrHome1nance1} alt="Home ilustr" />
        </div>
      </div>
    </div>
  )
}

export const IOCComponent = () => {
  const handlePlay = () => { }
  return (
    <div className="grid m-[12px] my-12 lg:m-24">
      <TitleComponent anchor="ico" title="What is Crypto ICO" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="flex m-auto items-center space-x-12">
        <div className="grid lg:flex gap-x-24 m-auto items-center">
          <div className="lg:order-last min-w-[30%] justify-center"><img src={ilustrWhatisICO1} alt="Illustrs" /><PlayButton handler={handlePlay} /></div>
          <div className="flex-row space-y-4 mt-24 lg:mt-0">
            <div className="font-light text-[18px] lg:text-[24px] leading-[24px] lg:leading-[28.13px] max-w-xl px-8 lg:px-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra.</div>
          </div>
        </div >
      </div>
    </div>
  )
}

export const SolutionsComponent = () => {
  return (
    <div className="grid m-[18px] my-18 lg:m-36">
      <TitleComponent anchor="solutions" title="Problems and Solutions" content="Most existing cryptocurrency exchanges suffer from a number of problems:" />
      <div className="grid gap-24 lg:gap-36 mt-8 lg:mt-24 mx-4 lg:mx-0">
        <IllustComponent illust={ilustrPoorarkitectr1} title="POOR TECHNICAL ARCHITECTURE" content={
          <div className="grid gap-2 pt-2 mx-2 lg:mx-0 text-justify">
            <p className="indent-4">Many exchanges are developed by tech people who have little or no experience in finance or in operating exchanges. They often choose the simplest approach to get the system up and running. While this may work well in the beginning, as traffic grows the system will not be able to handle the increased load. The truth is: Exchange systems need to be engineered with proper security, efficiency, speed, and scalability in mind. Although this often slows down the initial development, this is critical for long-term success.</p>
            <p className="indent-4">Our team has decades of combined experience in building and maintaining world class financial systems that shape the economy. As a result, we understand how these systems are built and work.</p>
          </div>
        } />
        <IllustComponent illust={ilustrWebinsegura2} title="INSECURE PLATFORM" content={
          <div className="grid gap-4 pt-2 mx-2 lg:mx-0 text-justify">
            <p className="indent-4">There are hundreds of exchanges that went down due to <a className="font-[900] underline underline-offset-4 decoration-solid decoration-2" href='https://bitcointalk.org/index.php?topic=576337' target="_blank" rel="noreferrer">hacking</a>.</p>
            <p className="indent-4"><b className="font-[900]">1Nance</b> has high security standards, audited, and penetration tested. We have experience in building financial systems to the highest security standards.</p>
          </div>
        } isRTL />
        <IllustComponent illust={ilustr9} title="POOR MARKET LIQUIDITY" content={
          <div className="grid gap-2 pt-2 mx-2 lg:mx-0 text-justify">
            <p className="indent-4">Poor market liquidity affects both professional traders and normal users. For instance, having a shallow orderbook means high slippage. Getting miners, institutional investors and large traders into a new exchange is a chicken and egg problem, and requires a team with deep industry resources.</p>
            <p className="indent-4"><b className="font-[900]">1Nance's</b> team have worked in both the traditional finance sector and the crypto industry for many years. Primarily, the team has worked on and operated a number of exchanges, and have accumulated a large network of partners in this space. These partners will be key in bootstrapping the exchange.</p>
          </div>
        } />
        <IllustComponent illust={ilustrBadservice1} title="POOR CUSTOMER SERVICE" content={
          <div className="grid gap-2 pt-2 mx-2 lg:mx-0 text-justify">
            <p className="indent-4">Traders are people who behave differently from other users. Thus, understanding the trader mentality is vital for running a successful exchange. This is becasue money is literally on-the-line. Many exchanges service traders as if they were running a social media site. A 3-second delay in seeing your friends’ status update would hardly be noticed. However, on an exchange the same would be unacceptable, resulting in a torrent of user complaints.</p>
            <p className="indent-4">In addition to the technology stack, <b className="font-[900]">1Nance</b> is built with quality service in mind. It shares support responsibilities among its staff. Therefore, when traders face problems, they get support from someone who knows the system, not someone reading from a script.</p>
          </div>
        } isRTL />
        <IllustComponent illust={ilustrBadlenguagesupport1} title="POOR INTERNATIONALIZATION AND LANGUAGE SUPPORT" content={
          <div className="grid gap-2 pt-2 mx-2 lg:mx-0 text-justify">
            <p className="indent-4">Blockchains have no borders. However, some exchanges focus only on one language or country or region of the world.</p>
            <p className="indent-4">In contrast, our international multi-lingual team has extensive working experience in North America, Europe and Asia; therefore we are able to smoothly support the global market.</p>
          </div>
        } />
      </div>
    </div >
  )
}

export const WhitepaperComponent = () => {
  return (
    <div className="grid m-[18px] my-20 lg:m-36 mx-8 lg:mx-auto">
      <TitleComponent anchor="whitepaper" title="White Paper" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="flex m-auto items-center gap-24 mt-2 lg:mt-20">
        <div className="hidden lg:flex min-w-[30%] justify-center"><img src={_1nanceWhite} alt="IOC ilustr" /></div>
        <div className="flex-row space-y-12 justify-items-center lg:justify-items-start grid">
          <div className="font-light text-[18px] lg:text-[24px] leading-[28.13px] max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra.</div>
          <div className="flex lg:hidden min-w-[30%] justify-center"><img src={_1nanceWhite} alt="IOC ilustr" className="rounded-[20px] lg:rounded-0" /></div>
          <DownloadButton lang="English" flag={USFlag} />
        </div>
      </div>
    </div>
  )
}

export const TokenSaleComponent = () => {
  const fontSize = window.innerWidth / 1920 * 48
  return (
    <div className="grid m-[18px] my-20 lg:m-36">
      <TitleComponent anchor="tokenSale" title="Token Sale" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="grid lg:flex items-center gap-4 lg:gap-16 mt-8 lg:mt-20">
        <div className="grid w-auto lg:w-1/2 h-full align-center justify-items-end">
          <div className="grid justify-items-end rounded-[16px] p-4 lg:p-10 lg:pt-16 w-full h-full bg-gradient-to-b from-[#FFAF10] to-[#F97919]" >
            <div className="grid w-full h-24 place-items-center justify-items-center mt-0 lg:mt-8">
              <Flipclock
                seconds={12 * 24 * 60 * 60}
                dark={false}
                fontSize={fontSize > 25 ? fontSize : 25}
                fontWeight={900}
                fontFamily="fantasy"
              />
            </div>
            <div className="flex w-full justify-around lg:mt-16">
              <TokenSaleStepComponent name="Pre-Sale" />
              <TokenSaleStepComponent name="Soft Cap" />
              <TokenSaleStepComponent name="Bonus" />
            </div>
            <div className="w-full bg-white rounded-full p-1 px-1.5 lg:p-1.5 lg:px-2"><div className="bg-gradient-to-r from-[#03185B] to-[#0040C1] rounded-[5px] lg:rounded-[8px] w-2/3 h-4 lg:h-6"></div></div>
            <div className="grid justify-items-center mt-6 lg:mt-12 w-full" ><CommonButton title="Purchase Token" className="from-[#03185B] via-[#133295] to-[#03185B] text-white font-[500] rounded-[12px] lg:rounded-[16px] text-[19px] lg:text-[24px] leading-[22px] lg:leading-[28px] min-w-[220px] lg:min-w-[250px] py-4" /></div>
          </div>
        </div>
        <div className="flex-row w-full lg:w-1/2 space-y-6 lg:space-y-12">
          <div className="font-light hidden lg:flex text-[24px] leading-[28.13px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida.</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-items-start gap-y-0 lg:gap-y-4 gap-x-4 px-4">
            <ArrowComponent content="Lorem ipsum dolor sit amet," emphasize="consectetur adipiscing elit." />
            <ArrowComponent content="Lorem ipsum dolor sit amet," emphasize="consectetur adipiscing elit." />
            <ArrowComponent content="Lorem ipsum dolor sit amet," emphasize="consectetur adipiscing elit." />
            <ArrowComponent content="Lorem ipsum dolor sit amet," emphasize="consectetur adipiscing elit." />
            <ArrowComponent content="Lorem ipsum dolor sit amet," emphasize="consectetur adipiscing elit." />
            <ArrowComponent content="Lorem ipsum dolor sit amet," emphasize="consectetur adipiscing elit." />
          </div>
        </div>
      </div>
    </div>
  )
}

export const MobileAppComponent = () => {
  return (
    <div className="grid m-[18px] my-20 lg:m-36">
      <TitleComponent anchor="mobile" title="Mobile App" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="grid lg:flex items-center gap-4 lg:gap-16 m-auto mt-8 lg:mt-20">
        <div className="flex-row space-y-4 px-2 lg:px-0 ">
          <div className="font-bold uppercase text-[20px] lg:text-[28px] leading-[32.81px] max-w-xl">ANDROID &amp; IOS APP</div>
          <div className="font-light px-2 lg:px-0 text-[18px] lg:text-[24px] indent-4 leading-[28.13px] max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra.</div>
          <div className="grid max-w-xl gap-y-4 lg:gap-y-8 pt-4 lg:pt-8">
            <div className="flex gap-2 items-center text-[18px] lg:text-[20px]"><img src={Capa2} alt="Capa2" />Live crypto rate</div>
            <div className="flex gap-2 items-center text-[18px] lg:text-[20px]"><img src={subir1} alt="subir1" />Latest cryptocurrency news</div>
            <div className="flex gap-2 items-center text-[18px] lg:text-[20px]"><img src={change1} alt="change1" />Cryptocurrenci exchange</div>
          </div>
          <div className="flex lg:flex gap-3 w-full lg:w-4/5 justify-center py-4 lg:py-8 lg:pl-16">
            <CommonButton title="Android" className="px-8 text-[24px] lg:text-[28px] leading-[32.81px] font-black gap-4 lg:gap-2 min-w-[150px] lg:min-w-[200px]" icon={android1} />
            <CommonButton title="Apple" className="px-8 lg:px-10 text-[24px] lg:text-[28px] leading-[32.81px] font-black gap-4 lg:gap-2  min-w-[150px] lg:min-w-[200px]" icon={apple1} />
          </div>
        </div>
        <div className="flex min-w-[30%] justify-center mt-3 lg:mt-1"><img src={ilustrAppMobile1} alt="Illustrs" /></div>
      </div>
    </div>
  )
}

export const RoadmapComponent = () => {
  return (
    <div className="grid my-36 mb-0">
      <TitleComponent anchor="roadmap" title="Roadmap" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="hidden lg:grid gap-16 -mt-6 bg-[url('./assets/svg/roadmap1nance1.svg')] bg-center bg-no-repeat min-h-[860px]"></div>
      <div className="grid lg:hidden gap-16 -mt-6 bg-[url('./assets/svg/roadmap1nance2.svg')] bg-center bg-no-repeat min-h-[860px]"></div>
    </div>
  )
}

export const OurCoinComponent = () => {
  return (
    <div className="grid m-[18px] my-20 lg:m-36">
      <TitleComponent anchor="ourCoin" title="Our Coin" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="grid lg:flex items-center gap-4 lg:gap-16 w-full mt-3 lg:mt-20 px-2 lg:px-0">
        <IllustComponent illust={ilustrOurCoin1} title="1NANCE COIN" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." />
      </div>
    </div>
  )
}

export const TokenDistributionComponent = () => {
  return (
    <div className="grid m-[18px] my-20 lg:m-36">
      <TitleComponent anchor="tokenDistribution" title="Token Distribution" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="flex items-center gap-16 m-auto mt-4 lg:mt-20">
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
    items[idx].push(<MemberComponent key={i} profile={item.profile} name={item.name} role={item.role} link={item.link} className="justify-center" />)
  }

  return (
    <div className="grid m-[18px] my-20 lg:m-36">
      <TitleComponent anchor="team" showContent title="Team" content="We have a solid team with both traditional Wall Street finance and cryptocurrency experience. We have a track record of successful startups under our belt." />
      <div className="hidden lg:grid">
        {
          items.map((item, i) =>
            <div key={i} className="flex items-center justify-items-center gap-48 m-auto mt-20">
              {item}
            </div>
          )
        }
      </div>
      <div className="grid lg:hidden mx-4">
        {
          _1NanceTeam.map((item, i) =>
            <MemberComponent key={i} profile={item.profile} name={item.name} role={item.role} link={item.link} className={i % 2 === 0 ? "justify-start" : "justify-end"} />
          )
        }
      </div>
    </div>
  )
}