import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import TitleComponent from "../../components/DynaComponent/TitleComponent"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { Form } from '@themesberg/react-bootstrap';

interface TokenSaleProps {
    handler: any
}

const TokenSale: React.FC<TokenSaleProps> = ({ handler }) => {

    const history = useHistory()

    const handleNavigate = (idx: string) => {
        handler(idx)
        history.push('/')
    }

    const [pValue, setPValue] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    // @souphamy; cryptocurrent type text
    const [cryptoType, setCryptType] = useState("ETH");
    // @souphamy; cryptocurrent icon url 
    const [cryptoIconUrl, setCryptoIconUrl] = useState("url(http://cryptocompare.com//media/37746238/eth.png)");

    const buyToken = async () => {

    }

    async function changeAmount(diff: any) {
        if (diff === -1) {
            if (pValue > 0) {
                setPValue(eval((pValue - 0.1).toFixed(2)));
            }
            else {
                setPValue(0);
            }
        } else {
            if (pValue >= 0) {
                setPValue(eval((pValue + 0.1).toFixed(2)));
            }
            else {
                setPValue(0);
            }
        }
    }
    // @souphamy; CryptoCurrency dropDown onChange function
    function handleCryptoTypeChange(e: any) {
        setCryptType(e.target.value);
        switch (e.target.value) {
            case "ETH":
                setCryptoIconUrl("url(http://cryptocompare.com//media/37746238/eth.png)");
                break;
            case "BTC":
                setCryptoIconUrl("url(http://cryptocompare.com//media/37746251/btc.png)");
                break;
            case "BNB":
                setCryptoIconUrl("url(http://cryptocompare.com//media/38553685/bnbch.png)");
                break;
            case "XRP":
                setCryptoIconUrl("url(http://cryptocompare.com//media/37746238/eth.png)");
                break;
            default:
                break;
        }
    }

    // useEffect(async () => {}, []);

    return (
        <div className="m-auto">
            <Header handler={handleNavigate} />
            <div>
                <TitleComponent title="Purchase Token" anchor="" content="" />
                <div className="grid lg:flex items-center gap-4 xl:gap-16 mt-6 xl:mt-20 mx-12">
                    <div className="grid text-[24px] font-bold tracking-[2px] grid w-auto lg:w-1/2 h-full justify-items-end">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae mauris lobortis imperdiet convallis mauris. Pulvinar facilisis quis nisl, pellentesque viverra erat amet. Elementum in lacus tempor lacus, neque. Tortor ornare velit vulputate pulvinar feugiat iaculis neque egestas tristique. Eros donec diam sem facilisis suspendisse in et ut gravida. Dui sed risus eu, tempor, sodales tellus id id vel. Nunc arcu malesuada turpis diam non integer cras pellentesque.
                    </div>
                    <div className="grid grid-cols-1 justify-items-center items-center bg-gradient-to-b from-[#FFAF10] to-[#F97919] h-[494px] flex-row w-full lg:w-1/2 space-y-6 xl:space-y-12 rounded-[10px]">
                        <div className="grid justify-items-end rounded-[16px] md:px-10 py-6 lg:px-8 lg:p-10 lg:pt-16 w-full h-full bg-gradient-to-b from-[#FFAF10] to-[#F97919]" style={{ paddingTop: "95px" }}>
                            <div className="grid w-full grid-cols-3 place-items-center justify-items-center h-[50px]">
                                <div className="mr-[-40px]">
                                    <button className="token_sale_text grid rounded-[50px] w-[40px] h-[40px] bg-gradient-to-b from-[#03185B] via-[#133295] to-[#03185B] text-white font-[500] px-0" onClick={(e) => { changeAmount(-0.1) }}>-</button>
                                </div>
                                <input type="Number" className="grid grid-cols-1 text-black h-[56px] font-[500] text-[24px] p-2" style={{ border: "1.5px solid #133295", borderRadius: "3px" }} value={pValue}></input>
                                <div className="ml-[-40px]">
                                    <button className="token_sale_text grid rounded-[50px] w-[40px] h-[40px] bg-gradient-to-b from-[#03185B] via-[#133295] to-[#03185B] text-white font-[500] px-0" onClick={(e) => { pValue >= 0 ? setPValue(eval((pValue + 0.1).toFixed(2))) : setPValue(0) }}>+</button>
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-[12px] p-1 px-1.5 lg:p-1.5 lg:px-2 grid grid-cols-2 text-black h-[70px] mt-24" style={{ display: "flex" }}>
                                <div style={{ width: "70%", borderRight: "1px solid #3192DD" }}>
                                    <input className="grid grid-cols-1 text-black h-full w-full token_sale_text" value={totalValue}></input>
                                </div>
                                <div style={{ width: "30%" }}>
                                    <Form className="grid grid-cols-1 h-full w-100px">
                                        <Form.Group className="w-full h-full">
                                            <select className="w-full h-full token_sale_text" value={cryptoType} style={{
                                                paddingLeft: "64px", backgroundImage: cryptoIconUrl, backgroundRepeat: "no-repeat, repeat", backgroundSize: "30% auto", backgroundPositionY: "center"
                                            }} onChange={(e) => handleCryptoTypeChange(e)}>
                                                <option value="ETH">
                                                    ETH
                                                </option>
                                                <option value="BTC">BTC</option>
                                                <option value="BNB">BNB</option>
                                            </select>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                            <div className="grid justify-items-center w-full h-[0px] pb-0 mb-6" >
                                <button className="text-[24px] w-full bg-gradient-to-b from-[#03185B] via-[#133295] to-[#03185B] text-white font-[500] h-[60px] rounded-[12px]" onClick={(e) => { buyToken() }}>BUY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default TokenSale