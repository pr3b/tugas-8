import React from 'react'
import { useSelector } from 'react-redux';
import { CardBtnClear } from '../Card/CardElements'
import { useDispatch } from 'react-redux';
import { clearFavorite } from '../store/actions'
import FavoriteCard from '../Card/FavoriteCard';


const Favorite = (data) => {
    const favorites = useSelector((state) => state.favorite.data)
    const dispatch = useDispatch()

    function onRemove(favorites){
        dispatch(clearFavorite(favorites))
    }
    return (
        <>
        {favorites.map((liked, id) => {
            return <FavoriteCard key={id} fav={liked} />
        })}
            <CardBtnClear onClick={() => onRemove(favorites)}>Clear</CardBtnClear>
        </>
    )
}

export default Favorite