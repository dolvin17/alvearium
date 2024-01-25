import React from "react";

interface Props {
  dark?: boolean;
  footer?: boolean;
}

const Links = ({ dark, footer }: Props) => {
  return (
    <div className={`links ${footer ? "footer-links" : ""}`}>
      <div className="link" style={{ color: dark ? "#6851ff" : "#000" }}>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          Alvearium
        </a>
      </div>
    </div>
  );
};

export default Links;
