import React, { Component } from "react";
class Contact extends Component {
  state = {};
  render() {
    return (
      <section className="text-gray-700 body-font relative">
        <div className="container mx-auto py-24">
          <h1 className="title-font sm:text-4xl text-3xl mb-2 ml-6 font-bold text-gray-900">
            Contactanos
          </h1>
          <div className="container px-5 py-12 mx-auto flex sm:flex-no-wrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=es&amp;q=%20Av.%20del%20Libertador%206515%20(CP%201428)%20-%20CABA&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                styles="filter: grayscale(1) contrast(1.2) opacity(0.4);"
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                    DIRECCIÓN
                  </h2>
                  <p className="leading-relaxed">
                    Av. del Libertador 6515 (CP 1428) - CABA
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    ventas@borges1885.com.ar
                  </a>
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">
                    TELÉFONO
                  </h2>
                  <p className="leading-relaxed">011 4784-8859</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <input
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                placeholder="Name"
                type="text"
              />
              <input
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                placeholder="Email"
                type="email"
              />
              <textarea
                className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
                placeholder="Message"
              ></textarea>
              <button className="text-white border-0 py-2 px-6  rounded text-lg">
                Button
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
