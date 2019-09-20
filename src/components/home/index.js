import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div className="jd-home">
      <div className="columns is-centered">
        <div className="column is-4 ">
          <figure className="image is-48by48">
            <img
              src="shahadat-shemul-O2MdroNurVw-unsplash.jpg"
              className="jd-home-img"
            />
          </figure>
        </div>
      </div>
      <div className="columns">
        <div className="column has-text-centered is-4 is-offset-4">
          <p>
            “The game is gonna test you, never fold. Stay ten toes down. It’s
            not on you, it’s in you and what’s in you, they cannot take away.”
            -Nipsey Hussel
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
