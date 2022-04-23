import { useEffect } from "react";
import Web3 from "web3";
import METAMASK_ICON from "../../assets/svg/metamask.svg"
import COINBASE_ICON from "../../assets/svg/coinbase.svg"

interface Props {
  isOpen: any,
  connectHandler: any,
  closeHandler: any,
}

const WalletModal: React.FC<Props> = ({ isOpen, connectHandler, closeHandler }) => {

  useEffect(() => {
    if (isOpen)
      document.body.style.overflow = 'hidden'
    else
      document.body.style.overflow = 'unset'
  }, [isOpen])

  const ethEnabled = () => {
    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      // window.ethereum.enable();
      return true;
    }
    return false;
  }

  return <>
    {isOpen &&
      <div className="flex w-[100%] h-[100%] m-auto bg-white/50 z-[1000] backdrop-blur-sm" onClick={closeHandler} style={{ position: "fixed", top: "0", left: "0", right: "0" }}>
        <div className="grid min-w-[280px] md:min-w-[420px] h-[240px] m-auto px-4 bg-white rounded-lg items-center justify-center">
          <div className="text-[28px] text-black text-center">Connect Wallet</div>
          <div className="grid gap-4 md:flex">
            {ethEnabled() ?
              <div className="items-center justify-center text-[24px] text-black/80 gap-2 md:gap-16 border-2 p-4 px-8 cursor-pointer grid md:flex" onClick={connectHandler}><div className="flex items-center gap-4 text-center"><img src={METAMASK_ICON} alt="metamask" width={48} /> | <img src={COINBASE_ICON} alt="coinbase" width={96} /></div><div className="w-full text-center">Injected</div></div> :
              <a href="https://metamask.io" className="" target="_blank" rel="noreferrer"><div className="flex items-center text-[24px] text-black/80 gap-4 border-2 p-4 px-8 cursor-pointer"><img src={METAMASK_ICON} alt="metamask" width={48} /><img src={COINBASE_ICON} alt="coinbase" width={96} />Install Metamask</div></a>
            }
          </div>
        </div>
      </div>
    }
  </>
}

export default WalletModal