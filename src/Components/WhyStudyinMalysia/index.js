import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import HeaderSection from "../../assets/BaseComponents/Header-Section";
import "./style.css";
const WhyStudyinMalysia = (props) => {
  const [title, setTitle] = useState("Why In Malysia");
  return (
    <Fragment>
      <section className="venue section" id="venue">
         <HeaderSection title={title} {...props}/>
        <div className="container">
          <div className="row  animate-in-down">
            <div className="p-4 col-md-6 align-self-center ">
              <p className="m-0">Why Do You Study In Malysia</p>
              <h2>Discover the products</h2>
              <p className="my-4 text-justify">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here
              </p>{" "}
              <a href="#" className="btn mb-3 p-2 btn-primary">
                View the gallery
              </a>
            </div>
            <div className="p-0 col-md-6">
              <div
                className="carousel slide"
                data-ride="carousel"
                id="carousel1"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item">
                    {" "}
                    <img
                      className="d-block img-fluid w-100 rounded"
                      src="https://i.imgur.com/K7A78We.jpg"
                      alt="first slide"
                    />
                    <div className="carousel-caption text-dark">
                      <h3>Simura Hotels</h3>
                      <p>Good architecture, services</p>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    {" "}
                    <img
                      className="d-block img-fluid w-100 rounded"
                      src="https://i.imgur.com/K7A78We.jpg"
                      data-holder-rendered="true"
                    />
                    <div className="carousel-caption text-dark">
                      <h3>Hauzkhas Village Bar</h3>
                      <p>Enjoy our long drink</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    {" "}
                    <img
                      className="d-block img-fluid w-100 rounded"
                      src="https://i.imgur.com/K7A78We.jpg"
                      data-holder-rendered="true"
                    />
                    <div className="carousel-caption text-dark">
                      <h3>Cooking Hemorto</h3>
                      <p>Tastes it better</p>
                    </div>
                  </div>
                </div>{" "}
                <a
                  className="carousel-control-prev"
                  href="#carousel1"
                  role="button"
                  data-slide="prev"
                >
                  {" "}
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>{" "}
                  <span className="sr-only">Previous</span>{" "}
                </a>{" "}
                <a
                  className="carousel-control-next"
                  href="#carousel1"
                  role="button"
                  data-slide="next"
                >
                  {" "}
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>{" "}
                  <span className="sr-only">Next</span>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WhyStudyinMalysia;
