import styled from "styled-components";
import image from "../../images/pattern.jpg";

export const CardUser = styled.div`
    width: 200px;
    height: 300px;
    border: 2px solid;
    border-color: #402218;
    border-radius: 10px;
    margin: 2rem;
    overflow: hidden;
    box-shadow: 10px 10px 27px 2px rgba(0,0,0,0.27);
    -webkit-box-shadow: 10px 10px 27px 2px rgba(0,0,0,0.27);
    -moz-box-shadow: 10px 10px 27px 2px rgba(0,0,0,0.27);
    text-align: center;
`

export const CardPhoto = styled.img`
    margin: -5rem auto auto auto;
    align-items: center;
    border-radius: 50%;
    border: 5px solid;
    border-color: #fff;
`

export const CardCover = styled.div`
    height: 125px;
    width: 200px;
    background: url(${image});
    background-size: cover;
    z-index: -99;
`

export const CardName = styled.p`
    font-weight: 500;
    font-size: 1.5rem;
    color: #010606;
`

export const CardAge = styled.p`
    font-weight: 300;
    font-size: 1rem;
    color: #402218;
`

export const CardCountry = styled.p`
    font-weight: 400;
    font-size: 1rem;
    color: #010606;
`