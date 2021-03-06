import React from 'react';
import Callout from '../img/callout-image.png';
import Callout2 from '../img/callout2.jpg';
import Callout3 from '../img/corporate-image.jpg';


const HowSection = () => {
  return (
    <section className="download text-center grad-section" id="download">
      <div className="container">
        <div className="row ">
          <h2 className="here-how section-title" >Here's How</h2>
        </div>
        <div className="row">
          <div className="col-sm-4" style={{ minHeight: "400px" }}>
            <div style={{ minHeight: "340px" }}>
              <div className="img-align">
                <img src={Callout} alt="callout" className="img-fluid" />
              </div>
              <div className="how-paragraph">
                <h4 style={{ color: "#4a4a4a", fontSize: "24px" }}>Charity Walks</h4>
                <p style={{ textAlign: "start" }}>
                  Raise ₹ 10 for a charity of your choice with every km you cover on Impact. Simply pick a social cause, walk/jog and do good for society while getting fit. Now helping someone is as simple as walking!

                  </p>
              </div>
            </div>

          </div>
          <div className="col-sm-4" style={{ minHeight: "400px" }}>
            <div style={{ minHeight: "340px" }}>
              <div className="img-align">
                <img src={Callout2} alt="callout" className="img-fluid" />
              </div>
              <div className="how-paragraph">
                <h4 style={{ color: "#4a4a4a", fontSize: "24px" }}>Trusted Non-Profits </h4>
                <p style={{ textAlign: "start" }}>
                  We handpick the non-profits, assess the impact they are creating, and bring them onboard like a family. All the money generated by your workouts goes to the non-profits associated with the cause.
                  </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4" style={{ minHeight: "400px" }}>
            <div style={{ minHeight: "340px" }}>
              <div className="img-align">
                <img src={Callout3} alt="callout" className="img-fluid" />
              </div>
              <div className="how-paragraph">
                <h4 style={{ color: "#4a4a4a", fontSize: "24px" }}>Proud Sponsors </h4>
                <p style={{ textAlign: "start" }}>
                  We are honoured and extremely grateful to have caring companies who sponsor your Impact walks and jogs through their CSR and branding budgets. Your steps and their money are fueling the much needed social change.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowSection;