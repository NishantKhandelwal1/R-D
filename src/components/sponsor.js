import React from 'react';
import Hero from './../img/hero_logo.jpg';
import LnT from './../img/lnt_logo.jpg';
import Barclays from './../img/barclays.jpg';
import Aarti from './../img/Aartiupdated.png';
import Welspun from './../img/welspun.png';
import Jubilant from './../img/jubilant-lifescience.jpg'


export default class Sponsor extends React.Component {
    render() {
        return (
            <section className="features grad-section" >
                <div className="container">
                   

                        <div className="demo-content1">
                            <div className="row">
                                <h2 style={{textAlign:"center"}} className="here-how section-title">Our Proud Partners</h2>
                            </div>
                         
                                <ul className="flex-container">
                                    <li className="flex-item">
                                        <img style={{ height: "110px" }} src={Hero} alt="sponser-hero" />
                                    </li>
                                    <li className="flex-item">
                                        <img style={{ height: "90px" }} src={Jubilant} alt="sponser-jubilant" />
                                    </li>

                                    <li className="flex-item">
                                        <img style={{ height: "90px" }} src={Barclays} alt="sponser-barclays" />
                                    </li>
                                    <li className="flex-item">

                                        <img style={{ height: "70px" }} src={Aarti} alt="sponser-aarti" />

                                    </li>
                                    <li className="flex-item">
                                        <img id="Lnt-logo" style={{ height: "50px" }} src={LnT} alt="sponser-LnT" />

                                    </li>
                                    <li className="flex-item">
                                        <img id="welspun-logo" style={{ height: "100px" }} src={Welspun} alt="sponser-welspun" />

                                    </li>
                                

                                    
                                </ul>
                           
                        </div>

                </div>
            </section>

        );
    }
}
