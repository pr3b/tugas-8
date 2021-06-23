import React from 'react'
import { CardUser, CardPhoto, CardName, CardAge, CardCountry } from './CardElements'


const Card = () => {
    return (
        <>
         <CardUser>
             <CardPhoto></CardPhoto>
             <CardName></CardName>
             <CardAge></CardAge>
             <CardCountry></CardCountry>
        </CardUser>
        </>
    )
}

export default Card
