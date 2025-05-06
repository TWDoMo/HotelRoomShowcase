import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#top">🏨 飯店介紹</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#rooms">房型介紹</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#booking">線上訂房</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
