import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="Assets/img/logo.jfif" alt="" id="logo" />
          </a>
          <a className="navbar-brand" href="#">
            ShoeMart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavList"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavList">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#my-carousel3">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#men">
                      Men
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#women">
                      Women
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#kids">
                      Kids
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter By
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink1"
                >
                  <li>
                    <a className="dropdown-item" href="popularity.html">
                      <Link to="/Popularity">Popularity</Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="high to low.html">
                      Price--High to Low
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="low to high.html">
                      Price--Low to High
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-dark btn-md"
              id="loginbtn"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Login/SignUp
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
