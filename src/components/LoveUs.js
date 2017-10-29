import React from "react";
import { Carousel } from 'react-bootstrap/lib/';
import Advitiya from '../img/AdvitiyaSharma1.jpg';
import Prateek from '../img/prateek.jpg';

const LoveUs = ({ index, direction, handleSelect }) => {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="row">

                    <h3 style={{ margin: "auto", padding: "20px", fontSize: "30px" }}>
                        People love us
                    </h3>
                </div>
                <Carousel indicators={false} activeIndex={index} direction={direction} onSelect={handleSelect}>
                    <Carousel.Item className="ca-item">
                        <div >


                            <div className="row h-100">

                                <img src={Advitiya} className="img-fluid img-circle" style={{ height: "100px", width: "100px", margin: "40px auto" }} alt="cause-image" />
                            </div>
                            <div className="row">
                                <h4 className="testimonial" >
                                    I work to make the world a better place every day. It's tough but with Impact, I know I am changing the world with every step.
                            </h4>

                            </div>
                            <hr style={{ borderWidth: "2px", borderColor: "rgba(52, 58, 64, 0.54)" }} />
                            <div className="row">
                                <p style={{ fontSize: "10px", fontWeight: "bold", margin: "25px auto", color: "#8a8a8a" }}> Advitiya Sharma, Co-founder - Genius </p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="ca-item">
                        <div >
                            <div className="row h-100">

                                <img src={Prateek} className="img-fluid img-circle" style={{ height: "100px", width: "100px", margin: "40px auto" }} alt="cause-image" />
                            </div>
                            <div className="row">
                                <h4 className="testimonial">  I love the concept and the app a lot. Tells the calories burned based on the weight as well.</h4>

                            </div>
                            <hr style={{ borderWidth: "2px", borderColor: "rgba(52, 58, 64, 0.54)" }} />
                            <div className="row">
                                <p style={{ fontSize: "10px", fontWeight: "bold", margin: "25px auto", color: "#8a8a8a" }}> Pratik Patil, Changemaker</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <div style={{ maxHeight: "350px" }}>
                            <div className="row h-100">

                                <img src={Prateek} className="img-fluid img-circle" style={{ height: "100px", width: "100px", margin: "40px auto" }} alt="cause-image" />
                            </div>
                            <div className="row">
                                <h4 className="testimonial">One of the best innovative ideas I have come across in recent times.</h4>

                            </div>
                            <hr style={{ borderWidth: "2px", borderColor: "rgba(52, 58, 64, 0.54)" }} />
                            <div className="row">
                                <p style={{ fontSize: "10px", fontWeight: "bold", margin: "25px auto", color: "#8a8a8a" }}> Premanshu Singh, Changemaker </p>
                            </div>
                        </div>
                    </Carousel.Item> */}
                  
                </Carousel>

            </div>



        </section>
    )
}
export default LoveUs;