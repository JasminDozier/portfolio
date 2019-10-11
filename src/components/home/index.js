import React, { useState, useEffect } from "react";
import "./style.css";

const Home = () => {
  const [quote, setQuote] = useState({ content: "", author: "" });

  useEffect(() => {
    const getQuote = async () => {
      const response = await fetch("https://api.quotable.io/random");
      const myJson = await response.json();
      setQuote(myJson);
    };

    getQuote();
  }, []);
  return (
    <>
      <div className="jd-home">
        <div className="columns is-centered">
          <div className="column is-4 ">
            <figure className="image is-48by48">
              <img
                src="shahadat-shemul-O2MdroNurVw-unsplash.jpg"
                className="jd-home-img"
                alt="code"
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="columns is-centered has-text-centered jd-quote">
        <div className="column is-6 quote-container">
          <p className="title content">"{quote.content}"</p>
          <p className="subtitle author">-{quote.author}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
