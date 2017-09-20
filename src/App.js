import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { countryOptions } from './common';
// countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...  ]

// const DropdownExampleSearchSelection = () => (
//   console.log("countryOptions",countryOptions),
//   <Dropdown 
//   placeholder='Select Country'
//   fluid search selection
//   options={countryOptions} />
// )

class DropdownExampleSearchSelection extends React.Component{

constructor(props){
  super(props);
  this.state = {
    loading:false,
  }

}
  componentDidMount() {
        fetch('http://dev.impactrun.com/api/team/?impactleague=9', {
          method: 'GET',
        })
          .then(response => (response.json()))
          .then((response) => {
            this.setState({
              teamObject: response,
              loading:true
            })
            console.log("Teams", this.state.teamObject);
          }).catch((err) => {
            //console.log("err", err);
          })
      }
  render(){
    if(this.state.loading){
      var option = JSON.stringify(this.state.teamObject);
      console.log(option);
      return(
        <Dropdown 
        placeholder='Select Country'
        fluid search selection
        options={option} />
      );
    }
    else{
      return(
        <h1>Loading</h1>
      )
    }

  }
}
export default DropdownExampleSearchSelection



















// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Clipboard from 'clipboard';
// import Copy from './images/copytoclipboard.svg';
// import 'primer-tooltips/index.scss';
// import { Tooltip, Overlay, Button } from 'react-bootstrap';

// var clipboard = new Clipboard('.btn', {
//   text: function (trigger) {
//     return trigger.getAttribute('aria-label');
//   }
// });
// clipboard.on('success', function (e) {
//   console.log(e);
// });
// clipboard.on('error', function (e) {
//   console.log(e);
// });
// const tooltip = (
//   <Tooltip id="tooltip">Copy the code</Tooltip>
// );
// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.handleClick = e => {
//       this.setState({ target: e.target, show: !this.state.show });
//     };

//     this.state = {
//       show: false,
//       teamObject: null
//     };
//   }
//   componentDidMount() {
//     fetch('http://dev.impactrun.com/api/team/?impactleague=9', {
//       method: 'GET',
//     })
//       .then(response => (response.json()))
//       .then((response) => {
//         this.setState({
//           teamObject: response,
//         })
//         console.log("Teams", this.state.teamObject);
//       }).catch((err) => {
//         //console.log("err", err);
//       })
//   }

//   render() {
    
//     return (
//       <div className="App">

//         <input id="foo" value="https://github.com/zenorocha/clipboard.js.git" />

//         <Overlay show={this.state.show} target={this.state.target} trigger="focus" placement="bottom" overlay={tooltip}>


//         </Overlay>
//         <button className="btn" onClick={this.handleClick} aria-label="Copied" data-clipboard-target="#foo" >
//           <img src={Copy} alt="Copy to clipboard" style={{ width: "50px" }} />
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
