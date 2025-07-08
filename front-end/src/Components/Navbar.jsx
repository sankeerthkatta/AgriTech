import React from "react";

import "../index.css";

import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <button className="contracts-btn" onClick={() => navigate("/contractsb")}>Contracts</button>
    </nav>
  );
}

export default Navbar;
