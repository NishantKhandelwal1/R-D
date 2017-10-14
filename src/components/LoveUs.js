import React from "react";
import CauseImage from '../img/causeimage.jpg';
import CEO from '../img/Cofounder.jpg';

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

                    <img src={CEO} className="img-fluid img-circle" style={{ height: "100px", width: "100px", margin: "40px auto"}} alt="cause-image" />
                    </div>
                    <div className="row">
                    <h4 style={{margin:"auto",textTransform:"uppercase"}}>I couldn't have asked for more than this</h4>
                    
                    </div>
                    <hr style={{borderWidth: "2px",borderColor: "rgba(52, 58, 64, 0.54)"}}/>
              <div className="row">
              <p style={{fontSize:"10px",fontWeight:"bold" ,margin:"25px auto",color:"#8a8a8a"}}>Jack Nash, CEO & Founder,Example Company </p>
              </div>
                </div>

           

        </section>
    )
}
export default LoveUs;