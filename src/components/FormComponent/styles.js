import styled from 'styled-components';
import BackgroundImage from './../../assets/background-image.jpg'

export const Container = styled.div`
    background: url(${BackgroundImage}) no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: auto;
    height: 80vh;
    align-self: center;

    h1{
        color: #ffffff;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 40px;
        align-self: center;
    }

    span{
        color: #d00000;
        font-size: 12px;
        text-align: start;
        margin-left: 10px;
    }

    @media screen and (max-width: 767px){
        align-items: center;

        h1{
            font-size: 30px;
        }
    }
`

export const Input = styled.input`
    width: 60vw;
    padding: 12px;
    margin: 10px 0px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #edf6f9;
    font-family: 'Montserrat', sans-serif;
    :focus{
        outline: 1px solid #48cae4;
    }

    @media screen and (min-width: 768px){
        max-width: 40vw;
    }
`

export const Button = styled.button`
    width: 140px;
    height: 40px;
    margin-top: 20px;
    border: none;
    border-radius: 15px;
    background-color: #0077b6;
    color: #e5e5e5;
    font-weight: bold;
    align-self: center;
    cursor: pointer;
    :hover{
        background-color: #023e8a;
    }
`
