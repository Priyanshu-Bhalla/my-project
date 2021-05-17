import React from "react";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Jumbotron from "../components/Jumbotron";
import Carousel2 from "../components/Carousel2";
import Pricing from "../components/Pricing";
import Footer1 from "../components/Footer1";

const MainPage = () => {
  return (
    <>
      <Carousel />
      <Jumbotron />
      <Carousel2 />
      <Pricing />
      <Footer1 />
    </>
  );
};

export default MainPage;
