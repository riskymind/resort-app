import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <button className="btn-primary">
            <Link to="" className="btn-primary">
              Return Home
            </Link>
          </button>
        </Banner>
      </Hero>
    </>
  );
}
