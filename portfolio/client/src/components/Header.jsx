import React from "react";
import "./Header.css";
import surprised from "./assets/headerImgs/surprised.png";
import wtf from "./assets/headerImgs/wtf.png";
import pleased from "./assets/headerImgs/pleased.png";
import search from "./assets/headerImgs/search.png";
import exchange from "./assets/headerImgs/exchange.png";
import { ethers } from "ethers";
import { useState } from "react";

const Header = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const accounts = await provider.send("eth_requestAccounts", []);

        setWalletAddress(accounts[0]);
        console.log(walletAddress);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Metamask must be installed");
    }
  };

  return (
    <div>
      <div className="head">SHMK</div>
      <div className="header">
        <div className="logos">
          <a href="/">
            <img src={surprised} alt="logo" />
          </a>
          <a href="/">
            <img src={pleased} alt="logo" />
          </a>
          <a href="/">
            <img src={wtf} alt="logo" />
          </a>
        </div>

        {walletAddress.length && walletAddress > 0 ? (
          <a href="/game" className="a">
            <button className="contactButton">PLAY</button>
          </a>
        ) : (
          <button className="contactButton" onClick={connectWallet}>
            Connect Wallet to play
          </button>
        )}

        <a href="/contact" className="a">
          <button className="contactButton">CONTACT ME</button>
        </a>
        <a href="/faucet" className="a">
          <button className="contactButton">GET SHMK Faucet</button>
        </a>
        <button className="contactButton" onClick={connectWallet}>
          {walletAddress.length && walletAddress > 0
            ? `connected: ${walletAddress.substring(
                0,
                6
              )}...${walletAddress.substring(38)}`
            : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
};

export default Header;
