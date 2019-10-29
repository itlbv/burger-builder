import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem'

const navItems = () => (
    <ul className={classes.NavItems}>
        <NavItem link='/' active={false}>Burger Builder
        </NavItem>
        <NavItem link='/' active={false}>Checkout
        </NavItem>
    </ul>
);

export default navItems;