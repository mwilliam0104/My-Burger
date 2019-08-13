import React from 'react';

import classes from './Drawer.css'



const drawer= (props) => (
<div className={classes.Drawer} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
</div>
);

export default drawer;  