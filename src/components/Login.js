import React from "react";
import styled from "styled-components";
import '../assets/fonts/font-Pkmn.css';

const Body = styled.div`
width:100%
`;

const LoginContainer = styled.div`
a { 
    display:flex;
    flex-direction: row-reverse;
    color: white;
    padding: 10px 10px 10px 10px;
    font-size: 18px;
    font-family: "Pkmn", Times, serif;
 }

`

const Login = () => {
    return (
    <Body>
            <LoginContainer>
                <a href="https://www.w3schools.com">LOGIN</a>
            </LoginContainer>
    </Body>
    );
  }
  
  export default Login;