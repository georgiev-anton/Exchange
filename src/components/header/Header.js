import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as SettingsLogo } from "./assets/settings.svg";
import { ReactComponent as LanguageLogo } from "./assets/earth.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Logo />
        <Link to="/">Fiat</Link>
        <Link to="/">Exchange</Link>
        <Link to="/">Contract</Link>
        <Link to="/">Service</Link>
        <Link to="/">Forum</Link>
      </div>
      <div>
        <Link className="signInButton" to="/">
          Sign In
        </Link>
        <Link to="/">Create an account</Link>
        <div className="settingsLogo">
          <SettingsLogo />
        </div>

        <div className="languageLogo">
          <LanguageLogo />
          <p>En</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
