import React from 'react';

import burritologo from '../../assest/images/burritoLogo.png'
import classes from './Logo.css'


const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burritologo} alt = "My Burrito"/>
    </div>

);

export default logo;