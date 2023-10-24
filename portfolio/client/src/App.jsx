import Main from "./components/pages/Main";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";

import Faucet from "./components/pages/Faucet";
import Shmyak from "./components/pages/Shmyak";
import Register from "./components/pages/gameComponents/Register";
import { GlobalContextProvider } from "./components/context";
import Home from "./components/pages/gameComponents/Home";
const App = () => {
  return (
    <div className="app">
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faucet" element={<Faucet />} />
          <Route path="/game" element={<Shmyak />} />
          <Route path="/game/register" element={<Register />} />
          <Route path="/game/home" element={<Home />} />
        </Routes>
      </GlobalContextProvider>
    </div>
  );
};

export default App;
