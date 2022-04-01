import React, { useEffect, useState } from 'react'

// interface IllustComponentProps {
//   illust: any,
//   title?: any,
//   content: any,
//   isRTL?: boolean,
// }

const IllustComponent = ({ illust, title = "", content, isRTL = false }) => {

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
  }, []);

  useEffect(() => {
    if (window.pageYOffset > document.getElementById(illust).offsetTop - 700) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [illust, pageYOffset])

  return (
    <div className="grid lg:flex gap-x-24 md:gap-y-12 gap-y-0 m-auto justify-items-center items-center" id={illust}>
      <div className={`flex ${isRTL ? "lg:order-last" : "lg:order-first"} mt-10 md:mt-0 order-last w-3/4 md:w-auto min-w-[30%] justify-center`} style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: `all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 400ms` }}><img src={illust} alt="Illustrs" /></div>
      <div className="flex-row space-y-4" style={{ transform: `translateY(${anim ? '0' : '100'}px)`, opacity: anim ? 1 : 0, transition: `all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 150ms` }}>
        <div className="font-bold uppercase text-[19px] md:text-[28px] leading-[23px] md:leading-[32.81px] tracking-wider max-w-xl">{title}</div>
        <div className="font-thin text-[17px] md:text-[20px] tracking-wide px-2 indent-3 leading-[21px] md:leading-[28.13px] max-w-xl">{content}</div>
      </div>
    </div >
  )
}

export default IllustComponent