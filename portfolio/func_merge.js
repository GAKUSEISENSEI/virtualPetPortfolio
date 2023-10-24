import { ethers } from "ethers";

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

const approve = async () => {
  try {
    const response = await token.approve(spender, amount);
  } catch (err) {
    console.log(response);
  }
};

const swap = async () => {
  try {
    const response = await token.approve();
  } catch (err) {
    console.log(response);
  }
};

const _transfer = async () => {
  try {
    const response = await token.transfer(recipient, amount);
  } catch (err) {
    console.log(response);
  }
};

const _transferFrom = async () => {
  try {
    const response = await token.transferFrom(sender, recipient, amount);
  } catch (err) {
    console.log(response);
  }
};

const _redeem = async () => {
  try {
    const response = await token.redeem(_amount);
  } catch (err) {
    console.log(response);
  }
};

const _burn = async () => {
  try {
    const response = await bridge.burn(to, amount, _nonce, signature);
  } catch (err) {
    console.log(response);
  }
};

const _mint = async () => {
  try {
    const response = await bridge.mint(from, to, amount, _nonce, signature);
  } catch (err) {
    console.log(response);
  }
};

const _getBalance = async () => {
  try {
    const response = await exch.getBalance(ticker);
  } catch (err) {
    console.log(response);
  }
};

const _getTokens = async () => {
  try {
    const response = await exch.getTokens();
  } catch (err) {
    console.log(response);
  }
};

const _swapToken = async () => {
  try {
    const response = await exch.swapToken(
      fromTicker,
      fromAmount,
      toTicker,
      exchangeRate
    );
  } catch (err) {
    console.log(response);
  }
};

const _swapTokenForEth = async () => {
  try {
    const response = await exch.swapTokenForEth(toTicker, exchangeRate);
  } catch (err) {
    console.log(response);
  }
};

const _swapEthForToken = async () => {
  try {
    const response = await exch.swapEthForToken(
      fromTicker,
      amount,
      exchangeRate
    );
  } catch (err) {
    console.log(response);
  }
};
