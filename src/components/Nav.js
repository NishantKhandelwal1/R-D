
import React from 'react';
import Logo from '../img/logo1.jpg';
import CompanyLogo from '../img/companylogo.png';

const Nav = () => {
  return (


    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <img src={Logo} alt="company-logo" />
        </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu&nbsp;
             <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto" style={{marginRight: "70px"}}>
            <li className="nav-item" style={{display:"-webkit-box",marginRight:"20px"}}>
              <img src={CompanyLogo} alt="download" style={{width:"50px"}} />
              <a style={{ color: "#000000" }} className="nav-link js-scroll-trigger" target="_blank" href="http://onelink.to/impactrun">
                <span style={{ color: "#06c9fd",fontFamily:"latobold" }}>Downl</span><span style={{ color: "#39f764",fontFamily:"latobold" }}>oad App</span>
              </a>
            </li>
            <li className="nav-item" style={{marginRight:"20px"}}>
              <a style={{ color: "#000000" }} className="nav-link js-scroll-trigger" href="#download">Who are we?</a>
            </li>
            <li className="nav-item" style={{marginRight:"20px"}}>
              <a style={{ color: "#000000" }} className="nav-link js-scroll-trigger" href="#team">Team</a>
            </li>
            <li className="nav-item" >
              <a style={{ color: "#000000" }} className="nav-link js-scroll-trigger" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;