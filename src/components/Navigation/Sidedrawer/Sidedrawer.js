import React from 'react'
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';
import classes from './Sidedrawer.module.css';

const sidedrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Closed];

    if (props.openState) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Aux>
            <Backdrop showOrder={props.openState}
                      hideOrder={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sidedrawer;