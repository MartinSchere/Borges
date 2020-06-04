import React, { Component } from "react";
class Intro extends Component {
  state = {};
  render() {
    return (
      <section className="text-gray-700 body-font">
        <div className="mx-auto wrap">
          <div className="container px-5 py-12 mx-auto flex flex-wrap">
            <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
              Pitchford Kickstart
            </h2>
            <div className="md:w-3/5 md:pl-6">
              <p className="leading-relaxed text-base">
                Taxidermy bushwick celiac master cleanse microdosing seitan.
                Fashion axe four dollar toast truffaut, direct trade kombucha
                brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
                drinking vinegar tacos.
              </p>
            </div>
          </div>
          <hr className="separator" />
        </div>
      </section>
    );
  }
}

export default Intro;
