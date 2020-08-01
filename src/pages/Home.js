import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Living"
          subtitle="Deluxe Rooms Strating at #5000"
        >
          <button className="btn-primary">
            <Link to="/rooms" className="btn-primary">
              Our Rooms
            </Link>
          </button>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default Home;
