import React from 'react';

import classes from './Burrito.css'
import Burritoingredients from './Burritoingredients/Burritoingredients'


const burrito = (props) => {
    let tansformedIngredients = Object.keys(props.ingredient)
    .map(igKey => {
        return [...Array(props.ingredient[igKey])]
        .map((_, i) =>{
          return  <Burritoingredients key={igKey + i} type={igKey}/>
        });

    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, [ ])
    if (tansformedIngredients.length === 0){
        tansformedIngredients = <p>Please stat adding ingredients.</p>

    }
    console.log(tansformedIngredients)
    return (
        <div className={classes.Burger}>

            <Burritoingredients type="bread-top" />
            {tansformedIngredients}
            <Burritoingredients type="bread-bottom" />
           

        </div>
    )
}

export default burrito;