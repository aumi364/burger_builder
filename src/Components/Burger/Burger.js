import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "../../Components/Burger/BurgerIngredient/BurgerIngredient";
const Burger = props => {
  const tranformedIngredients = Object.keys(props.ingredients).map(igKey =>
    [...Array(props.ingredients[igKey])].map((_, index) => (
      <BurgerIngredient key={igKey + index} type={igKey} />
    ))
  );
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {tranformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
