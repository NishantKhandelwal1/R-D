import React from 'react';
import CauseImage from '../img/dandi_mobile_image.png';
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
                                    <AnimatedNumber component="text" value={(Impact * 123)}
                                        stepPrecision={0}
                                        duration={1200}
                                        initialValue={10000}
                                        formatValue={n => (n).toLocaleString('en-IN')}
                                    />
                                </span> steps <br /> have raised
                                <span style={{ color: "#18dfbf", }}> <br />
                                <i className="fa fa-inr" style={{fontSize:"100%"}} aria-hidden="true"></i>
                                <AnimatedNumber component="text" value={Impact}
                                        stepPrecision={0}
                                        duration={1200}
                                        initialValue={10000}
                                        formatValue={n => (n).toLocaleString('en-IN')}
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
                                <img src={CauseImage} /*style={{ boxShadow: "0 0 20px 7px #f5f5f5" }}*/ className="img-fluid" alt="cause-dandi" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 arrow" style={{ textAlign: "center", minHeight: "91px" }}>
                        <section id="section01">
                            <a><span id="arrow-span"></span></a>
                        </section>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;