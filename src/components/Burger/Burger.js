import React from 'react';
import classes from './Burger.module.css'
import Ingredient from "./Ingredient/Ingredient";

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igName => {
            return [...Array(props.ingredients[igName])]
                .map((_, i) => {
                    return <Ingredient type={igName} key={igName + i}/>
                })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please, start adding ingredients</p>
    }

    return (
        <div className={classes.burger}>
            <Ingredient type={'bread-top'}/>
            {transformedIngredients}
            <Ingredient type={'bread-bottom'}/>
        </div>
    );
};

export default burger;