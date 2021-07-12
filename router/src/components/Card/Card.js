import React from 'react'
import { CardUser, StyledLink, BtnContainer, CardContainer, CardPhoto, CardName, CardStreet, CardCity, CardCover, CardBtn } from './CardElements'
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
                <BtnContainer>
                <CardBtn><StyledLink to={`data/${data.users.id}`}>Detail</StyledLink></CardBtn>
                </BtnContainer>
            </CardUser>
        </CardContainer>
        </>
    )
}

export default Card
