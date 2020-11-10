import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'

import JsLogoPrimary from '../../assets/js-logo-primary.png';
import JsLogoSecondary from '../../assets/js-logo-secondary.png';
import GitHubLogoPrimary from '../../assets/github-logo-primary.png';
import GitHubLogoSecondary from '../../assets/github-logo-secondary.png';
import './styles.css';

export default function Header(props) {
  const { title = 'Bem Vindo !' } = props;
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="header-container">
      <div className="logo">
        <div className="logo-content">
          <Link to="/" >
            <img className="content-logo" src={JsLogoPrimary} alt="Logo" />
          </Link>
          <h1>Caça Script</h1>
        </div>
      </div>
      <div className="header-hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className="header-menu">
          <Link to="/" >
            <img className="menu-logo" src={JsLogoSecondary} alt="Logo" />
          </Link>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/pablohariel">
            <img className="menu-github" src={GitHubLogoSecondary} alt="Github Logo" />
          </a>
        </div>
      )}
      <div className="title">
        <h1>{title}</h1>
        <div className="border" />
      </div>
      <div className="github">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/pablohariel">
          <img src={GitHubLogoPrimary} alt="Github Logo" />
        </a>
      </div>
    </div>
  )
}