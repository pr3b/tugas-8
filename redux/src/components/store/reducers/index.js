const initialState = {
    data: []
}

export const actionFavorite = {
    ADD_FAVORITE: 'ADD_FAVORITE',
    REMOVE_FAVORITE: 'REMOVE_FAVORITE',
    CLEAR_FAVORITE: 'CLEAR_FAVORITE'
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case actionFavorite.ADD_FAVORITE: {
            return {
                ...state,
                data: [...state.data, action.data]
            }
        }
        case actionFavorite.CLEAR_FAVORITE: {
            return {
                ...state,
                data: [...state.data.slice(0, action.data)]
            }
        }
        case actionFavorite.REMOVE_FAVORITE: {
            console.log('reducer', action.data);
            const newFavorite = removeFavoriteById([...state.data], action.data)
            return {
                ...state,
                data: [...newFavorite,]
            }
        }
        default:
            return state;
    }
}

const removeFavoriteById = (favorite, favorite_id) => {
    const index = favorite.map(favorites => favorites.id).indexOf(favorite_id)
    if (index !== -1) {
        favorite.splice(index, 1)
        return favorite
    } else {
        return favorite
    }
}