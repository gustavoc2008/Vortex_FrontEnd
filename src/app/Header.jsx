
import React from 'react';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="neocore-header">
      <button
        className="header-menu"
        type="button"
        aria-label="Abrir menu"
      >
        <img src="/menu.svg" alt="" />
      </button>

      <a className="header-brand" href="/" aria-label="NEOCORE">
        <img src="/logo-n.png" alt="" />
        <span>NEOCORE</span>
      </a>

      <div className="header-user">
        <span>Olá, Carlos</span>
        <span className="header-avatar">CL</span>
      </div>
    </header>
  );
}
