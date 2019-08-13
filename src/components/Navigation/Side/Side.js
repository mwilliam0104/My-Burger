import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Side.css';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux1'


const Side = (props) => {

    let attchClasses = [classes.Side, classes.Close];

    if (props.open){
        attchClasses = [classes.Side, classes.Open];
    }

    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attchClasses.join(' ')}>
        <div className={classes.Logo}>
            <Logo />
        </div>
      

            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    )

}

export default Side;