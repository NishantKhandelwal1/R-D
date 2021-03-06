import React from 'react';
// import CauseImage from '../img/causeimage.jpg';
import Awwa from '../img/heroes-awwa.jpg';
import Entrepreneur from '../img/enterpreneur.jpg';
import Farmer from '../img/farmers.jpg';
import { Carousel, CarouselItem } from 'react-bootstrap/lib/';
import Nasscom from '../img/completed-cause-nasscom.jpg';
import FeedingIndia from '../img/completed-cause-card_feeding_india.jpg';
import Growtree from "../img/completed_cause_card_LTI_Growtrees.jpg";


const Corousel1 = () => {
  return (
    <div className="row h-100 slider" >

      <div className="col-sm-7 my-auto carousel" >
        <div className="header-content mx-auto">
          <h1 className="mb-5">
            Empowered
            <br /><span style={{ color: "#18dfbf" }}>100&nbsp;women entrepreneurs</span>
            <br /> in slums of Mumbai
          </h1>
          {/* <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
        </div>
      </div>
      <div className="col-sm-5 my-auto" >
        <div className="device-container">
          <div className="img-fluid centerBlock">
            <img src={Entrepreneur} className="img-fluid slider-cause" alt="women-cause" />
          </div>
        </div>
      </div>

    </div>
  )
}

// const Corousel2 = () => {
//   return (
//     <div className="row h-100 slider" >

//       <div className="col-sm-7 my-auto carousel" >
//         <div className="header-content mx-auto">
//           <h1 className="mb-5">
//             Treated
//             <br /><span style={{ color: "#18dfbf" }}>10&nbsp;babies&nbsp;with&nbsp;congenital</span>
//             <br /> heart defects
//             </h1>
//           {/* <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
//         </div>
//       </div>
//       <div className="col-sm-5 my-auto" >
//         <div className="device-container">
//           <div className="img-fluid">
//             <img src={CauseImage} className="img-fluid slider-cause" alt="cause-image" />
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

const Corousel3 = () => {
  return (
    <div className="row h-100 slider" >
      <div className="col-sm-7 my-auto carousel" >
        <div className="header-content mx-auto">
          <h1 className="mb-5">
            Helped
            <br /><span style={{ color: "#18dfbf" }}>300&nbsp;drought&nbsp;hit </span>
            <br /> farmer families
            </h1>
          {/* <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
        </div>
      </div>
      <div className="col-sm-5 my-auto" >
        <div className="device-container">
          <div className="img-fluid centerBlock">
            <img src={Farmer} className="img-fluid slider-cause" alt="farmer-cause" />
          </div>
        </div>
      </div>

    </div>
  )
}

const Corousel4 = () => {
  return (
    <div className="row h-100 slider" >

      <div className="col-sm-7 my-auto carousel" >
        <div className="header-content mx-auto">
          <h1 className="mb-5">
            Supported
            <br /><span style={{ color: "#18dfbf" }}>70 families of&nbsp;</span>
            <br />Indian army martyrs
          </h1>
          {/* <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
        </div>
      </div>
      <div className="col-sm-5 my-auto" >
        <div className="device-container">
          <div className="img-fluid centerBlock">
            <img src={Awwa} className="img-fluid slider-cause" alt="army-cause" />
          </div>
        </div>
      </div>
    </div>
  )
}

const Corousel5 = () => {
  return (
    <div className="row h-100 slider" >

      <div className="col-sm-7 my-auto carousel" >
        <div className="header-content mx-auto">
          <h1 className="mb-5">
            Trained
            <br /><span style={{ color: "#18dfbf" }}>1000s of youth with</span>
            <br />employability skills
          </h1>
          {/* <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
        </div>
      </div>
      <div className="col-sm-5 my-auto" >
        <div className="device-container">
          <div className="img-fluid centerBlock">
            <img src={Nasscom} className="img-fluid slider-cause" alt="army-cause" />
          </div>
        </div>
      </div>
    </div>
  )
}
const Corousel6 = () => {
  return (
    <div className="row h-100 slider" >

      <div className="col-sm-7 my-auto carousel" >
        <div className="header-content mx-auto">
          <h1 className="mb-5">
            Provided meals to
            <br /><span style={{ color: "#18dfbf" }}> 385 school kids,</span>
            <br />for 1 year
          </h1>
          {/* <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
        </div>
      </div>
      <div className="col-sm-5 my-auto" >
        <div className="device-container">
          <div className="img-fluid centerBlock">
            <img src={FeedingIndia} className="img-fluid slider-cause" alt="army-cause" />
          </div>
        </div>
      </div>
    </div>
  )
}


const Corousel7 = () => {
  return (
    <div className="row h-100 slider" >

      <div className="col-sm-7 my-auto carousel" >
        <div className="header-content mx-auto">
          <h1 className="mb-5">
            Planted
            <br /><span style={{ color: "#18dfbf" }}> 11,250 trees at Nimbhora </span>
            <br />village of Maharashtra
          </h1>
          {/* <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
        </div>
      </div>
      <div className="col-sm-5 my-auto" >
        <div className="device-container">
          <div className="img-fluid centerBlock">
            <a href="https://www.lntinfotech.com/social-responsibility/" target="_blank" rel='noopener noreferrer'><img src={Growtree} className="img-fluid slider-cause" alt="army-cause" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
const Togethercorousel = () => {

  return (
    <section className="features grad-section" id="features">
      <div className="container-fluid" >
        <div className="container">
          <div className="row">

            <h3 className="section-title" style={{ margin: "auto", padding: "20px", textAlign: "center" }}>
              Together we have
        </h3>

          </div>

          <Carousel pauseOnHover={false} controls={false} nextIcon={""} prevIcon={""}>
            <CarouselItem>
              <Corousel1 />
            </CarouselItem>
            {/* <CarouselItem>
              <Corousel2 />
            </CarouselItem> */}
            <CarouselItem>
              <Corousel3 />
            </CarouselItem>
            <CarouselItem>
              <Corousel4 />
            </CarouselItem>
            <CarouselItem>
              <Corousel5 />
            </CarouselItem>
            <CarouselItem>
              <Corousel6 />
            </CarouselItem>
            <CarouselItem>
              <Corousel7 />
            </CarouselItem>
          </Carousel>
          {/* <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}


        </div>

      </div>
    </section>
  )
}

export default Togethercorousel;