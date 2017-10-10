import React from 'react';
import CauseImage from '../img/causeimage.png';


const Header = () => {
    return (
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-5 my-auto">
                        <div className="device-container">
                            <div className="img-responsive">
                                <img src={CauseImage} className="img-responsive" alt="cause-image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 my-auto">
                        <div className="header-content mx-auto">
                            <h1 style={{ color: "#000000", fontWeight: "bold" }} className="mb-5">
                                We have converted <br />3,75,443,654 steps into <br />
                                Rs. 31,00,000 as charity.

                                <br />
                                <br />
                                How?

                            </h1>
                            {/* <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;