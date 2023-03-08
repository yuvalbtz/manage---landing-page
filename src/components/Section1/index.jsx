import React from "react";
import svg from "../../images/illustration-intro.svg";
import './style.css'

function Index() {
  return (
    <section className="padding-block-800">
      <div className="container">
        <div className="even-columns text-align-section1 grid-position-section1">
          <div className="flow">
            <h1 className="fs-primary-heading fw-bold">
              Bring everyone together to build better products.
            </h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="button">Get Started</button>
          </div>
          <div >
           <div className="hero__image">
           <img src={svg} alt="ilustration" />
           </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
