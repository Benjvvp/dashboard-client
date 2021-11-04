import React from "react";
import { Link } from "react-router-dom";
export function NavBar(user) {
  const login = () =>
    (window.location.href = "http://localhost:3001/auth/discord/redirect");
  const logout = () =>
    (window.location.href = "http://localhost:3001/auth/logout");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/img/hatsume.png"
            alt=""
            width="50"
            height="50"
            className="d-inline-block align-text-top rounded-circle"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <p
                  className="nav-link active navanimation"
                  aria-current="page"
                  href="/"
                >
                  Home
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <p className="nav-link navanimation">
                  Features
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard">
                <p className="nav-link navanimation">
                  Dashboard
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <p className="nav-link navanimation">Suscribtion</p>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/documentation">
                <p className="nav-link navanimation">
                  Documentation <i className="bi bi-caret-down-fill"></i>
                </p>
              </Link>
            </li>
            <li className="nav-item ms-4 me-2">
              <Link to="/about">
                <p className="nav-link navanimation">About</p>
              </Link>
            </li>
            <li className="nav-item">
              {!user.user ? (
                <button className="loggin-button nav-link" onClick={login}>
                  Login
                </button>
              ) : (
                <button className="logout-button nav-link" onClick={logout}>
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
