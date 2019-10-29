import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'}
];

const buildControls = props => (
    <div className={classes.buildControls}>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}/>
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.showOrder}
        >ORDER NOW
        </button>
    </div>
);

export default buildControls;