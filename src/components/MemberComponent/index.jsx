import linkedin from "../../assets/svg/linkedin.svg"
import { IconButton } from "../ButtonComponent"
import { useState, useEffect } from "react";

// interface MemberComponentProps {
//   profile?: any,
//   name: any,
//   role: any,
//   link?: any,
//   description: any,
//   className?: any,
// }

const MemberComponent = ({ anchor, profile = null, name, role, link, description, className = "" }) => {

  const img = require(`../../assets/team/${profile === null ? 'user.png' : profile}`);
  // const onHoverColor = "from-[#75777b] to-[#FFFFFF]";
  const onCurrentColor = "from-[#FD4F00] to-[#FFCA91]";
  // const onHoverDeg = "-30deg";
  // const onCurrentDeg = "-40deg";
  const [modal, setModal] = useState(false);
  const [buttonClassName] = useState(onCurrentColor);
  // const [lineDeg, setLineDeg] = useState(onCurrentDeg);
  // const [lineDegClass, setLineDegClass] = useState("line_rotato_stop");

  useEffect(() => {
    if (modal)
      document.body.style.overflow = 'hidden'
    else
      document.body.style.overflow = 'unset'
  }, [modal])

  // const mouseEnterHandle = () => {
  //   setButtonClassName(onHoverColor);
  //   setLineDeg(onHoverDeg);
  //   setLineDegClass("line_rotato");
  // }

  // const mouseLeaveHandle = () => {
  //   setButtonClassName(onCurrentColor);
  //   setLineDeg(onCurrentDeg);
  //   setLineDegClass("line_rotato_stop");
  // }

  const [anim, setAnim] = useState(false)
  const [pageYOffset, setYOffset] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYOffset(window.pageYOffset)
    })
  }, []);

  useEffect(() => {
    if (pageYOffset > document.getElementById(anchor).offsetTop - 600) {
      setAnim(true)
    } else {
      setAnim(false)
    }
  }, [anchor, pageYOffset])

  return (
    <>
      {
        modal ? <div className="modal w-[100%] h-[100%] m-auto flex" style={{ position: "fixed", top: "0", left: "0", right: "0", backgroundColor: "rgb(255,255,255,0.4)", zIndex: "1000", backdropFilter: "blur(4px)" }} onClick={() => { setModal(!modal) }}>
          <div className="modal-dialog md:w-[80%] lg:w-[50%] min-h-[300px] m-auto items-center p-4 rounded-[5px]" style={{ zIndex: "1001" }}>
            <div className="modal-content rounded-[8px] h-content-full" style={{ backgroundColor: "rgb(255,255,255)" }}>
              <figure className="p-4 lg:p-8 bg-slate-100 rounded-xl dark:bg-slate-800">
                <img className="w-24 h-24 mx-auto rounded-full md:w-48 md:h-48" src={img} alt="" />
                <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
                  <blockquote>
                    <p className="text-sm md:text-md lg:text-lg font-medium text-black indent-4">
                      {description}
                    </p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-600">
                      {name}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                      {role}
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div> : <></>
      }
      <div className={`grid justify-items-center gap-2 ${className}`} onClick={() => { setModal(!modal); }} id={anchor}>
        <div className={`grid place-content-center align-middle rounded-full w-[160px] h-[160px] lg:w-[180px] lg:h-[180px] m-auto bg-gradient-radial ${buttonClassName}`} style={{ zIndex: "999", transform: `translateY(${anim ? '0' : '200'}px)`, opacity: anim ? 1 : 0, transition: `all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 150ms` }}>
          <div className="bg-white w-[140px] h-[140px] lg:w-[160px] lg:h-[160px] rounded-full">
            <img src={img} alt="profile" className="w-full h-full rounded-full" />
          </div>
        </div>
        <div className="grid gap-1 justify-items-start">
          <p className="flex font-bold text-[18px] lg:text-[24px]" style={{ transform: `translateY(${anim ? '0' : '50'}px)`, opacity: anim ? 1 : 0, transition: `all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 650ms` }}>{name}</p>
          <p className="flex text-[14px] lg:text-[18px]" style={{ transform: `translateY(${anim ? '0' : '50'}px)`, opacity: anim ? 1 : 0, transition: `all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 750ms` }}>{role}</p>
          <a href={link} target="_blank" rel="noreferrer" style={{ transform: `translateY(${anim ? '0' : '50'}px)`, opacity: anim ? 1 : 0, transition: `all 800ms cubic-bezier(0.07, 0.75, 0.33, 1.07) 850ms` }}><IconButton icon={linkedin} className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]" /></a>
        </div>
      </div>
    </>
  )
}

export default MemberComponent