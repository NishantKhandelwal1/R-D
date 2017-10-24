import React, { Component } from 'react';
import logo from './img/companylogo.png';
import './css/new-age.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';

import HowSection from './components/HowSection.js';
import { BounceLoader} from 'react-spinners';
import Togethercorousel from './components/Togethercorousel.js';
import LoveUs from './components/LoveUs.js';
import Team from './components/Team.js';

// import Clipboard from 'clipboard';
// import Copy from './images/copytoclipboard.svg';
// import 'primer-tooltips/index.scss';
// import { Tooltip, Overlay, Button } from 'react-bootstrap';
// import ReactTooltip from 'react-tooltip';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Total_Impact: 100000,
      loading: true
    }
  }

  componentWillMount() {
    let impact;
    fetch('http://dev.impactrun.com/api/causesv2/',{
      method: "get"
    })
      .then((response) => response.json())
      .then((responseJson) => {
       impact= Math.floor(responseJson.overall_impact)
        this.setState({
          Total_Impact: impact,
          loading: false
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    if(!this.state.loading){
      return (
        <div>
  
          <Nav />
  
          <Header Impact={this.state.Total_Impact} />
  
          <HowSection />
  
          <Togethercorousel />
  
          <LoveUs />
  
          <Team />
  
          <section className="contact" style={{ background: "rgba(0, 123, 255, 0.32)" }} id="contact">
            <div className="container">
              <h2>Made with&nbsp;
            <i className="fa fa-heart"></i>
                &nbsp;by your friends at Impact!</h2>
              <ul className="list-inline list-social">
              <li className="list-inline-item social-facebook" >
                  <a href="https://www.facebook.com/Impactrun/" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item social-twitter">
                  <a href="https://twitter.com/ImpactRun01" target="_blank" >
                    <i className="fa fa-twitter fa-align-center"></i>
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
                  <a href="/privacy.html" target="_blank">Privacy</a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript:void(0)">Terms</a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript:void(0)">FAQ</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      )
    }
    else{
      return(
       <div style={{position: "absolute",left: "50%",top: "50%",margin: "-30px 0 0 -30px",width: "100px",height: "100px"}}>
          <BounceLoader
          color={"rgb(54, 215, 183)"} 
          loading={this.state.loading} 
        />
       </div>
      )
    }
  }
}

export default App;
