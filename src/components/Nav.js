
import React from 'react';
import Logo from '../img/contact-logo.png';
import CompanyLogo from '../img/companylogo.png';

const Nav = () => {
  return (


    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{minHeight:"75px"}} id="mainNav">
      <div className="container collapse-button">
        <a className="navbar-brand js-scroll-trigger" href="#page-top" style={{display:"flex",height:"55px"}}>
          <img src={Logo} style={{width:"130px"}} alt="company-logo" />
        </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu&nbsp;
             <i className="fa fa-bars"></i>
        </button>
        <div className="clearfix"></div>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto" style={{ marginRight: "70px" }}>
            <li className="nav-item" style={{ display: "-webkit-box", marginRight: "20px" }}>
              <img src={CompanyLogo} alt="download" style={{ width: "50px" }} />
              <a style={{ color: "#000000" }} className="nav-link js-scroll-trigger" href="http://onelink.to/impact" style={{marginRight:"5px"}}>
               
                <span className="grad" style={{fontWeight:"bold"}}>Download App</span>
              </a>
              {/* <a className="nav-link js-scroll-trigger" href="https://goo.gl/WM27CA" target="_blank" style={{marginRight:"5px"}}>
                <i className="fa fa-android" aria-hidden="true" style={{ color: "black" }}></i>
              </a>
              <a className="nav-link js-scroll-trigger" target="_blank" href="https://goo.gl/qJPjzb">
                <i className="fa fa-apple" aria-hidden="true" style={{ color: "black" }}></i>
              </a> */}
            </li>

            <li className="nav-item" style={{ marginRight: "20px" }}>
              <a style={{ color: "#000000" }} className="nav-link js-scroll-trigger" href="#download">How?</a>
            </li>
            <li className="nav-item" style={{ marginRight: "20px" }}>
              <a style={{ color: "#000000" }} className="nav-link js-scroll-trigger" href="#team">Team</a>
            </li>
            <li className="nav-item" >
              <a style={{ color: "#000000" }} className="nav-link js-scroll-trigger" href="http://blog.impactapp.in/" rel='noopener noreferrer' target="_blank">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;