import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
    salad: 0.4,
    cheese: 0.4,
    meat: 0.4,
    bacon: 0.4
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        price: 4,
        purchasable: false,
        showOrder: false
    };

    showOrder = () => {
        this.setState({showOrder: true})
    };

    hideOrder = () => (
        this.setState({showOrder: false})
    );

    continuePurchase = () => (
        alert('Continue!')
    );

    updatePurchaseState = (ingredients) => {
        const ingCount = Object.keys({...ingredients})
            .map(ingKey => ingredients[ingKey])
            .reduce((sum, el) => (sum += el), 0);
        this.setState({purchasable: ingCount > 0});
    };

    addIngredientHandler = type => {
        const updatedIngredients = this.state.ingredients;
        updatedIngredients[type]++;

        const priceAddition = INGREDIENTS_PRICE[type];
        const newPrice = this.state.price + priceAddition;
        this.setState({ingredients: updatedIngredients, price: newPrice});
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = type => {
        const updatedIngredients = this.state.ingredients;
        if (updatedIngredients[type] > 0) {
            updatedIngredients[type]--;
        }

        const priceAddition = INGREDIENTS_PRICE[type];
        const newPrice = this.state.price - priceAddition;
        this.setState({ingredients: updatedIngredients, price: newPrice});
        this.updatePurchaseState(updatedIngredients);
    };

    render() {
        return (
            <Aux>
                <Modal showOrder={this.state.showOrder}
                       hideOrder={this.hideOrder}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  hideOrder={this.hideOrder}
                                  continueOrder={this.continuePurchase}
                                  price={this.state.price}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <p>{this.state.price.toFixed(2)}</p>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    showOrder={this.showOrder}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;