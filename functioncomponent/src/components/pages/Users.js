import useFetch from '../services/hooks/useFetch'
// import { CardUser, CardContainer, CardPhoto, CardName, CardStreet, CardCity, CardCover } from '../Card/CardElements'
import Card from '../Card/Card';

const Users = () => {
    
    const { data } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
        );
    
    return (
        <>
            <h1>User page raw</h1>
            <Card />
        </>
    )
}

export default Users
