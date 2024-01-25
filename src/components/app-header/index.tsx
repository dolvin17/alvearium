import React from "react";
import MagicLogo from "../../images/logo.png";

const AppHeader = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        width="400"
        src={MagicLogo}
        alt="magic-logo"
        className="magic-logo"
      />
    </div>
  );
};

export default AppHeader;
