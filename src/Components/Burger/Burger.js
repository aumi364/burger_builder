import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "../../Components/Burger/BurgerIngredient/BurgerIngredient";
const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey =>
      [...Array(props.ingredients[igKey])].map((_, index) => (
        <BurgerIngredient key={igKey + index} type={igKey} />
      ))
    )
    .reduce((arr, elm) => arr.concat(elm), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
