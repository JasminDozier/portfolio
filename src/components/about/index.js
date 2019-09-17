import React from "react";

const About = () => {
  return (
    <div className="columns is-centered">
      <div className="column is-three-fifths">
        <div className="tile is-vertical">
          <div className="tile">
            <div className="tile is-child">
              <article className="tile is-child notification">
                <p className="title">Hi, My name is Jasmin!</p>
                <figure className="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png" />
                </figure>
              </article>
            </div>
            <div className="tile is-parent is-5">
              <article className="tile is-child notification ">
                <div className="content">
                  <p className="title">Tall tile</p>
                  <p className="subtitle">
                    With even more content With even more content Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Etiam semper
                    diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
                    volutpat tellus diam, consequat gravida libero rhoncus ut.
                    Morbi maximus, leo sit amet vehicula eleifend, nunc dui
                    porta orci, quis semper odio felis ut quam. Suspendisse
                    varius ligula in molestie lacinia. Maecenas varius eget
                    ligula a sagittis. Pellentesque interdum, nisl nec interdum
                    maximus, augue diam porttitor lorem, et sollicitudin felis
                    neque sit amet erat. Maecenas imperdiet felis nisi,
                    fringilla luctus felis hendrerit sit amet. Aenean vitae
                    gravida diam, finibus dignissim turpis. Sed eget varius
                    ligula, at volutpat tortor. Integer sollicitudin, tortor a
                    mattis commodo, velit urna rhoncus erat, vitae congue lectus
                    dolor consequat libero. Donec leo ligula, maximus et
                    pellentesque sed, gravida a metus. Cras ullamcorper a nunc
                    ac porta. Aliquam ut aliquet lacus, quis faucibus libero.
                    Quisque non semper leo.
                  </p>
                  <div className="content"></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
