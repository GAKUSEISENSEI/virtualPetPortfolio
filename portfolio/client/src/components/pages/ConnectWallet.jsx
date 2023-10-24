import { useEffect, useState } from "react";
import faucetContract from "../ethereum/FaucetABI";
import { ethers } from "ethers";

const [walletAddress, setWalletAddress] = useState("");
const [signer, setSigner] = useState();
const [FaucetContract, setFaucetContract] = useState();
const [withdrawError, setWithdrawError] = useState("");
const [withdrawSuccess, setWithdrawSuccess] = useState("");
const [transactionData, setTransactionData] = useState("");

useEffect(() => {
  setCurrentConnected();
  addWalletListener();
}, [walletAddress]);
const connectWallet = async () => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const accounts = await provider.send("eth_requestAccounts", []);

      setSigner(provider.getSigner());

      setWalletAddress(accounts[0]);
    } catch (err) {
      console.error(err.message);
    }
  } else {
    console.log("Metamask must be installed");
  }
};

const setCurrentConnected = async () => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const accounts = await provider.send("eth_accounts", []);

      if (accounts.length > 0) {
        setSigner(provider.getSigner());
        setFaucetContract(faucetContract(provider));
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } else {
        console.log("Connect to Metamask using connect button");
      }
    } catch (err) {
      console.error(err.message);
    }
  } else {
    console.log("Metamask must be installed");
  }
};

const addWalletListener = async () => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    window.ethereum.on("accountsChanged", (accounts) => {
      setWalletAddress(accounts[0]);
      console.log(accounts[0]);
    });
  } else {
    /* MetaMask is not installed */
    setWalletAddress("");
    console.log("Please install MetaMask");
  }
};

export default connectWallet;
