import React, { Component } from "react";
import AUX from "../../Hoc/Auxilary";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import { sumOfObject } from "../../Helpers/Helper";
import Modal from "../../Components/Ui/Modal/Modal";
import OrderSummery from "../../Components/Burger/OrderSummery/OrderSummery";
const ingredientPrice = {
  cheese: 0.25,
  salad: 0.5,
  meat: 1,
  bacon: 0.75,
  chicken: 1.0,
  bbq: 1.5,
  sauce: 0.25
};
export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      sauce: 0,
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0,
      chicken: 0,
      bbq: 0
    },
    price: {
      sauce: 0,
      cheese: 0,
      meat: 0,
      salad: 0,
      bacon: 0,
      chicken: 0,
      bbq: 0
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false
  };
  updatePurchaseState() {
    const ingredients = { ...this.state.ingredients };
    let sum = sumOfObject(ingredients);
    this.setState({ purchasable: sum > 0 });
  }
  addIngredients = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    let newIngredients = { ...this.state.ingredients };
    newIngredients[type] = updatedCount;
    console.log("newIngredients", newIngredients);
    const updatedPrice = this.state.totalPrice + ingredientPrice[type];
    let newPrice = { ...this.state.price };
    newPrice[type] = newPrice[type] + ingredientPrice[type];
    this.setState(
      {
        ingredients: newIngredients,
        totalPrice: updatedPrice,
        price: newPrice
      },
      () => this.updatePurchaseState()
    );
  };
  removeIngredients = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    let newIngredients = { ...this.state.ingredients };
    newIngredients[type] = updatedCount;
    console.log("newIngredients", newIngredients);
    const updatedPrice = this.state.totalPrice - ingredientPrice[type];
    let newPrice = { ...this.state.price };
    newPrice[type] = newPrice[type] - ingredientPrice[type];
    this.setState(
      {
        ingredients: newIngredients,
        totalPrice: updatedPrice,
        price: newPrice
      },
      () => this.updatePurchaseState()
    );
  };
  reset = () => {
    this.setState({
      ingredients: {
        sauce: 0,
        cheese: 0,
        salad: 0,
        bacon: 0,
        meat: 0,
        chicken: 0,
        bbq: 0
      },
      price: {
        cheese: 0,
        meat: 0,
        salad: 0,
        bacon: 0,
        chicken: 0,
        bbq: 0,
        sauce: 0
      },
      totalPrice: 5,
      purchasable: false,
      purchasing: false
    });
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    alert("continue");
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    console.log(disabledInfo);
    return (
      <AUX>
        <Modal
          show={this.state.purchasing}
          closeBackdrop={this.purchaseCancelHandler}
        >
          <OrderSummery
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            purchaseCancel={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngredients}
          ingredientsRemoved={this.removeIngredients}
          disabledIngredients={disabledInfo}
          price={this.state.price}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ingredients={this.state.ingredients}
          reset={this.reset}
          ordered={this.purchaseHandler}
        />
      </AUX>
    );
  }
}
