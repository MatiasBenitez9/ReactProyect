import React from 'react';
import './Navbar.css'; 

const Navrbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="container">
          <a href="/" className="navbar-brand">Mi Sitio</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="/acerca" className="nav-link">Acerca de</a>
            </li>
            <li className="nav-item">
              <a href="/contacto" className="nav-link">Contacto</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="categoriasDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorías
              </a>
              <div className="dropdown-menu" aria-labelledby="categoriasDropdown">
                <a className="dropdown-item" href="/ropa-hombre">Ropa de Hombre</a>
                <a className="dropdown-item" href="/ropa-mujer">Ropa de Mujer</a>
                <a className="dropdown-item" href="/ropa-ninos">Ropa de Niños</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navrbar;