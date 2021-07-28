import React from 'react'
import { CardUser, CardBtnFavorite, StyledLink, BtnContainer, CardContainer, CardPhoto, CardName, CardStreet, CardCity, CardCover, CardBtn } from './CardElements'
import image from '../images/user.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromFavorite } from '../store/actions'

const FavoriteCard = (data) => {
    const favorites = useSelector((state) => state.favorite.data)
    const dispatch = useDispatch()

    function onRemove(favorites){
        dispatch(removeFromFavorite(favorites))
    }
    
    return (
        <>
        <CardContainer>
            <CardUser>
                <CardCover />
                <CardPhoto src={image} />
                <CardName>{data.fav.name}</CardName>
                <CardStreet>{data.fav.address.street}</CardStreet>
                <CardCity>{data.fav.address.city}</CardCity>
                <BtnContainer>
                <CardBtn><StyledLink to={`data/${data.fav.id}`}>Detail</StyledLink></CardBtn>
                <CardBtnFavorite onClick={() => onRemove(data.fav.id)}>Remove</CardBtnFavorite>
                </BtnContainer>
            </CardUser>
        </CardContainer>
        </>
    )
}

export default FavoriteCard
