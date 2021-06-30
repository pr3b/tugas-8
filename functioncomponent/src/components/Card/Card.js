import React from 'react'
import { CardUser, CardContainer, CardPhoto, CardName, CardStreet, CardCity, CardCover } from './CardElements'
import useFetch from '../services/hooks/useFetch';

const Card = () => {

    const { data } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
        );

    return (
        <>
            <h1>Card page</h1>
            {data.map((users) => {
                return <p key={users}>{users.name}</p>
            })}

            {/* uncomment = invalid hook call */}
            {/* <CardUser>
                <CardName>testname</CardName>
            </CardUser> */}
        </>
    )
}

export default Card
