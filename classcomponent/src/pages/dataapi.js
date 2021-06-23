import React, { Component } from 'react'
import axios from 'axios'
import Card from '../components/Card/Card'


export default class dataapi extends Component {

    constructor() {
        super()
    
        this.state = {
             title: 'Data api 3rd party',
             nameList: []
        }
    }

    componentDidMount(){
        // console.log('did mount');
        // fetch('https://randomuser.me/api/')
        // .then((resp) => resp.json())
        // .then((data) => {
        //     this.setState({
        //         users: data
        //     })
        // })
        // .catch(err => {
        //     console.log(err);
        // })

        axios.get('https://randomuser.me/api/')
        .then(res => {
            const firstName = res.data.results[0].name.first;
            const lastName = res.data.results[0].name.last;
            const name = firstName + ' ' + lastName;
            const age = res.data.results[0].dob.age;
            const country = res.data.results[0].location.country;
            const profilePhoto = res.data.results[0].picture.medium;
            const users = [name, age, country, profilePhoto];
            this.setState({users});
            // console.log(names.results[0].name.first);
            // console.log(name.results[0].dob.age);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    componentDidUpdate(){
        console.log('did update');
        
    }

    // handleOnChange(event){
    //     this.setState({
    //         todoInput: event.target.value
    //     })
    // }
    
    // handleSubmit(){
    //     // const newTodo = [...this.state.todos, this.state.todoInput] //spread operator
    //     this.setState({
    //         // todos: newTodo,
    //         // todos: this.state.todos.concat(this.state.todoInput),
    //         // todoInput: ''
    //     })
    // }

    // handleDetail(todo){
    //     console.log(todo);
    // }

    render() {
        return (
            <div>
                <pre>
                <h1>{this.state.title}</h1> 
                {/* <Card> */}
                {JSON.stringify(this.state.users, null, 2)}
                {/* </Card> */}
                </pre>
            </div>
        )
    }
}
