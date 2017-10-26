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

                            <div className="col-sm-4">
                                <img src={Ishan} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Ishan Nadkarni</h4>
                                <span className="position grad">@nadu Business</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                Ishan is a 2013 IIT Bombay graduate passionate about fitness and social change. Before starting ‘Impact’ up, he did a brief stint at Opera Solutions and a longer one at  Housing.com.  At Impact, he looks after business, investments and customer satisfaction.
                                </p>


                        </div>
                    </div>
                        <div className="col-sm-6 member">
                            <div className="col-sm-4">
                                <img src={Nikhil} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Nikhil Khandelwal</h4>
                                <span className="position grad">@khandu Product</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                Nikhil is a 2013 IIT Bombay graduate, a design guru and a constant problem seeker & solver. Before starting ‘Impact’ up, he worked at Opera Solutions and Bewakoof.com.  At Impact, he looks after design, UEx and customer satisfaction.
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
                                Piyush graduated from IIT Bombay in 2012. A coder at heart, he worked in Gravitas building backend architecture for several of their clients . He is the backbone of Impact and looks after backend, dev-ops and iOS.
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
                                Ankit is a 2011 Computer Science graduate from IIT Delhi and is passionate about AI and India’s social sector. Prior to ‘Impact’ he has made several android apps at Housing.com and Jumbotail.com. He is Impact’s Tech Lead and  has build the android app and all our awesome in-house algorithms.
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
                                Abhijit is a 2012 IIT Bombay graduate and is a code, anime and animal lover. Before joining ‘Impact’ he has worked as a full stack developer at Aasaan Jobs and run a profitable cafe in Dharamshala. At Impact,  he takes care of analytics, dashboards and customer satisfaction.
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
                                Gaurav is a 2012 IIT Bombay graduate and is most passionate about solving hunger for the bottom billion. Before ‘Impact’ he worked at Housing.com, Kaivalya Education Foundation and is an active volunteer with lots of nonprofits. He looks after business and partnerships at Impact..
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
                                Nishant is a Computer science graduate from Vedant College Kota and the hardest worker among us all. Before joining Impact, Nishant worked in Tata Communications as a technology associate. At Impact, he works on frontend development and customer satisfaction.
                                </p>

                            </div>
                        </div>
                        <div className="col-sm-6 member" >
                            <div className="col-sm-4">
                                <img src={Kanak} alt="team" className="img-circle team-image"  />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Kanak Agarwal</h4>
                                <span className="position grad">@kay Growth</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                Kanak is a 2015 Economics graduate from IIT Kanpur, a phenomenal writer and a travel blogger. Before joining ‘Impact’ she has worked McKinsey & Co. as a business analyst and consultant. At Impact, she handles content, social media and customer satisfaction.
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
                                Akash is a 10th standard graduate, a self learned coder and a guitarist. He is our in-house inspiration and has shown the maximum growth amongst all of us in the last two years. At Impact, he handles frontend and iOS development.
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