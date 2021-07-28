import useFetch from '../services/hooks/useFetch'
import Card from '../Card/Card';

const Users = () => {
    
    const { data } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
        );
    
    return (
        <>
            {data.map((users, index) => {
                return <Card key={index} user={users} />
            })}
        </>
    )
}

export default Users