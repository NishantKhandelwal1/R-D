import React from 'react';
import Ishan from '../img/Ishan.jpg';
import Nikhil from '../img/Nikhil.jpg';
// import Nagle from '../img/nagle.jpg';
import Ankit from '../img/ankit.jpg';
// import Dhope from '../img/dhope.jpg';
import Gaurav from '../img/gaurav.jpg';
import Kanak from '../img/kanak.jpg';
import Akash from '../img/akash.jpg';
import Nishant from '../img/nishant.jpg';

const Team = () => {
    return (
        <section id="team" className="features grad-section" >

            <div className="container" >
                <div className="row">
                    <h3 className="section-title" style={{ margin: "auto", padding: "20px"}}>
                        Team
                    </h3>
                </div>
                <div className="team-member">
                    <div className="row" >
                        
                        <div className="col-sm-6 member">

                            <div className="col-sm-12 col-md-4 nopadding" style={{textAlign:"center"}}>
                                <img src={Ishan} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-12 col-md-8 nopadding">
                                <h4 style={{ textTransform: "uppercase" }}>Ishan Nadkarni</h4>
                                <span className="position">Business @nadu</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2013 IIT Bombay graduate, Ishan dreams of making the world fitter and kinder. With a 3-year experience of scaling business products, operations and digital marketing, he is the brain of Impact managing business, investments and customer excellence.
                                <br/>Ex- Opera Solutions, Housing.com
                                </p>


                        </div>
                    </div>
                        <div className="col-sm-6 member">
                            <div className="col-sm-12 col-md-4 nopadding" style={{textAlign:"center"}}>
                                <img src={Nikhil} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-12 col-md-8 nopadding">
                                <h4 style={{ textTransform: "uppercase" }}>Nikhil Khandelwal</h4>
                                <span className="position">Product @khandu</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2013 IIT Bombay graduate, Nikhil is a design guru and a constant problem solver.With a 3-year experience of heading product teams, he is the heart of Impact handling design, UEx, product strategies and customer excellence.
                                <br/>Ex- Opera Solutions, Bewakoof.com
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {/* <div className="col-sm-6 member" >
                            <div className="col-sm-12 col-md-4 nopadding" style={{textAlign:"center"}}>
                                <img src={Nagle} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-12 col-md-8 nopadding">
                                <h4 style={{ textTransform: "uppercase" }}>Piyush Nagle</h4>
                                <span className="position">Product @noggles</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2012 IIT Bombay graduate, Piyush is a tech geek and a passionate guitarist. With a 3-year experience of building back-end architecture, he is the backbone of Impact looking after its back-end, dev-ops and iOS.
                                <br/>Ex- Gravitas
                                </p>

                            </div>
                        </div> */}
                        <div className="col-sm-6 member" >
                            <div className="col-sm-12 col-md-4 nopadding" style={{textAlign:"center"}}> 
                                <img src={Ankit} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-12 col-md-8 nopadding">
                                <h4 style={{ textTransform: "uppercase" }}>Ankit Maheshwari</h4>
                                <span className="position">Product @prof</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2011 IIT Delhi graduate, Ankit is passionate about AI and India's social sector. With a 6-year rich tech experience in Android and machine learning, he is leading the tech at Impact along with building our Andorid app and in-house algorithms.
                                <br/>Ex- Jumbotail.com, Housing.com
                                </p>

                            </div>
                        </div>
                        {/* <div className="col-sm-6 member" >
                            <div className="col-sm-12 col-md-4 nopadding" style={{textAlign:"center"}}>
                                <img src={Dhope} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-12 col-md-8 nopadding">
                                <h4 style={{ textTransform: "uppercase" }}>Abhijeet Dhope</h4>
                                <span className="position">Automation @dhope</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2012 IIT Bombay graduate, Abhijeet is our in-house Learning Machine. From martial arts to cooking, from farming to robotics, you think it, he knows it. With a 3-year programming and 2-year traveling experience, which includes running a cafe in Dharamshala, Abhijeet makes everyone's life easier by streamlining and automating processes at Impact.
                                <br/>Ex- Oracle, Aasaanjobs
                                </p>

                            </div>
                        </div> */}
                        <div className="col-sm-6 member" >
                            <div className="col-sm-12 col-md-4 nopadding" style={{textAlign:"center"}}>
                                <img src={Gaurav} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-12 col-md-8 nopadding">
                                <h4 style={{ textTransform: "uppercase" }}>Gaurav Mehra</h4>
                                <span className="position">Business @baddy</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2012 IIT Bombay graduate, Gaurav cares most about uplifting the bottom billion and has volunteered in several non-profits. He uses his 5-year experience of managing sales and business strategies in start-ups, to look after business and partnerships at Impact.
                                <br/>Ex- Kaivalya Education Foundation, Housing.com
                                </p>

                            </div>
                        </div>
                        <div className="col-sm-6 member" >
                            <div className="col-sm-12 col-md-4 nopadding" style={{textAlign:"center"}}>
                                <img src={Nishant} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-12 col-md-8 nopadding">
                                <h4 style={{ textTransform: "uppercase" }}>Nishant Khandelwal</h4>
                                <span className="position">Product @nikki</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2013 Vedant college Kota graduate, Nishant spends most of his time either coding or acquiring new programming skills. With a 2-year experience as a technology associate, Nishant works on front-end development and customer satisfaction at Impact.
                                <br/>Ex- Tata Communications
                                </p>

                            </div>
                        </div>
                        <div className="col-sm-6 member" >
                            <div className="col-sm-12 col-md-4 nopadding" style={{textAlign:"center"}}>
                                <img src={Kanak} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-12 col-md-8 nopadding">
                                <h4 style={{ textTransform: "uppercase" }}>Kanak Agrawal</h4>
                                <span className="position">Growth @kay</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2015 IIT Kanpur graduate, Kanak is a traveller at heart. Writing is her newly found passion after a stint with analytics for 2 years. The mind behind Impact's words, Kanak manages content and social media at Impact along with business communications.
                                <br/>Ex- Mckinsey & Company
                                </p>

                            </div>
                        </div>
                        <div className="col-sm-6 member" >
                            <div className="col-sm-12 col-md-4 nopadding" style={{textAlign:"center"}}>
                                <img src={Akash} alt="team-akash" className="img-circle team-image" />
                            </div>
                            <div className="col-sm-12 col-md-8 nopadding">
                                <h4 style={{ textTransform: "uppercase" }}>Akash Nautiyal</h4>
                                <span className="position">Product @noddy</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 22-year old self learned coder and guitarist, Akash aims to improve the quality of education and cleanliness in his town Uttarkashi. With change-makers’ support through Impact, he has opened a school in his village where kids learn coding and music. Akash works on front-end and iOS development at Impact.
                                </p>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team;