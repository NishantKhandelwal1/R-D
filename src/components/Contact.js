import React from "react";
import Contact_logo from "../img/contact-logo.png";
const Contact = () => {
    return (
        <section className="contact grad-section" style={{ display: "flex" }} id="contact">
            <div style={{ width: "100%" }}>
                <div className="col-sm-4 col-xs-12" style={{ display: "flex" }}>
                    <div className=" col-sm-6 ">
                        <img src={Contact_logo} alt="logo-contact" style={{ width: "106px" }} />
                    </div>
                    <div className="col-sm-6">
                        <ul>
                            <li>
                                <a href="#page-top">Home</a>
                            </li>
                            <li>
                                {/* <a href="#download">How&nbsp;It&nbsp;works?</a> */}
                                <a href="#download">How?</a>
                            </li>
                            <li>
                                <a href="#team">Team</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-4 col-xs-12" style={{ display: "flex" }}>
                    <div className="col-sm-6">
                        <ul className="contact-last" style={{ WebkitPaddingStart: "10px" }}>
                            <li>
                                <a href="/privacy.html" rel='noopener noreferrer' target="_blank">Privacy policy</a>
                            </li>
                            <li>
                                <a href="/guideline.html" rel='noopener noreferrer' target="_blank">Guidelines</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                    
                            <p style={{textAlign:"center",marginBottom:"1px",padding:"2px"}}>Download App</p>
                        
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <a className="nav-link js-scroll-trigger" href="https://goo.gl/WM27CA" rel='noopener noreferrer' target="_blank" style={{ marginRight: "5px" }}>
                                <i className="fa fa-android" aria-hidden="true" style={{ color: "black" }}></i>
                            </a>
                            <a className="nav-link js-scroll-trigger" rel='noopener noreferrer' target="_blank" href="https://goo.gl/qJPjzb">
                                 <i className="fa fa-apple" aria-hidden="true" style={{ color: "black" }}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-xs-12 contact-last">
                    <div>
                        <p>Stay Connected</p>
                        <ul className="list-inline list-social" >
                            <li className="list-inline-item social-facebook" style={{ textAlign: "center" }}>
                                <a href="https://www.facebook.com/impactapp01/" rel='noopener noreferrer' target="_blank">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item social-twitter" style={{ textAlign: "center" }}>
                                <a href="https://twitter.com/ImpactRun01" rel='noopener noreferrer' target="_blank" >
                                    <i className="fa fa-twitter fa-align-center"></i>
                                </a>
                            </li>

                            <li className="list-inline-item social-google-plus" style={{ textAlign: "center" }}>
                                <a href="https://www.instagram.com/impact_kindness_app/" rel='noopener noreferrer' target="_blank">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>

    )
}
export default Contact;