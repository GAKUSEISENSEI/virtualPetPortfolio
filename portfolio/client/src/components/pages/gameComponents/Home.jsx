import { useState, useEffect } from "react";
import Header from "../../Header";
import { ethers } from "ethers";
import { useGlobalContext } from "../../context";
import "./Home.css";

const Home = () => {
  const { ShmyaksContract } = useGlobalContext();
  const [health, setHealth] = useState();
  const [happiness, setHappiness] = useState();
  const [hunger, setHunger] = useState();
  const [img, setImg] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (ShmyaksContract) {
        getHP();
        getHngr();
        getHapns();
        getCurrentImg();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const getCurrentImg = async () => {
    try {
      const response = await ShmyaksContract.getCurrentPet();
      setImg(response);
    } catch (err) {
      console.log(err);
    }
  };
  const getHP = async () => {
    try {
      const response = await ShmyaksContract.getHealth();
      setHealth(parseInt(response._hex, 16));
    } catch (err) {
      console.log(err);
    }
  };
  const getHapns = async () => {
    try {
      const response = await ShmyaksContract.getHappiness();
      setHappiness(parseInt(response._hex, 16));
    } catch (err) {
      console.log(err);
    }
  };

  const getHngr = async () => {
    try {
      const response = await ShmyaksContract.getHunger();
      setHunger(parseInt(response._hex, 16));
    } catch (err) {
      console.log(err);
    }
  };

  const update = async () => {
    try {
      await ShmyaksContract.updateCycle();
    } catch (err) {
      console.log(err);
    }
  };
  const feedPet = async () => {
    try {
      await ShmyaksContract.feed({ value: ethers.utils.parseEther("0.007") });
    } catch (err) {
      console.log(err);
    }
  };
  const carePet = async () => {
    try {
      await ShmyaksContract.giveCare({
        value: ethers.utils.parseEther("0.007"),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const giveMoney = async () => {
    try {
      await ShmyaksContract.makeHappy({
        value: ethers.utils.parseEther("0.007"),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const revivePet = async () => {
    try {
      await ShmyaksContract.revive({
        value: ethers.utils.parseEther("0.007"),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <a href="/" className="a">
        <p className="game-title">SHMK</p>
      </a>
      <div className="pet-page">
        <div className="img-stats-block">
          <img src={img} alt="" className="img" />
          <div className="stats">
            <p className="stats-text">Health: {health}%</p>

            <p className="stats-text">Happiness: {happiness}%</p>

            <p className="stats-text">Hunger: {hunger}%</p>
          </div>
        </div>
      </div>
      <div className="btns">
        <button onClick={update} className="btn">
          UPDATE
        </button>
        <button onClick={feedPet} className="btn">
          FEED
        </button>
        <button onClick={carePet} className="btn">
          CARE
        </button>
        <button onClick={giveMoney} className="btn">
          MAKE HAPPY
        </button>
        {health == 0 ? (
          <button onClick={revivePet} className="btn">
            REVIVE
          </button>
        ) : (
          <a />
        )}
      </div>
    </div>
  );
};

export default Home;
