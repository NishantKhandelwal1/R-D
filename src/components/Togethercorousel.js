import React from 'react';
import CauseImage from '../img/causeimage.jpg';
import { Carousel, CarouselItem } from 'react-bootstrap/lib/';


const Corousel1 = () => {
  return (
    <div className="row h-100">

      <div className="col-md-7 my-auto" style={{ paddingLeft: "150px" }}>
        <div className="header-content mx-auto">
          <h1 style={{ fontSize: "40px", color: "rgb(59, 59, 59)" }} className="mb-5">
            Empowered
                    <br /><span style={{ color: "#18dfbf" }}>50 women entrepreneur</span>
            <br /> in slums of Mumbai.

                    </h1>


          {/* <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
        </div>
      </div>
      <div className="col-md-5 my-auto" style={{ paddingRight: "100px" }}>
        <div className="device-container">
          <div className="img-responsive">
            <img src={CauseImage} className="img-fluid" alt="cause-image" />
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

            <h3 style={{ margin: "auto", padding: "20px", fontSize: "30px" }}>
              Together we have
        </h3>

          </div>

          <Carousel controls={false} nextIcon={""} prevIcon={""}>
            <CarouselItem>
              <Corousel1 />
            </CarouselItem>
            <CarouselItem>
              <Corousel1 />
            </CarouselItem>
            <CarouselItem>
              <Corousel1 />
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