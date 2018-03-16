import React from "react";
import { Carousel } from 'react-bootstrap/lib/';
import Advitiya from '../img/Advitiya.JPG';
import Prateek from '../img/prateek.jpg';
import Mathhew from '../img/Mathhew.jpg';
import Sumit_kala from '../img/Sumit_kala.JPG';
import Nana from '../img/Nana.png';

const LoveUs = ({ index, direction, handleSelect }) => {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="row">
                    <h3 className="section-title" style={{ margin: "auto", padding: "20px" }}>
                        People love us
                    </h3>
                </div>
                <Carousel indicators={false} activeIndex={index} direction={direction} onSelect={handleSelect}>
                <Carousel.Item className="ca-item">
                        <div >
                            <div className="row h-100">
                                <img src={Nana} className="img-fluid img-circle" style={{ height: "100px", width: "100px", margin: "40px auto" }} alt="testimonial-nana" />
                            </div>
                            <div className="row">
                                <h4 className="testimonial">  We at Naam Foundation wish to congratulate every Impact App user. Each of you is indeed making a huge difference in someone’s life!</h4>
                            </div>
                            <hr style={{ borderWidth: "2px", borderColor: "rgba(52, 58, 64, 0.54)" }} />
                            <div className="row">
                                <span className="testimonial-name">Nana patekar<span style={{fontFamily: "latoregular"}}>, Actor</span></span>  
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="ca-item">
                        <div >
                            <div className="row h-100">

                                <img src={Prateek} className="img-fluid img-circle" style={{ height: "100px", width: "100px", margin: "40px auto" }} alt="testimonial-pratik" />
                            </div>
                            <div className="row">
                                <h4 className="testimonial">  I love the concept and the app a lot. Tells the calories burned based on the weight as well.</h4>

                            </div>
                            <hr style={{ borderWidth: "2px", borderColor: "rgba(52, 58, 64, 0.54)" }} />
                            <div className="row">
                                <span className="testimonial-name">Pratik Patil<span style={{fontFamily: "latoregular"}}>, Changemaker</span></span>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="ca-item">
                        <div >
                            <div className="row h-100">
                                <img src={Advitiya} className="img-fluid img-circle" style={{ height: "100px", width: "100px", margin: "40px auto" }} alt="testimonial-Advitiya" />
                            </div>
                            <div className="row">
                                <h4 className="testimonial" >
                                    I work to make the world a better place every day. It's tough but with <i>Impact</i>, I know I am changing the world with every step.
                            </h4>
                            </div>
                            <hr style={{ borderWidth: "2px", borderColor: "rgba(52, 58, 64, 0.54)" }} />
                            <div className="row">
                                <span className="testimonial-name">Advitiya Sharma<span style={{fontFamily: "latoregular"}}>, Co-founder - Genius </span></span>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="ca-item">
                        <div >
                            <div className="row h-100">
                                <img src={Mathhew} className="img-fluid img-circle" style={{ height: "100px", width: "100px", margin: "40px auto" }} alt="testimonial-Matthew" />
                            </div>
                            <div className="row">
                                <h4 className="testimonial">I love running with <i>Impact</i> because it supports amazing causes and keeps me active and inspired.</h4>
                            </div>
                            <hr style={{ borderWidth: "2px", borderColor: "rgba(52, 58, 64, 0.54)" }} />
                            <div className="row">
                                <span className="testimonial-name">Matthew Kimbrough<span style={{fontFamily: "latoregular"}}>, Change-maker </span></span>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="ca-item">
                        <div>
                            <div className="row h-100">
                                <img src={Sumit_kala} className="img-fluid img-circle" style={{ height: "100px", width: "100px", margin: "40px auto" }} alt="testimonial-Sumit" />
                            </div>
                            <div className="row">
                                <h4 className="testimonial">I run for 20 km with <i>Impact</i> every day. Helping someone while improving my stamina is the best combination ever.</h4>
                            </div>
                            <hr style={{ borderWidth: "2px", borderColor: "rgba(52, 58, 64, 0.54)" }} />
                            <div className="row">
                                <span className="testimonial-name">Sumit Kala<span style={{fontFamily: "latoregular"}}>, Change-maker</span></span>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    )
}
export default LoveUs;