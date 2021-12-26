import React, { Fragment } from "react";
import TopBannerSlider from "./../TopBannerSlider";
import WhyStudyinMalysia from "./../WhyStudyinMalysia";
import BestProgams from "./../BestProgams";
import HowToStudy from "./../HowToStudy";
import StudyCost from "./../StudyCost";
import LiveCost from "./../LiveCost";
import OurServices from "./../OurServices";
import WhyChoseUs from "./../WhyChoseUs";

const Home = () => {
  return(
  <div>
    <TopBannerSlider />
    <WhyStudyinMalysia />
    <BestProgams />
    <HowToStudy />
    <StudyCost />
    <LiveCost />
    <OurServices />
    <WhyChoseUs />
  </div>
  )
};

export default Home;
