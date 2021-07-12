import React, { useState, useEffect } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { SunspotLoader } from 'react-awesome-loaders'

const DataDetail = () => {
    const [person, setPerson] = useState(null)
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    // const { url } = useRouteMatch()
    // const route = useRouteMatch()
    // console.log(route);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resp => resp.json())
        .then(data => {
            setPerson(data)
        })
        setLoading(true)
    }, [id])

    if (person === null) {
        return <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh' 
            }}>

        <SunspotLoader gradientColors={["#6366F1", "#E0E7FF"]} shadowColor={"#3730A3"} />
    
    </div>
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh' 
            }}>
                
            <h1>Hi I'm {person.name} and my user id is - {id}</h1>
        </div>
    )
}

export default DataDetail
