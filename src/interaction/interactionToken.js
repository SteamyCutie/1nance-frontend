import Web3 from "web3";
import NBToken from '../abi/TokenNB.json'
import NBExchange from '../abi/ICONB.json'

import { infura_endpoint, product_key, ether } from "../configs/constant";

const provider = new Web3.providers.HttpProvider(infura_endpoint)
const web3 = new Web3(provider);
 
export const loadToken = async (web3, networkId) => {
    try {
        const token = new web3.eth.Contract(NBToken.abi, NBToken.networks[networkId].address);
        return token;
    } catch (error) {
        return null;
    }
}

export const loadExchange = async (web3, networkId) => {
    try {
        const exchange = new web3.eth.Contract(NBExchange.abi, NBExchange.networks[networkId].address);
        return exchange;
    } catch (error) {
        return null;
    }
}

export async function load_balance(address){
    const networkId = await web3.eth.net.getId();
    if ( address = null ) {
        address = NBToken.networks[networkId].address;
    }
    const token = new web3.eth.Contract(NBToken.abi, NBToken.networks[networkId].address);
    let token_balance = await token.methods.balanceOf(address).call();
    console.log(token_balance, "token_balance");
    return ether(token_balance);
}