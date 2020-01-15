import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";
const controls = [
  {
    label: "Sauce",
    type: "sauce"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Meat",
    type: "meat"
  },
  {
    label: "Chicken",
    type: "chicken"
  },
  {
    label: "BBQ",
    type: "bbq"
  }
];
const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p className={classes.Price}>
        Total Price : <strong>{props.totalPrice.toFixed(2)}$</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          more={() => props.ingredientsAdded(ctrl.type)}
          less={() => props.ingredientsRemoved(ctrl.type)}
          disable={props.disabledIngredients[ctrl.type]}
          ingredientPrice={props.price[ctrl.type]}
          ingredientCount={props.ingredients[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW!
      </button>
      <button className={classes.Reset} onClick={props.reset}></button>
    </div>
  );
};

export default BuildControls;
