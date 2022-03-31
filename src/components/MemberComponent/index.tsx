import linkedin from "../../assets/svg/linkedin.svg"
import { IconButton } from "../../components/ButtonComponent"
import { useState, useEffect } from "react";

interface MemberComponentProps {
  profile?: any,
  name: any,
  role: any,
  link?: any,
  description: any,
  className?: any,
}

const MemberComponent: React.FC<MemberComponentProps> = ({ profile = null, name, role, link, description, className = "" }) => {

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

  return (
    <>
      {
        modal ? <div className="modal w-[100%] h-[100%] m-auto flex" style={{ position: "fixed", top: "0", left: "0", right: "0", backgroundColor: "rgb(255,255,255,0.4)", zIndex: "1000", backdropFilter: "blur(4px)" }} onClick={() => { setModal(!modal) }}>
          <div className="modal-dialog w-[50%] min-h-[300px] m-auto items-center p-4 rounded-[5px]" style={{ zIndex: "1001" }}>
            <div className="modal-content rounded-[8px] h-content-full" style={{ backgroundColor: "rgb(255,255,255)" }}>
              <figure className="p-8 bg-slate-100 rounded-xl dark:bg-slate-800">
                <img className="w-24 h-24 mx-auto rounded-full md:w-48 md:h-48" src={img} alt="" />
                <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
                  <blockquote>
                    <p className="text-lg font-medium text-black indent-4">
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
      <button className={`grid justify-items-center gap-2 ${className}`} onClick={() => { setModal(!modal); }}>
        <div className={`grid place-content-center align-middle rounded-full w-[180px] h-[180px] m-auto bg-gradient-radial ${buttonClassName}`} style={{ zIndex: "999" }}>
          <div className="bg-white w-[160px] h-[160px] rounded-full" >
            <img src={img} alt="profile" className="w-full h-full rounded-full" />
          </div>
        </div>
        <div className="grid gap-1 justify-items-start">
          <p className="flex font-bold text-[24px]">{name}</p>
          <p className="flex text-[18px]">{role}</p>
          <a href={link} target="_blank" rel="noreferrer"><IconButton icon={linkedin} className="w-[24px] h-[24px]" /></a>
        </div>
      </button>
    </>
  )
}

export default MemberComponent