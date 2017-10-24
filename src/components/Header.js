import React from 'react';
import CauseImage from '../img/dandi_march.png';
import AnimatedNumber from 'react-animated-number';


const Header = ({ Impact }) => {
    return (
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 slider ">
                    <div className="col-sm-7 my-auto">
                        <div className="header-content mx-auto">
                            <h1 style={{ color: "rgb(59, 59, 59)"}} className="mb-5 head">
                                We have converted <br /><span style={{ fontFamily: "latoblack", color: "rgb(55, 55, 55)", transition: "1.8s ease-out" }}>
                                    <AnimatedNumber component="text" value={Impact * 125}
                                        
                                        stepPrecision={0}
                                        duration={800}
                                    />


                                </span> steps into <br />
                                <span style={{ color: "#18dfbf", }}>&#8377;
                                <AnimatedNumber component="text" value={Impact}
                                        
                                        stepPrecision={0}
                                        duration={800}
                                    />
                                </span> as charity

                                <br />
                                <br />


                            </h1>
                            {/* <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
                        </div>
                    </div>
                    <div className="col-sm-5 my-auto">
                        <div className="device-container">
                            <div>
                                <img src={CauseImage} className="img-fluid" alt="cause-image" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </header>
    )
}

export default Header;