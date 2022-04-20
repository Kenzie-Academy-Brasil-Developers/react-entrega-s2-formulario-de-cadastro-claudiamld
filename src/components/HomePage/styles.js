import styled from 'styled-components';
import BackgroundImage from './../../assets/background-image.jpg'

export const Background = styled.div`
    background: url(${BackgroundImage}) no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        color: #ffffff;
        font-family: 'Montserrat', sans-serif;
    }

    @media screen and (max-width: 767px){
        h1{
            margin-right: 20px;
            margin-left: 20px;
        }
    }
`