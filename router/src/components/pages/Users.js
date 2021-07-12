import useFetch from '../services/hooks/useFetch'
import Card from '../Card/Card';
// import * as ReactBootStrap from 'react-bootstrap'

const Users = () => {
    
    const { data } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
        );
    
    return (
        <>
            {data.map((users, index) => {
                return <Card key={index} users={users} />
            })}
            {/* <ReactBootStrap.Spinner animation="border" /> */}
        </>
    )
}

export default Users
