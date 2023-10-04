import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">YessAnime</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Mangas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cosplays</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Posters</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Funkos</a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;