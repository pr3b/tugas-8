import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                {this.props.todo} - {" "}
                <button onClick={() => this.props.onDetail(this.props.todo)}>detail</button>
            </div>
        )
    }
}
