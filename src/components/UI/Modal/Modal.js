import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => (
    <Aux>
        <Backdrop showOrder={props.showOrder}
                  hideOrder={props.hideOrder}/>
        <div className={classes.Modal}
             style={{
                 transform: props.showOrder ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.showOrder ? '1' : '0'
             }}
        >
            {props.children}
        </div>
    </Aux>
);

export default modal;