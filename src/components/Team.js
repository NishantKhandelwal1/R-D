import React from 'react';
import CEO from '../img/Cofounder.jpg';

const Team = () => {
    return (
        <section className="features" style={{ backgroundColor: "#fbfbfb" }}>

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
                                <img src={CEO} alt="team" className="img-circle" style={{ width: "100px", height: "100px" }} />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Nikhil Khandelwal</h4>
                                <span className="position">Product, Co-founder</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                    We work on digital interfaces with one eye on the user and other on developers.
                            </p>


                            </div>
                        </div>
                        <div className="col-sm-6 member">
                            <div className="col-sm-4">
                                <img src={CEO} alt="team" className="img-circle" style={{ width: "100px", height: "100px" }} />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Nikhil Khandelwal</h4>
                                <span className="position">Product, Co-founder</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                    We work on digital interfaces with one eye on the user and other on developers.
                            </p>

                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-sm-6 member" >
                            <div className="col-sm-4">
                                <img src={CEO} alt="team" className="img-circle" style={{ width: "100px", height: "100px" }} />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Nikhil Khandelwal</h4>
                                <span className="position">Product, Co-founder</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                    We work on digital interfaces with one eye on the user and other on developers.
                            </p>

                            </div>
                        </div>
                        <div className="col-sm-6 member" >
                            <div className="col-sm-4">
                                <img src={CEO} alt="team" className="img-circle" style={{ width: "100px", height: "100px" }} />
                            </div>
                            <div className="col-sm-8">
                                <h4 style={{ textTransform: "uppercase" }}>Nikhil Khandelwal</h4>
                                <span className="position">Product, Co-founder</span>
                                <br />
                                <p style={{ fontSize: "12px" }}>
                                    We work on digital interfaces with one eye on the user and other on developers.
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