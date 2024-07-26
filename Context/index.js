import React, { createContext, useContext, useEffect, useState } from "react";

import { ethers } from "hardhat";

// INTERNAL 

import {checkIfWalletConnected,connectWallet,fetchContract,connectingWithContract} from "../Utils/apiFeature"

const StateContext =  createContext();

export const StateContextProvider = ({children}) =>{
    const DAPP_NAME = "GPT_MEMBERSHIP";

    const[address,setAddress] = useState("");
    const[contractMembership,setContractMem] = useState([]);
    const[free,setFree]  = useState();
    const[useMember,setMember] = useState({});

    const fetchData = async()=>{
        try{
            const freeTrail = localStorage.getItem("freeTrial");
            const FREE_TRIAL = JSON.parse(freeTrail);
            setFree(freeTrail);


            const contract = await connectingWithContract();
            const connectAccount = await connectWallet();
            setAddress(connectAccount);

            const oneMonth = await contract.getMemberships(1);
            const sixMont = await contract.getMemberships(2);
            const oneYear = await contract.getMemberships(3);
            
            // GET MEMBERShip

          
        }catch(error){
            console.log(error);
            alert("An error occurred while connecting to the blockchain. Please try again.");
        }

        // LISTING MEMBERSHIP

        const listMembership = async()=>{
            const amount = 1;
            const MEMBERSHIP_NAME = "One Month";
            const MEMBERSHIP_COST = ethers.utils.parseUnits(
                amount.toString(),
                "ethers"
            );

            const MEMBERSHIP_DATE = "July 25 2024";
            const list = await contract.list(
                MEMBERSHIP_NAME,
                MEMBERSHIP_COST,
                MEMBERSHIP_DATE
            );

            await list.wait();

        }

        useEffect(()=>{
            fetchData()
        },[])
    }

    return (
        <StateContext.Provider value={{DAPP_NAME,listMembership}}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
