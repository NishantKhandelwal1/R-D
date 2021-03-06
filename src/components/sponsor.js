import React from 'react';
import Hero from './../img/new-logo/hero.png';
import LTI from './../img/new-logo/Lti.gif';
import Barclays from './../img/new-logo/barclay.png';
import Aarti from './../img/new-logo/aarti-logo.png';
import Welspun from './../img/new-logo/welspun-logo.png';
import Jubilant from './../img/new-logo/jubilant.png'
import RedCross from './../img/new-logo/red-cross.png';
import ThinkFondation from './../img/new-logo/think-logo.png';
import GrowTree from './../img/new-logo/grow-tree.png';
import Awwa from './../img/new-logo/awwa-logo.png';
import Ipca from './../img/new-logo/ipca-logo.png';
import Wockhardt from './../img/new-logo/wockhardt.png';
import Nasscom from './../img/new-logo/NASSCOM_Logo.png';
import Naam from './../img/new-logo/naam-logo.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


export default class Sponsor extends React.Component {


    render() {
        var settings = {
            // dots: true,
            // infinite: true,
            //speed: 2000,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 3 } },
                { breakpoint: 1400, settings: { slidesToShow: 5 } },
                { breakpoint: 2200, settings: { slidesToShow: 5 } },
                { breakpoint: 100000, settings: 'unslick' }
            ],

            // slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            // adaptiveHeight: true,
            // centerMode: true,

        };
        return (
            <section className="features grad-section" >
                <div className="container">
                    <div className="demo-content1">
                        <div className="row">
                            <h2 style={{ textAlign: "center" }} className="here-how section-title">Our Proud Partners</h2>
                        </div>
                        <Slider {...settings} style={{ margin: "auto" }}>
                            <div><a href="https://www.heromotocorp.com/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" src={Hero} alt="sponser-hero" /></a></div>
                            <div ><a href="http://www.nasscomfoundation.org/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" src={Nasscom} alt="sponser-Nasscom" /></a></div>
                            <div ><a href="http://www.jubl.com/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" src={Jubilant} alt="sponser-jubilant" /></a></div>
                            <div ><a href="http://www.redcross.org/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" id="Red-Cross-logo" src={RedCross} alt="sponser-Red-Cross" /></a></div>
                            <div ><a href="https://www.lntinfotech.com/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" id="LTI-logo" src={LTI} alt="sponser-LTI" /></a></div>
                            <div ><a href="http://naammh.org/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" src={Naam} alt="sponser-naam" /></a></div>
                            <div ><a href="https://www.barclays.in/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" src={Barclays} alt="sponser-barclays" /></a></div>                         
                            <div ><a href="http://www.aarti-industries.com/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" src={Aarti} alt="sponser-aarti" /></a></div>
                            <div ><a href="http://www.thinkfoundation.org/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" src={ThinkFondation} alt="sponser-think" /></a></div>
                            <div ><a href="http://www.welspunindia.com/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" src={Welspun} alt="sponser-welspun" /></a></div>
                            <div ><a href="https://www.grow-trees.com/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" src={GrowTree} alt="sponser-grow-tree" /></a></div>
                            <div ><a href="http://wockhardtfoundation.org/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" src={Wockhardt} alt="sponser-wockhardt" /></a></div>
                            <div ><a href="http://www.awwa.in/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" src={Awwa} alt="sponser-awwa" /></a></div>
                            <div ><a href="http://www.ipcalabs.com/" rel='noopener noreferrer' target="_blank"><img className="img-fluid slider-image" src={Ipca} alt="sponser-ipca" /></a></div>




                            {/* <ul className="flex-container">
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
                                    <img id="Red-Cross-logo" style={{ height: "100px" }} src={RedCross} alt="sponser-welspun" />
                                </li>
                                <li className="flex-item">
                                    <img id="ThinkFondation-logo" style={{ height: "100px" }} src={ThinkFondation} alt="sponser-welspun" />
                                </li>
                                <li className="flex-item">
                                    <img id="welspun-logo" style={{ height: "100px" }} src={GrowTree} alt="sponser-welspun" />
                                </li>
                                <li className="flex-item">
                                    <img id="welspun-logo" style={{ height: "100px" }} src={Awwa} alt="sponser-welspun" />
                                </li>
                                <li className="flex-item">
                                    <img id="welspun-logo" style={{ height: "100px" }} src={Ipca} alt="sponser-welspun" />
                                </li>
                            </ul> */}

                        </Slider>

                    </div>
                </div>
            </section>

        );
    }
}

