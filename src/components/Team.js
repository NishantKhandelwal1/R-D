import React from 'react';
import Ishan from '../img/Ishan.jpg';
import Nikhil from '../img/Nikhil.jpg';
import Nagle from '../img/nagle.jpg';
import Ankit from '../img/ankit.jpg';
import Dhope from '../img/dhope.jpg';
import Gaurav from '../img/gaurav.jpg';
import Kanak from '../img/kanak.jpg';
import Akash from '../img/akash.jpg';
import Nishant from '../img/nishant.jpg';

const Team = () => {
    return (
        <section id="team" className="features" style={{ backgroundColor: "#fbfbfb" }}>

            <div className="container" >
                <div className="row">
                    <h3 style={{ margin: "auto", padding: "20px", fontSize: "30px" }}>
                        Team
                    </h3>
                </div>
                <div className="team-member">
                    <div className="row" >
                        
                        <div className="col-sm-6 member">

                            <div className="col-sm-12 col-md-4">
                                <img src={Ishan} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <h4 style={{ textTransform: "uppercase" }}>Ishan Nadkarni</h4>
                                <span className="position grad">@nadu Business</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2013 IIT Bombay graduate, Ishan dreams of making the world fitter and kinder. With a 3-year experience of scaling business products, operations and digital marketing, he is the brain of Impact managing business, investments and customer excellence.
                                <br/>Ex- Opera Solutions, Housing.com
                                </p>


                        </div>
                    </div>
                        <div className="col-sm-6 member">
                            <div className="col-sm-12 col-md-4">
                                <img src={Nikhil} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <h4 style={{ textTransform: "uppercase" }}>Nikhil Khandelwal</h4>
                                <span className="position grad">@khandu Product</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2013 IIT Bombay graduate, Nikhil is a design guru and a constant problem solver. With 3 years of experience at heading product teams, he is the heart of Impact handling design, UEx, product strategies and customer excellence.
                                <br/>Ex- Opera Solutions, Bewakoof.com
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-sm-6 member" >
                            <div className="col-sm-4">
                                <img src={Nagle} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Piyush Nagle</h4>
                                <span className="position grad">@noggles Product</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2012 IIT Bombay graduate, Piyush is a tech geek and a passionate guitarist. With a 3-year experience of building back-end architecture, he is the backbone of Impact looking after its back-end, dev-ops and iOS.
                                <br/>Ex- Gravitas
                                </p>

                            </div>
                        </div>
                        <div className="col-sm-6 member" >
                            <div className="col-sm-4">
                                <img src={Ankit} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Ankit Maheshwari</h4>
                                <span className="position grad">@prof Product</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2011 IIT Delhi graduate, Ankit is passionate about AI and India's social sector. With a 6 year rich tech experience in Android and machine learning, he is leading the tech at Impact along with building our Andorid app and in-house algorithms.
                                <br/>Ex- Jumbotail.com, Housing.com
                                </p>

                            </div>
                        </div>
                        <div className="col-sm-6 member" >
                            <div className="col-sm-4">
                                <img src={Dhope} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Abhijit Dhope</h4>
                                <span className="position grad">@dhope Product</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2012 IIT Bombay graduate, Abhijeet is our in-house Learning Machine. From martial arts to cooking, from farming to robotics, you think it, he knows it. With a 3-year programming and 2-year traveling experience, which includes running a cafe in Dharamshala, Abhijeet makes everyone's life easier by streamlining and automating processes at Impact.
                                <br/>Ex- Oracle, Aasaanjobs
                                </p>

                            </div>
                        </div>
                        <div className="col-sm-6 member" >
                            <div className="col-sm-4">
                                <img src={Gaurav} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Gaurav Mehra</h4>
                                <span className="position grad">@baddy Business</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2012 IIT Bombay graduate, Gaurav cares most about uplifting the bottom billion and has volunteered in several non-profits. He uses his 5-year experience of managing sales and business strategies in start-ups, to look after business and partnerships at Impact.
                                <br/>Ex- Kaivalya Education Foundation, Housing.com
                                </p>

                            </div>
                        </div>
                        <div className="col-sm-6 member" >
                            <div className="col-sm-4">
                                <img src={Nishant} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Nishant Khandelwal</h4>
                                <span className="position grad">@nikki Product</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2013 Vedant college Kota graduate, Nishant spends most of his time either coding or acquiring new programming skills. With 2 years of experience as a technology associate, Nishant works on front-end development and customer satisfaction at Impact.
                                <br/>Ex- Tata Communications
                                </p>

                            </div>
                        </div>
                        <div className="col-sm-6 member" >
                            <div className="col-sm-4">
                                <img src={Kanak} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Kanak Agrawal</h4>
                                <span className="position grad">@kay Growth</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 2015 IIT Kanpur graduate, Kanak is a traveller at heart. Writing is her newly found passion after a stint with analytics for 2 years. The mind behind Impact's words, Kanak manages content and social media at Impact along with business communications.
                                <br/>Ex- Mckinsey & Company
                                </p>

                            </div>
                        </div>
                        <div className="col-sm-6 member" >
                            <div className="col-sm-4">
                                <img src={Akash} alt="team-akash" className="img-circle team-image" />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Akash Nautiyal</h4>
                                <span className="position grad">@noddy Product</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                A 10th standard pass-out, Akash hails from a rural background and aims to improve the quality of education and cleanliness in his village. A self learned coder and guitarist, Akash works on front-end and iOS development at Impact.
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