import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'


const NavigationItems = () => (
<ul className= {classes.NavigationItems}>
    <NavigationItem link='/' active> <strong>Burger Builder</strong> </NavigationItem>  
    <NavigationItem link='/'> <strong>Check Out</strong> </NavigationItem>  
</ul>
);

export default NavigationItems;