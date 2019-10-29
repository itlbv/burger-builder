import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = props => (
    <div className={classes.buildControl}>
        <div className={classes.label}>{props.label}</div>
        <button
            className={classes.more}
            onClick={props.added}>More
        </button>
        <button
            className={classes.less}
            onClick={props.removed}>Less
        </button>
    </div>
);

export default buildControl;
