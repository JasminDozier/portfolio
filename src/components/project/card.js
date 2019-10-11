import React from "react";

const Card = props => {
  return (
    <div className="column is-one-quarter is-offeset-one-quarter ">
      <div className="card jd-card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              className="jd-image"
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder"
            />
          </figure>
        </div>
        <div className="card-content has-text-centered">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </div>
          <div>
            <a href="/">Github</a>
          </div>
          <div>
            <a href="/">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
