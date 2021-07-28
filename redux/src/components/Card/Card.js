import React from 'react'
import { CardUser, CardBtnFavorite, StyledLink, BtnContainer, CardContainer, CardPhoto, CardName, CardStreet, CardCity, CardCover, CardBtn } from './CardElements'
import image from '../images/user.jpg'
import { addToFavorite } from '../store/actions'
import { useDispatch } from 'react-redux'

const Card = (data) => {
    const dispatch = useDispatch()

    function onSave(user){
        dispatch(addToFavorite(user))
    }
    
    return (
        <>
        <CardContainer>
            <CardUser>
                <CardCover />
                <CardPhoto src={image} />
                <CardName>{data.user.name}</CardName>
                <CardStreet>{data.user.address.street}</CardStreet>
                <CardCity>{data.user.address.city}</CardCity>
                <BtnContainer>
                <CardBtn><StyledLink to={`data/${data.user.id}`}>Detail</StyledLink></CardBtn>
                <CardBtnFavorite onClick={() => onSave(data.user)}>Save</CardBtnFavorite>
                </BtnContainer>
            </CardUser>
        </CardContainer>
        </>
    )
}

export default Card
