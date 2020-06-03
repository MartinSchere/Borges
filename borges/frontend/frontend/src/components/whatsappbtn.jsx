import React, { Component } from "react";
class WhatsappBtn extends Component {
  render() {
    return (
      <div className="whatsappbtn">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <a
          href="https://api.whatsapp.com/send?phone=5491141496476&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
          class="float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </div>
    );
  }
}

export default WhatsappBtn;
