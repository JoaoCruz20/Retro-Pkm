import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import useLogin from "../backend/login";

const Body = styled.div`
    padding: 30px 0 0 0;
`;
const Title= styled.h1`
    display:flex;
    justify-content:center;
    color: #c7a008;
    font-size: 40px;
    font-family: "Pkmn", Times, serif;
`;
const CenterBody = styled.div`
    display:flex;
    justify-content:center;
`;

const Login = () => { 
    
    useLogin()
    
    return (
    <Body>
     <Navbar isLogin={true} />
     <Title>Login</Title>
     <CenterBody>
        <LoginForm />
     </CenterBody>
    </Body>
    );
}

export default Login;