import linkedin from "../../assets/svg/linkedin.svg"
import { IconButton } from "../../components/ButtonComponent"
import { useState, useEffect } from "react";
// import { rootCertificates } from "tls";

interface MemberComponentProps {
    profile?: any,
    name: any,
    role: any,
    link?: any,
    className?: any,
}

const MemberComponent: React.FC<MemberComponentProps> = ({ profile = null, name, role, link, className = "" }) => {

    const img = require(`../../assets/team/${profile === null ? 'user.png' : profile}`);
    const onHoverColor = "from-[#75777b] to-[#FFFFFF]";
    const onCurrentColor = "from-[#FD4F00] to-[#FFCA91]";
    const onHoverDeg = "-30deg";
    const onCurrentDeg = "-40deg";
    const [modal, setModal] = useState(false);
    const [buttonClassName, setButtonClassName] = useState(onCurrentColor);
    const [lineDeg, setLineDeg] = useState(onCurrentDeg);
    const [lineDegClass, setLineDegClass] = useState("line_rotato_stop");
    
    const [videoHeight, setVideoHeight] = useState(100);
    const [videoWidth, setVideoWidth] = useState(100);
    const updateWindowDimensions = () => setVideoHeight(window.innerHeight / 20);
    const updateWindowWidthDimensions = () => setVideoWidth(window.innerWidth / 5);


    useEffect(() => {
        updateWindowDimensions();
        updateWindowWidthDimensions();
        window.addEventListener('resize', updateWindowDimensions);
        window.addEventListener('resize', updateWindowWidthDimensions);
    }, []);

    function mouseEnterHandle() {
        setButtonClassName(onHoverColor); 
        setLineDeg(onHoverDeg);
        setLineDegClass("line_rotato");
    }

    function mouseLeaveHandle(){
        setButtonClassName(onCurrentColor); 
        setLineDeg(onCurrentDeg);
        setLineDegClass("line_rotato_stop");
    }
    return (
        <>
            {
                modal ? <div className="modal w-[100%] h-[100%] m-auto" style={{ position: "fixed", top: "0", left: "0", right: "0", backgroundColor: "rgb(255,255,255,0.4)", zIndex: "1000", backdropFilter: "blur(4px)" }} onClick={() => { setModal(!modal) }}>
                    <div className="modal-dialog w-[50%] h-[35%] m-auto mt-[15%] p-4 rounded-[5px]" style={{ zIndex: "1001" }}>
                        <div className="modal-content rounded-[8px]" style={{ backgroundColor: "rgb(255,255,255)" }}>
                            <div className="modal-header">
                                <button type="button" className="btn-close" style={{ color: "black", float: "right" }} data-bs-dismiss="modal" aria-label="Close" onClick={() => setModal(!modal)}></button>
                            </div>
                            <div className="modal-body text-black grid grid-cols-2 p-[3%] w-[95%] h-[95%]">
                                <div className="w-[65%] h-[100%] grid grid-cols-1" >
                                    <img src={img} alt="profile" className="rounded-full w-[100%] h-[100%]" style={{ maxHeight: "100%;", width: "auto" }} />
                                </div>
                                <div className="gridn grid-cols-1 ml-[-20%]">
                                    <p className="font-bold text-[20px] mt-4 h-[36px]">Name : {name}</p>
                                    <p className="text-[16px] h-[30px]" >Role : {role}</p>
                                    <p className="text-[16px] h-[30px]" >Description : { }</p>
                                    {/* <div className="grid grid-cols-1">
                                        <p className="font-bold text-[22px] mt-8 h-[40px]">Name : </p>
                                        <p className="text-[18px] h-[35px]" >Role : </p>
                                        <p className="text-[18px] h-[35px]" >Description :</p>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <p className="font-bold text-[22px] mt-8 h-[40px]">{name}</p>
                                        <p className="text-[18px] h-[35px]" >{role}</p>
                                        <p className="text-[18px] h-[35px]" >{}</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <></>
            }
            <div className={`grid justify-items-center gap-2 jello ${className}`} onClick={() => { setModal(!modal); }} style={{cursor:"pointer"}}>
                <div className="grid place-content-center align-middle w-[255px] h-[255px] bg-gradient-radial" onMouseEnter={() => mouseEnterHandle()} onMouseLeave={() => mouseLeaveHandle()} style={{position:"relative"}}>
                    <div className={`grid place-content-center align-middle rounded- w-[255px] h-[4px] bg-gradient-radial ${buttonClassName} ${lineDegClass}`} style={{position:"absolute", marginTop: "123px", transform:`rotato(${lineDeg})`}}>
                    </div>
                    <div className={`grid place-content-center align-middle rounded-full w-[175px] h-[175px] m-auto bg-gradient-radial ${buttonClassName}`} style={{zIndex:"999"}}>
                        <div className="bg-white w-[160px] h-[160px] rounded-full" >
                            <img src={img} alt="profile" className="rounded-full w-full h-full" />
                        </div>
                    </div>
                </div>
                <div className="grid justify-items-start gap-1">
                    <p className="flex font-bold text-[24px]">{name}</p>
                    <p className="flex text-[18px]">{role}</p>
                    <a href={link} target="_blank" rel="noreferrer"><IconButton icon={linkedin} className="w-[24px] h-[24px]" /></a>
                </div>
            </div>
        </>
    )
}

export default MemberComponent