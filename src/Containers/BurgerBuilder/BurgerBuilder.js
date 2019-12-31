import React, { Component } from "react";
import AUX from "../../Hoc/Auxilary";
import Burger from "../../Components/Burger/Burger";
import BurgerIngredient from "../../Components/Burger/BurgerIngredient/BurgerIngredient";
export default class BurgerBuilder extends Component {
  render() {
    return (
      <AUX>
        <Burger />
        <div>build Control</div>
      </AUX>
    );
  }
}
