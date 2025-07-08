import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="nav-content">
        <div className="logo-container">
            <h1 className="logo-text">Agri Tech</h1>
        </div>
        <div className="nav-links">
          <Link to="/farmer">Home</Link>
          <Link to="/contract-farming">Contract farming</Link>
          {/* <Link to="/c">Crop recommendation</Link> */}
          <Link to="/profile">Profile</Link>
          {/* <Link to="/">Logout</Link> */}
          <button onClick={handleLogout} className="logout">Logout</button>

        </div>
        </div>
    </div> 
  )
}
const handleLogout = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/v1/users/logout", {
      method: "POST",
      credentials: "include", 
    });

    if (!res.ok) {
      throw new Error("Logout failed");
    }

    window.location.href = "/"; 
  } catch (err) {
    console.error(err.message);
  }
};


export default Navbar
