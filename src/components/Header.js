import React from 'react';
import CauseImage from '../img/dandi_march.jpg';
import AnimatedNumber from 'react-animated-number';


const Header = ({ Impact }) => {
    return (
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 slider ">
                    <div className="col-sm-7 my-auto">
                        <div className="header-content mx-auto">
                            <h1 style={{ color: "rgb(59, 59, 59)" }} className="mb-5 head">
                                <span style={{ fontFamily: "latoblack", color: "rgb(55, 55, 55)", transition: "1.8s ease-out" }}>
                                    <AnimatedNumber component="text" value={(Impact * 121)}
                                        stepPrecision={0}
                                        duration={800}
                                        formatValue={n => (n).toLocaleString('en')}
                                    />
                                </span> steps <br /> have raised
                                <span style={{ color: "#18dfbf", }}> <br />&#8377;
                                <AnimatedNumber component="text" value={Impact}
                                        stepPrecision={0}
                                        duration={800}
                                        formatValue={n => (n).toLocaleString('en')}
                                    />
                                </span> for&nbsp;charity

                                <br />
                                <br />


                            </h1>
                            {/* <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
                        </div>
                    </div>
                    <div className="col-sm-5 my-auto">
                        <div className="device-container">
                            <div className="centerBlock">

                                <img src={CauseImage} style={{ boxShadow: "0 0 20px 7px #f5f5f5" }} className="img-fluid" alt="cause-image" />


                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 arrow" style={{ textAlign: "center", minHeight: "91px" }}>
                        <section id="section01">
                            <a><span></span></a>
                        </section>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;