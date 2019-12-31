import React, { Component } from "react";
import AUX from "../../Hoc/Auxilary";
import Burger from "../../Components/Burger/Burger";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 2,
      salad: 2,
      bacon: 4,
      cheese: 1
    }
  };
  render() {
    return (
      <AUX>
        <Burger ingredients={this.state.ingredients} />
        <div>build Control</div>
      </AUX>
    );
  }
}
