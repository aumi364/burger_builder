import React from "react";
import Aux from "../../../Hoc/Auxilary";
import Button from "../../Ui/Button/Button";
import classes from "./OrderSummery.css";
const OrderSummery = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p> A delicious burger with following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p className={classes.TotalPrice} style={{ textAlign: "center" }}>
        <strong>Price : {props.totalPrice}$</strong>
      </p>
      <div className={classes.Checkout}>
        <p>
          <strong>Continue to checkout ?</strong>
        </p>
        <div>
          <Button btnType="Success" clicked={props.purchaseContinue}>
            Continue
          </Button>
          <Button btnType="Danger" clicked={props.purchaseCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </Aux>
  );
};

export default OrderSummery;
