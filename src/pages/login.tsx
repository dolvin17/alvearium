import React, { useState } from "react";
import AppHeader from "../components/app-header";
import Links from "../components/links";
import Network from "../components/network";
import ConnectButton from "../components/ui/connect-button";
import Spacer from "../components/ui/spacer";
import { magic } from "../libs/magic";

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

const Login = ({ setAccount }: Props) => {
  const [disabled, setDisabled] = useState(false);

  const connect = async () => {
    try {
      setDisabled(true);
      const accounts = await magic.wallet.connectWithUI();
      setDisabled(false);
      console.log("Logged in user:", accounts[0]);
      localStorage.setItem("user", accounts[0]);
      setAccount(accounts[0]);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundColor: "#ffffff"
      }}
    >
      <AppHeader />
      <Spacer size={32} />
      <Network />
      <Spacer size={20} />
      <ConnectButton onClick={connect} disabled={disabled} />
      <Links footer />
    </div>
  );
};

export default Login;
