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
                                <a href="#download">How&nbsp;It&nbsp;works?</a>
                            </li>
                            <li>
                                <a href="#team">Team</a>
                            </li>
                        </ul>
                    </div>



                </div>

                <div className="col-sm-4 col-xs-12 contact-m" >

                    <ul style={{ WebkitPaddingStart: "0px" }}>
                       
                        <li>
                        <a href="/privacy.html" target="_blank">Privacy policy</a>
                            </li>
                        <li>
                            <a href="/guideline.html" target="_blank">Guidelines</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-4 col-xs-12 contact-last">
                    <div>
                        <p>Stay Connected</p>
                        <ul className="list-inline list-social" >
                            <li className="list-inline-item social-facebook" style={{ textAlign: "center" }}>
                                <a href="https://www.facebook.com/GetFitDoGood/" target="_blank">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item social-twitter" style={{ textAlign: "center" }}>
                                <a href="https://twitter.com/ImpactRun01" target="_blank" >
                                    <i className="fa fa-twitter fa-align-center"></i>
                                </a>
                            </li>

                            <li className="list-inline-item social-google-plus" style={{ textAlign: "center" }}>
                                <a href="https://www.instagram.com/impact_kindness_app/" target="_blank">
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