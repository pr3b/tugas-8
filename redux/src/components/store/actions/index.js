import { actionFavorite } from '../reducers'

// // action creator
// export function changeName(name){
//     return {
//         type: 'CHANGE_NAME',
//         payload: name
//     }
// }

// export function incrementAge(){
//     return {
//         type: 'INCREMENT_AGE'
//     }
// }

// export function decrementAge(){
//     return {
//         type: 'DECREMENT_AGE'
//     }
// }

export const addToFavorite = (favorite) => {
    return {
        type: actionFavorite.ADD_FAVORITE,
        data: favorite
    }
}

export const removeFromFavorite = (favorite_id) => {
    console.log('action', favorite_id);
    return {
        type: actionFavorite.REMOVE_FAVORITE,
        data: favorite_id
    }
}

export const clearFavorite = (favorite) => {
    return {
        type: actionFavorite.CLEAR_FAVORITE,
        data: favorite
    }
}