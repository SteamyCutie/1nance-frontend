import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import $ from 'jquery'
import Select from 'react-select';
import TitleComponent from "../../components/DynaComponent/TitleComponent"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ETH from "../../assets/png/ETH.png"
import BNB from "../../assets/png/BNB.png"


interface TokenSaleProps {
  handler: any
}

const TokenSale: React.FC<TokenSaleProps> = ({ handler }) => {

  const history = useHistory()
  const [pValue, setPValue] = useState(0)
  const handleNavigate = (idx: string) => {
    handler(idx)
    history.push('/')
  }
  const handlePlusBtn = () => {
     let value = pValue + 1;
     setPValue(value);
  }
  const handleMinusBtn = () => {
    if (pValue >= 1 ){
      let value = pValue -1 ;
      setPValue(value);
    }
  }
  const options = [
    { value: 'ETH', label: <span><img src={ETH} className ="w-[20%] h-5 inline-block mr-1"  />ETH</span> },
    { value: 'BNB', label: <span><img src={BNB} className ="w-[20%] h-5 inline-block mr-1"  />BNB</span> },
  ];

  const customStyles = {
    dropdownIndicator:()=>({
       width:20   
    })
 
  }
 

  return (
    <div className="m-auto">
      <Header handler={handleNavigate} />
      <div>
        <TitleComponent title="Purchase Token" anchor="" content="" />
        <div className="flex m-auto items-center space-x-3">
            <div className="grid md:flex gap-x-1  m-auto items-start">
                  <div className="md:order-last flex-1 m-auto min-w-[60%] justify-center grid"> 
                      <div className="w-[350px] grid justify-center items-start md:w-[500px] rounded bg-gradient-to-b from-[#FFAF10] to-[#F97919] h-[400px]">
                          <div className="flex justify-center mt-20">
                            <button onClick={handleMinusBtn} className=" text-white text-xl bg-blue-700 px-[19px] py-0 rounded-full hover:bg-indigo-900">-</button>
                            <div className="w-32 mx-2 md:w-32 mx-5">
                                <input type="text" id="simple-email"  value={pValue} onChange={(e) => setPValue(Number(e.target.value))} className=" flex-1 appearance-none border border-gray-300 w-full py-2 pl-14 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                            </div>
                            <button onClick={handlePlusBtn} className=" text-white text-lg bg-blue-700 px-[17px] py-0 rounded-full hover:bg-indigo-900">+</button>
                          </div>
                          <div className="flex justify-center mt-7 -mb-10">
                              <input type="text" id="simple-email" className=" flex-1 w-20 md:w-72 rounded  appearance-none border focus: border-sky-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                               <Select
                                  className=" w-28  rounded text-gray-700  border border-gray-300 bg-white  shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"  
                                  defaultValue={options[0]}
                                  options={options}
                                  styles = {customStyles}
                                />
                          </div>

                          <button className=" text-white text-lg bg-blue-700 px-6 py-1 rounded hover:bg-indigo-900">BUY</button>

                      </div>
                  </div>
                  <div className=" space-y-4 mt-16 xl:mt-0 ">
                    <div className="font-light text-[14px] md:text-[18px] leading-[24px] md:leading-[28.13px] max-w-xl px-8 xl:px-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra.</div>
                  </div>
            </div >
      </div>

      </div>
      <Footer />
    </div>
  )
}

export default TokenSale