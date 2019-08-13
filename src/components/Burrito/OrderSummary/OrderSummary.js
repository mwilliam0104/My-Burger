import React, { Component }from 'react';
import Aux from '../../../hoc/Aux1'
import Button from '../../UI/Button/Button';




class OrderSummary extends Component {

    

    redner() {

        const ingredientSummary = Object.keys(this.props.ingredient)
            .map(igKey => {
                return ( <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredient[igKey]}

                         </li>);
                    });
            

         return(
            <Aux>
                <h3>Your Order</h3>
                <p>Following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchasedChancled}>Cancel</Button>
                <Button btnType='Success' clicked={this.props.purchasedContinued}>Continue</Button>


            </Aux >
         );
    }

}

export default OrderSummary;