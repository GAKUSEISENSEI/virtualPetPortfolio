import { useState } from "react";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Header,
  ImageWrapper,
  HomeHeroContainer,
  ButtonWrapper,
  ButtonInverted,
} from "./Home.styles";

import { useGlobalContext } from "../../context";

const Register = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const { ShmyaksContract } = useGlobalContext();
  const [petName, setPetName] = useState("");
  const navigate = useNavigate();

  const createPlayer = async () => {
    try {
      setShowRegisterForm(true);
      await ShmyaksContract.createNewPlayer(petName);
      navigate("/game/home");
    } catch (err) {
      console.log(err.message);
      console.log(petName);
    }
  };

  return (
    <Container>
      <HomeHeroContainer>
        <Header>
          <h1>Shmyaks</h1>
          <p>Welcome to your personal pet</p>
        </Header>

        <RegisterForm value={petName} valueChange={setPetName} />

        <ButtonInverted onClick={createPlayer}>Register</ButtonInverted>
      </HomeHeroContainer>
    </Container>
  );
};

export default Register;
