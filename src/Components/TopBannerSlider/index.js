import React from 'react'
import './style.css'
import img from "./../../assets/images/banner1-bg.jpg";
import img2 from "./../../assets/images/K7A78We.jpg";
import img3 from "./../../assets/images/c8952Iz.jpg";
const TopBannerSlider= ()=> {
    return (
      <section className="section home">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active overlay">
              <img src={img} className="d-block w-100" alt="..." />
              <div className="overlay"></div>
              <div className="home-content">
                <h1 className="title">Study in Malysia</h1>
                <p className="home-description">
                 We are here only to help you achaving your goal. Get all amazing programs list in Malysia that mache your
                  eligibility and aspirations.
                </p>
                <button className="btn btn-start hover-opacity">
                  Find Your Perfect Program !
                </button>
                <button className="btn btn-learn hover-opacity">
                  Learn More ...
                </button>
              </div>
            </div>

            <div className="carousel-item overlay">
              <img src={img2} className="d-block w-100" alt="..." />
              <div className="overlay"></div>

              <div className="home-content">
                <h1 className="title">we are creative agent</h1>
                <p className="home-description">
                 our services and strategy to mak the admission easy and in your hand . just you need to give us some information and 
                 the progarm you want to apply ,and so you can get create more tahnone application and you will chose from them. 
                </p>
                <button className="btn btn-start hover-opacity">
                 Apply Now!
                </button>
                <button className="btn btn-learn hover-opacity">
                  Our Services
                </button>
              </div>
            </div>

            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
              <div className="overlay"></div>

              <div className="home-content">
                <h1 className="title">Univerisities for you</h1>
                <p className="home-description">
                 Here we can helpe you get ease acceptance on one of the best univerisities in malysia as
                  well as if you apply for language courses you will get in best inistituse.
                </p>
                <button className="btn btn-start hover-opacity">
                  Get Started !
                </button>
                <button className="btn btn-learn hover-opacity">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
}
export default TopBannerSlider;
