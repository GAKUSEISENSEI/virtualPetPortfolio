import { useState } from "react";
import Header from "../Header";
import { useGlobalContext } from "../context";
import "./Faucet.css";
const Faucet = () => {
  const { walletAddress, FaucetContract } = useGlobalContext();

  const [withdrawError, setWithdrawError] = useState("");
  const [withdrawSuccess, setWithdrawSuccess] = useState("");
  const [transactionData, setTransactionData] = useState("");

  const getToken = async () => {
    setWithdrawError("");
    setWithdrawSuccess("");
    console.log(FaucetContract);
    try {
      const response = await FaucetContract.requestTokens();

      setWithdrawSuccess("Operation succeeded!");
      setTransactionData(response.hash);
    } catch (err) {
      setWithdrawError(err.message);
    }
  };
  return (
    <div>
      <Header />
      <div className="faucet">
        <div className="title-faucet">
          <h2 className="mrg">
            In the first place you need to import SHMK token to MetaMask. SHMK
            Address: 0x9ef1A7404F7F57C0a40619ba3F546D193b7FD5D0
          </h2>
          <h2 className="center">Make sure to use Goerli test network. </h2>
        </div>
        <div>
          {withdrawError && (
            <div className="withdraw-error">{withdrawError}</div>
          )}
          {withdrawSuccess && (
            <div className="withdraw-success">{withdrawSuccess}</div>
          )}{" "}
        </div>
        <input
          type="text"
          placeholder=" Your Address 0x..."
          defaultValue={walletAddress}
          className="faucet-input"
        />
        <p onClick={getToken} className="btn-fct">
          GET SHMK
        </p>
        <div>
          <p>
            {transactionData ? `Transaction hash: ${transactionData}` : "--"}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faucet;
