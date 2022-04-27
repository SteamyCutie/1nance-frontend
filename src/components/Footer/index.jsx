import { IconButton } from "../ButtonComponent"
import twitter from "../../assets/svg/twitter.svg"
import telegram from "../../assets/svg/telegram.svg"
import facebook from "../../assets/svg/facebook.svg"
import reddit from "../../assets/svg/reddit.svg"
import youtube from "../../assets/svg/youtube.svg"
import mail from "../../assets/svg/mail.svg"
import backpattern from "../../assets/svg/footerframe1.svg"
import logoSM from "../../assets/png/logoSM.png"
import _1NanceLinks from "../../configs/_1NanceLinks.json"
import { useEffect, useState } from "react"

const Footer = () => {

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
  }, []);

  useEffect(() => {
    if (window.pageYOffset > document.getElementById("section-footer").offsetTop - 900) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [pageYOffset])

  return (
    <div className="w-full mt-32" id="section-footer">
      <img src={backpattern} className="w-full" alt="back" />
      <div className="flex content-center justify-end gap-6 mx-8 -mt-16 xl:gap-12 md:mx-24 xl:mx-8 xl:justify-center md:-mt-24 xl:-mt-32">
        <a href={_1NanceLinks.twitter} rel="noreferrer" style={{ transform: `translateY(${anim ? '0' : '40'}px)`, opacity: anim ? 1 : 0, transition: "all 300ms cubic-bezier(0.13, 1.35, 0.77, 1.41) 100ms" }}><IconButton icon={twitter} className="w-[24px] h-[24px] md:w-8 md:h-8 xl:w-12 xl:h-12" /></a>
        <a href={_1NanceLinks.telegram} target="_blank" style={{ transform: `translateY(${anim ? '0' : '40'}px)`, opacity: anim ? 1 : 0, transition: "all 300ms cubic-bezier(0.13, 1.35, 0.77, 1.41) 200ms" }} rel="noreferrer"><IconButton icon={telegram} className="w-[24px] h-[24px] md:w-8 md:h-8 xl:w-12 xl:h-12" /></a>
        <a href={_1NanceLinks.facebook} target="_blank" style={{ transform: `translateY(${anim ? '0' : '40'}px)`, opacity: anim ? 1 : 0, transition: "all 300ms cubic-bezier(0.13, 1.35, 0.77, 1.41) 300ms" }} rel="noreferrer"><IconButton icon={facebook} className="w-[24px] h-[24px] md:w-8 md:h-8 xl:w-12 xl:h-12" /></a>
        <a href={_1NanceLinks.reddit} target="_blank" style={{ transform: `translateY(${anim ? '0' : '40'}px)`, opacity: anim ? 1 : 0, transition: "all 300ms cubic-bezier(0.13, 1.35, 0.77, 1.41) 400ms" }} rel="noreferrer"><IconButton icon={reddit} className="w-[24px] h-[24px] md:w-8 md:h-8 xl:w-12 xl:h-12" /></a>
        <a href={_1NanceLinks.youtube} target="_blank" style={{ transform: `translateY(${anim ? '0' : '40'}px)`, opacity: anim ? 1 : 0, transition: "all 300ms cubic-bezier(0.13, 1.35, 0.77, 1.41) 500ms" }} rel="noreferrer"><IconButton icon={youtube} className="w-[24px] h-[24px] md:w-8 md:h-8 xl:w-12 xl:h-12" /></a>
        <a href={`mailto:${_1NanceLinks.contact}`} target="_blank" style={{ transform: `translateY(${anim ? '0' : '40'}px)`, opacity: anim ? 1 : 0, transition: "all 300ms cubic-bezier(0.13, 1.35, 0.77, 1.41) 500ms" }} rel="noreferrer"><div className="scale-[1.5]"><IconButton icon={mail} className="w-[24px] h-[24px] md:w-8 md:h-8 xl:w-12 xl:h-12" /></div></a>
      </div>
      <a href="https://1nance.com"><img src={logoSM} className="mt-[-50px] md:mt-[-100px] ml-8 md:ml-16 w-8 h-8 md:w-12 md:h-12 xl:mt-[-220px] xl:ml-32 xl:w-16 xl:h-16" alt="logo" /></a>
    </div>
  )
}

export default Footer