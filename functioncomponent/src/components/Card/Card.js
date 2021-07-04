import React from 'react'
import { CardUser, CardContainer, CardPhoto, CardName, CardStreet, CardCity, CardCover } from './CardElements'
import image from '../images/user.jpg'

const Card = (data) => {
    return (
        <>
        <CardContainer>
            <CardUser>
                <CardCover />
                <CardPhoto src={image} />
                <CardName>{data.users.name}</CardName>
                <CardStreet>{data.users.address.street}</CardStreet>
                <CardCity>{data.users.address.city}</CardCity>
            </CardUser>
        </CardContainer>
        </>
    )
}

export default Card
