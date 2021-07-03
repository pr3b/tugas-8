import React, { Component } from 'react'
import { CardUser, CardPhoto, CardName, CardStreet, CardCity, CardCover } from './CardElements'
import image from "../../images/user.jpg";

export default class Card extends Component {
    render() {
        return (
            <>
            <CardUser>
                    <CardCover />
                    <CardPhoto img src={image} />
                    <CardName>{this.props.person.name}</CardName>
                    <CardStreet>{this.props.person.address.street}</CardStreet>
                    <CardCity>{this.props.person.address.city}</CardCity>
            </CardUser>
            </>
            
        )
    }
}
