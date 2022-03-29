import { IconButton } from "../../components/ButtonComponent"
import twitter from "../../assets/svg/twitter.svg"
import telegram from "../../assets/svg/telegram.svg"
import facebook from "../../assets/svg/facebook.svg"
import reddit from "../../assets/svg/reddit.svg"
import youtube from "../../assets/svg/youtube.svg"
import backpattern from "../../assets/svg/footerframe1.svg"
import logoSM from "../../assets/png/logoSM.png"
import _1NanceLinks from "../../configs/_1NanceLinks.json"

const Footer: React.FC = () => {

  return (
    <div className="w-full mt-32">
      <img src={backpattern} className="w-full" alt="back" />
      <div className="flex content-center justify-end gap-6 mx-8 -mt-16 xl:gap-12 md:mx-24 xl:mx-8 xl:justify-center md:-mt-24 xl:-mt-32">
        <a href={_1NanceLinks.twitter} rel="noreferrer"><IconButton icon={twitter} className="w-[24px] h-[24px] md:w-8 md:h-8 xl:w-12 xl:h-12" /></a>
        <a href={_1NanceLinks.telegram} target="_blank" rel="noreferrer"><IconButton icon={telegram} className="w-[24px] h-[24px] md:w-8 md:h-8 xl:w-12 xl:h-12" /></a>
        <a href={_1NanceLinks.facebook} target="_blank" rel="noreferrer"><IconButton icon={facebook} className="w-[24px] h-[24px] md:w-8 md:h-8 xl:w-12 xl:h-12" /></a>
        <a href={_1NanceLinks.reddit} target="_blank" rel="noreferrer"><IconButton icon={reddit} className="w-[24px] h-[24px] md:w-8 md:h-8 xl:w-12 xl:h-12" /></a>
        <a href={_1NanceLinks.youtube} target="_blank" rel="noreferrer"><IconButton icon={youtube} className="w-[24px] h-[24px] md:w-8 md:h-8 xl:w-12 xl:h-12" /></a>
      </div>
      <a href="/"><img src={logoSM} className="mt-[-50px] md:mt-[-100px] ml-8 md:ml-16 w-8 h-8 md:w-12 md:h-12 xl:mt-[-220px] xl:ml-32 xl:w-16 xl:h-16" alt="logo" /></a>
    </div>
  )
}

export default Footer