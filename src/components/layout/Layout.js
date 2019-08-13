import React, { Component } from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Aux1'
import Toolbar from '../Navigation/Toolbar/Toolbar';

import Side from '../Navigation/Side/Side'

class Layout extends Component {

    state = {
        ShowSide: true
    }

    SideCloser = () => {
        this.setState({ ShowSide: false });
    }

    sideDrawerToggle = () => {
        this.setState((preState) => {
            return { ShowSide: !this.state.ShowSide };
        })

    }


    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggle} />
                <Side
                    open={this.state.ShowSide}
                    closed={this.SideCloser} />

                <main className={classes.content}>
                    {this.props.chldren}
                </main>

            </Aux>
        )

    }

}



export default Layout;