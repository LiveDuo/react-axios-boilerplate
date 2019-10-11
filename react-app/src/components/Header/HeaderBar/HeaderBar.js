import React from 'react';

import './HeaderBar.scss'

import logoIcon from '../../../assets/logos/logo_384.png'

const HeaderBar = () => {
  return (
    <header className="header-bar">
      <img data-testid="img-logo-icon" className="logo-icon" src={logoIcon} alt="logo" />
    </header>
  )
}

export default HeaderBar