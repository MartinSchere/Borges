import React, { Component } from "react";
class ProductCard extends Component {
  state = {
    isHovering: false,
  };
  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState = (state) => {
    return {
      isHovering: !state.isHovering,
    };
  };
  render() {
    return (
      <div
        className="lg:w-1/4 md:w-1/2 p-4 w-full product"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <a className="block relative h-48 rounded overflow-hidden p-image">
          {this.state.isHovering && <p className="image-helper">Ver más</p>}
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/420x260"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {this.props.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {this.props.title}
          </h2>
        </div>
      </div>
    );
  }
}

export default ProductCard;
