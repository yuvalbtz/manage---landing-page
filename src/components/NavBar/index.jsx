import React, { useCallback, useState } from "react";
import Logo from "../../images/logo.svg";
import hamburgerIcon from "../../images/icon-hamburger.svg";
import closeIcon from "../../images/icon-close.svg";
import './style.css'


function Index() {
  const [hidden, setHidden] = useState(true)

  const toggle = useCallback(() => {
    setHidden(prev => !prev)
  },[hidden])
  
  
  
  return (
    <header className="primary-header">
      {!hidden && (<div onClick={toggle} className="mobile-nav-overlay"/>)}
      <div className="container">
        <div className="nav-wrapper">
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
        <button className="mobile-nav-toggle" onClick={toggle} aria-controls="primary-heading" aria-expanded={false}>
        {hidden ? (<img className="icon-hamburger" src={hamburgerIcon} alt="hamburger" aria-hidden={false} />
        ) : (<img className="icon-close" src={closeIcon} alt="close" aria-hidden={true} />)}
        </button>
        <nav className={`primary-navigation ${hidden ? '' : 'opened'}`}  id="primary-heading" >
          <ul role="list" className="nav-list" >
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Comunity</a>
            </li>
          </ul>
        </nav>
        <button className="button display-sm-button display-md-button" >Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Index;
