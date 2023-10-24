import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import faucetContract from "./ethereum/FaucetABI";
import shmyaksContract from "./ethereum/ShmyaksABI";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [FaucetContract, setFaucetContract] = useState();
  const [ShmyaksContract, setShmyaksContract] = useState();

  useEffect(() => {
    setSmartContractAndProvider();
    updateCurrentWalletAddress();
  }, []);

  const updateCurrentWalletAddress = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_accounts", []);
    setWalletAddress(accounts[0]);
  };

  const setSmartContractAndProvider = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    setFaucetContract(faucetContract(signer));
    setShmyaksContract(shmyaksContract(signer));
  };

  return (
    <GlobalContext.Provider
      value={{
        walletAddress,
        FaucetContract,
        ShmyaksContract,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
