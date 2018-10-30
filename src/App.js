import React from 'react';
// import logo from './img/companylogo.png';
import './css/new-age.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';

import HowSection from './components/HowSection.js';
import { BounceLoader} from 'react-spinners';
import Togethercorousel from './components/Togethercorousel.js';
import LoveUs from './components/LoveUs.js';
import Team from './components/Team.js';
import Sponsor from './components/sponsor.js';
import Contact from './components/Contact.js';

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
      loading: true,
      index: 0,
      direction: null
    }
    this.handleSelect= this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e){
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
}

  // componentDidMount() {
   
    
  // }
  componentDidMount(){

    fetch('http://api.impactrun.com/app/v1/totalImpactStats',{
      method: "get"
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("Response",responseJson)
       let impact= responseJson.response;
        this.setState({
          Total_Impact: impact.total_amount,
          loading: false
        })
      })
      .catch((error) => {
        console.error(error);
      });

    function scrollFunction() {
         document.getElementById("arrow-span").style.visibility = "hidden";   //To hide the element.
    }
    
    window.onscroll = scrollFunction;
    
  }

  render() {

    if(!this.state.loading){
      return (
        <div>
  
          <Nav />
  
          <Header Impact={this.state.Total_Impact} />
  
          <HowSection />
  
          <Sponsor/>
          <Togethercorousel />
          <LoveUs index={this.state.index} direction={this.state.direction} handleSelect={this.handleSelect}/>
          {/* <LoveUs /> */}
  
          <Team />
  
         <Contact/>
  
          <footer>
            <div className="container">
              <p >© 2016 Green Freedom Pvt Ltd. All rights reserved.</p>
              {/* <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="/privacy.html" target="_blank">Privacy</a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript:void(0)">Terms</a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript:void(0)">FAQ</a>
                </li>
              </ul> */}
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
