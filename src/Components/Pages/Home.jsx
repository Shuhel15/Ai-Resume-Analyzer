import React from "react";
import Features from "./Features";
import { Reviews } from "../UI/review";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Use from "../UI/Use";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <h1 className="hero-text">
          Analyze Your Resume with AI and Get Instant <span>Feedback</span>
        </h1>
        <p>
          Upload or paste your resume and let our AI analyze it instantly. Get
          smart suggestions to improve your resume, optimize keywords, and
          increase your chances of getting hired.
        </p>
        <NavLink to="/analyzer">
        <button className="btn">Analyze Now <FaArrowRightLong /></button>
        </NavLink>

        <div className="rating-section">
          <div className="stat">
            <h2>98%</h2>
            <p>Success Rate</p>
          </div>

          <div className="stat">
            <h2>50k+</h2>
            <p>Active Users</p>
          </div>

          <div className="stat">
            <h2>200+</h2>
            <p>Companies</p>
          </div>

          <div className="stat">
            <h2>4.9</h2>
          </div>
        </div>
      </div>
        <Features/>
        <Use/>
        <Reviews/>

    
    </>
  );
};

export default Home;
