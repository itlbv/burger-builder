import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = props => (
    props.showOrder ? <div className={classes.Backdrop}
                           onClick={props.hideOrder}/>
        : null
);

export default backdrop;