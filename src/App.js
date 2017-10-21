import React, { Component } from 'react';
import logo from './img/companylogo.png';
import './css/new-age.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Callout from './img/callout-image.jpg';
import HowSection from './components/HowSection.js';
import CauseImage from './img/causeimage.jpg';
import Togethercorousel from './components/Togethercorousel.js';
import LoveUs from './components/LoveUs.js';
import Team from './components/Team.js';

// import Clipboard from 'clipboard';
// import Copy from './images/copytoclipboard.svg';
// import 'primer-tooltips/index.scss';
// import { Tooltip, Overlay, Button } from 'react-bootstrap';
// import ReactTooltip from 'react-tooltip';

class App extends React.Component {

  render() {

    return (
      <div>

        <Nav />

        <Header />

        <HowSection />

        <Togethercorousel />

        <LoveUs />

        <Team/>

        <section className="contact" style={{background:"rgba(0, 123, 255, 0.32)"}} id="contact">
          <div className="container">
            <h2>We&nbsp;
          <i className="fa fa-heart"></i>
               &nbsp;our users!</h2>
            <ul className="list-inline list-social">
              <li className="list-inline-item social-twitter">
                <a href="https://twitter.com/ImpactRun01" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item social-facebook" >
                <a href="https://www.facebook.com/Impactrun/" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item social-google-plus">
                <a href="https://www.instagram.com/impact_run" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <footer>
          <div className="container">
            <p>&copy; 2017 Impact- Get Fit Do Good. All Rights Reserved.</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms</a>
              </li>
              <li className="list-inline-item">
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
