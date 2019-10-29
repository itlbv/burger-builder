import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {

    state = {
        showSidedrawer: false
    };

    sidedrawerClosedHandler = () => {
        this.setState({showSidedrawer: false})
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return ({showSidedrawer: !prevState.showSidedrawer})
        })
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <Sidedrawer openState={this.state.showSidedrawer} closed={this.sidedrawerClosedHandler}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}

export default Layout;