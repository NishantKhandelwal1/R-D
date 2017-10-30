import React from 'react';
// import CauseImage from '../img/causeimage.jpg';
import Awwa from '../img/heroes-awwa.jpg';
import Entrepreneur from '../img/enterpreneur.jpg';
import Farmer from '../img/farmers.jpg';
import { Carousel, CarouselItem } from 'react-bootstrap/lib/';


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
            <img src={Entrepreneur} className="img-fluid slider-cause" alt="cause-image" />
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
            <img src={Farmer} className="img-fluid slider-cause" alt="cause-image" />
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
            <img src={Awwa} className="img-fluid slider-cause" alt="cause-image" />
          </div>
        </div>
      </div>
    </div>
  )
}
const Togethercorousel = () => {

  return (
    <section className="features" id="features" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container-fluid" >
        <div className="container">
          <div className="row">

            <h3 className="section-title" style={{ margin: "auto", padding: "20px", textAlign: "center"}}>
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