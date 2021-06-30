import styled from "styled-components";
import image from '../images/pattern.jpg';

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
`

export const CardUser = styled.div`
    
    width: 200px;
    height: 300px;
    border: 2px solid;
    border-color: #402218;
    border-radius: 10px;
    margin: 5px;
    overflow: hidden;
    box-shadow: 10px 10px 27px 2px rgba(0,0,0,0.27);
    -webkit-box-shadow: 10px 10px 27px 2px rgba(0,0,0,0.27);
    -moz-box-shadow: 10px 10px 27px 2px rgba(0,0,0,0.27);
    text-align: center;
`

export const CardPhoto = styled.img`
    width: 60%;
    margin: -4rem auto 0.3rem auto;
    align-items: center;
    border-radius: 50%;
    border: 5px solid;
    border-color: #fff;
`

export const CardCover = styled.div`
    height: 100px;
    width: 200px;
    background: url(${image});
    background-size: cover;
    z-index: -99;
`

export const CardName = styled.h1`
    margin: 0.1rem auto -0.2rem auto;
    font-weight: 700;
    font-size: 1.1rem;
    color: #010606;
`

export const CardStreet = styled.p`
    margin: 10px auto 5px auto;
    font-weight: 300;
    font-size: 0.8rem;
    color: #402218;
`

export const CardCity = styled.h2`
    margin: 10px auto auto auto;
    font-weight: 400;
    font-size: 1rem;
    color: #010606;
`