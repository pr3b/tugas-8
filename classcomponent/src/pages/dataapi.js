import React, { Component } from 'react'
import { CardUser, CardPhoto, CardName, CardAge, CardCountry, CardCover } from '../components/Card/CardElements'

class dataapi extends Component {

    constructor() {
        super()
        this.state = {
             persons: []
            //  person2: [],
            //  contacts: []
        }
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data[0].name);
        //     this.setState({
        //         persons: data
        //     })
        // })

        fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            // console.log(data.results[0]);
            this.setState({
                persons: data.results[0].name.first,
                age: data.results[0].dob.age,
                country: data.results[0].location.country,
                photo: data.results[0].picture.large
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render() {
        const { persons, age, country, photo } = this.state;
        // const { person2 } = this.state;

        return (
            <>
                <CardUser>
                    <CardCover />
                    <CardPhoto img src={photo} />
                    <CardName>{persons}</CardName>
                    <CardAge>{age}</CardAge>
                    <CardCountry>{country}</CardCountry>
                </CardUser>
            </>
        )
    }
}

export default dataapi