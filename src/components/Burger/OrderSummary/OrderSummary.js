import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from './../../UI/Button/Button';

const orderSummary = props => {

    const summary = Object.keys(props.ingredients)
        .map(ingKey => {
            return (
                <li key={ingKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
                </li>
            )
        });

    return (
        <Aux>
            <h3>Your order:</h3>
            <ul>
                {summary}
            </ul>
            <p><strong>Total price is: {props.price.toFixed(2)}</strong></p>
            <Button btnType={'Danger'}
                    clicked={props.hideOrder}>CANCEL</Button>
            <Button btnType={'Success'}
                    clicked={props.continueOrder}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;