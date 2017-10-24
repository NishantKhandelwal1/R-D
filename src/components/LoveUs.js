import React from "react";

import Advitiya from '../img/AdvitiyaSharma.jpg';

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

                    <img src={Advitiya} className="img-fluid img-circle" style={{ height: "100px", width: "100px", margin: "40px auto"}} alt="cause-image" />
                    </div>
                    <div className="row">
                    <h4 style={{margin:"auto",textAlign:"center"}}> I use Impact everyday to and from my visit to the temple. It feels amazing to tough God's feet after doing God's work</h4>
                    
                    </div>
                    <hr style={{borderWidth: "2px",borderColor: "rgba(52, 58, 64, 0.54)"}}/>
              <div className="row">
              <p style={{fontSize:"10px",fontWeight:"bold" ,margin:"25px auto",color:"#8a8a8a"}}> Advitiya Sharma, Cofounder - Housing & Genius </p>
              </div>
                </div>

           

        </section>
    )
}
export default LoveUs;