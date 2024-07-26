import {ethers} from "ethers"
import Web3Model from "web3modal"

import {GPT_MEMBERSHIP_ADDRESS,GPT_MEMBERSHIP_ABI} from "../Context/constants"

export const checkIfWalletConnected = async()=>{
    try{
        if(!window.ethereum) return console.log("Invalid Meta Mask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        });

        const firstAccount = accounts[0];
        return firstAccount;

    }catch(error){
        console.log(error);
    }
};

export const connectWallet = async()=>{
    try{
        if(!window.ethereum) return console.log("Invalid Meta Mask");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        const firstAccount = accounts[0];
        return firstAccount;
    }catch(error){
        console.log(error);
    }
}

// Fatch Contarct

const fetchContract = (signerOrProvider)=>{
    new ethers.Contract(
        GPT_MEMBERSHIP_ADDRESS,
        GPT_MEMBERSHIP_ABI,
        signerOrProvider
    );
}

// connecting Contract

export const connectingWithContract = async()=>{
    try{
        const web3modal = new Web3Model();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    }catch(error){
        console.log(error);
    }
}
