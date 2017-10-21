import React from 'react';
import CauseImage from '../img/causeimage.jpg';


const Header = () => {
    return (
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 slider ">
                    <div className="col-sm-7 my-auto">
                        <div className="header-content mx-auto">
                            <h1 style={{ color: "rgb(59, 59, 59)" }} className="mb-5">
                                We have converted <br /><span style={{ fontFamily: "latoblack", color: "rgb(55, 55, 55)" }}>3,75,443,654</span> steps into <br />
                                <span style={{ color: "#18dfbf", }}>&#8377;31,00,000</span> as charity.

                                <br />
                                <br />
                                How?

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