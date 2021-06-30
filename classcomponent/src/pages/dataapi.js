import React, { Component } from 'react'
import Card from '../components/Card/Card'

class dataapi extends Component {

    constructor(props) {
        super(props)
        this.state = {
             people: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                people: data
            })
        })
    }
    
    render() {
        return (
            <>
            {this.state.people.map((person, id) => {
                return <Card key={id} person={person} />
            })}
            </>
        )
    }
}

export default dataapi