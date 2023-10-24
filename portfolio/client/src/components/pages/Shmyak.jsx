import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context";

const Shmyak = () => {
  const { ShmyaksContract } = useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    const isRegistered = async () => {
      try {
        const playerExists = await ShmyaksContract.isPlayer();

        if (playerExists) {
          navigate("/game/home");
        } else {
          navigate("/game/register");
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (ShmyaksContract) isRegistered();
  });
};

export default Shmyak;
