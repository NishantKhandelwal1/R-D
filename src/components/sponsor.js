import React from 'react';
import Hero from './../img/new-logo/hero.png';
import LnT from './../img/new-logo/lnt.png';
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
                            <div>

                                <img className="img-fluid slider-image"src={Hero} alt="sponser-hero" />

                            </div>
                            <div >

                                <img className="img-fluid slider-image"src={Nasscom} alt="sponser-Nasscom" />

                            </div>
                            <div >

                                <img className="img-fluid slider-image"src={Jubilant} alt="sponser-jubilant" />

                            </div>
                            <div >

                                <img className="img-fluid slider-image"id="Red-Cross-logo" src={RedCross} alt="sponser-Red-Cross" />

                            </div>
                            <div >

                                <img className="img-fluid slider-image"src={Barclays} alt="sponser-barclays" />

                            </div>
                            <div >

                                <img className="img-fluid slider-image"src={Naam} alt="sponser-naam" />

                            </div>
                            <div >

                                <img className="img-fluid slider-image"id="Lnt-logo" src={LnT} alt="sponser-LnT" />

                            </div>
                            
                            <div >

                                <img className="img-fluid slider-image"src={Aarti} alt="sponser-aarti" />

                            </div>
                            <div >

                                <img className="img-fluid slider-image"src={ThinkFondation} alt="sponser-think" />

                            </div>
                            
                            <div >

                                <img className="img-fluid slider-image"src={Welspun} alt="sponser-welspun" />

                            </div>
                            <div >

                                <img className="img-fluid slider-image" src={GrowTree} alt="sponser-grow-tree" />

                            </div>
                            <div >

                                <img className="img-fluid slider-image" src={Wockhardt} alt="sponser-wockhardt" />

                            </div>
                            <div >

                                <img className="img-fluid slider-image" src={Awwa} alt="sponser-awwa" />

                            </div>
                            <div >

                                <img className="img-fluid slider-image" src={Ipca} alt="sponser-ipca" />

                            </div>




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

