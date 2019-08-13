import React, {Component} from 'react';

import Aux from '../../hoc/Aux1';
import Burrito from '../../components/Burrito/Burrito';
import BuildControls from '../../components/Burrito/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burrito/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
    salad: 0.6,
    cheese: 0.7,
    meat: 1.3,
    bacon: 1
};

class BurritoBuilder extends Component {
    state = {
        ingredient:{
            salad: 0,
            bacon: 0, 
            cheese: 0,
            meat: 0,

        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }
    updatePurchaseStae (ingredient){
        
        const sum = Object.keys(ingredient)
        .map(igKey => {
            return ingredient[igKey];
        })
        .reduce((sum, el) => {
            return sum + el;


        }, 0);
        this.setState({purchaseable: sum > 0});

    }
    addIngredientHandler = (type) =>{
        const oldcount = this.state.ingredient[type];
        const updatedCount = oldcount + 1;
        const updatedIngredients = {
            ...this.state.ingredient
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredient: updatedIngredients});
        this.updatePurchaseStae(updatedIngredients);

    }

    removeIngredientHandler = (type) =>{
        const oldcount = this.state.ingredient[type];
        if (oldcount <= 0){
            return;
        }
        const updatedCount = oldcount - 1;
        const updatedIngredients = {
            ...this.state.ingredient
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredient: updatedIngredients})

    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchasedCanceledHandler = () =>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () => {
        alert('you continued');
    }



    render () {
        const disabledInfo = {
            ...this.state.ingredient
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (

            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchasedCanceledHandler} >
                    <OrderSummary 
                    ingredient={this.state.ingredient}
                    price={this.state.totalPrice}
                    purchasedChancled={this.purchasedCanceledHandler}
                    purchasedContinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burrito ingredient={this.state.ingredient}/>
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchaseable={this.state.purchaseable}
                ordered={this.purchaseHandler}
                price={this.state.totalPrice}/>
            </Aux>
            

        )
    }
}

export default BurritoBuilder;