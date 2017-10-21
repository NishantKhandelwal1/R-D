import React from "react";
import CauseImage from '../img/causeimage.jpg';
import Pawan from '../img/pawankumar.jpeg';

const LoveUs = () => {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="row">

                    <h3 style={{ margin: "auto", padding: "20px", fontSize: "30px" }}>
                        People love us
                    </h3>
                </div>
                <div className="row h-100">

                    <img src={Pawan} className="img-fluid img-circle" style={{ height: "100px", width: "100px", margin: "40px auto"}} alt="cause-image" />
                    </div>
                    <div className="row">
                    <h4 style={{margin:"auto",textTransform:"uppercase",textAlign:"center"}}> I just kept going on and on. Something so simple can help a person in need</h4>
                    
                    </div>
                    <hr style={{borderWidth: "2px",borderColor: "rgba(52, 58, 64, 0.54)"}}/>
              <div className="row">
              <p style={{fontSize:"10px",fontWeight:"bold" ,margin:"25px auto",color:"#8a8a8a"}}> Pawan kumar, User </p>
              </div>
                </div>

           

        </section>
    )
}
export default LoveUs;