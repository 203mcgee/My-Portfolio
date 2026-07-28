import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'; 


const ButtonStyle = styled.div`
margin-top:2rem;
 .button{
    font-size: 2.2rem;
    background-color: ${(props) => props.outline ? 'transparent': '#f6f4d2' };
    padding: .7em rem;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid yellow;
    color: ${(props) => props.outline ? 'yellow' : 'black'};
 }
 @media only screen and (max-width: 768px){
    .button{
        font-size: 1.8rem;
    }
 }`;

const Button = ({btnLink = 'test',btnText = 'Test',outline = false}) => {
  return (
    <div>
    <ButtonStyle $outline={outline}>
        <Link className='button' to={btnLink}>
            {btnText}
        </Link>

    </ButtonStyle>
    </div>
  )
}

export default Button