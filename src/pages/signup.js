import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";
import ImageHolder from "../components/ImageHolder";
import Heart from "../assets/images/pikachu-heart.gif";

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
`;

const LeftBody = styled.div`
display: flex;
width: 75%;
`

const RightBody = styled.div`
display: flex;
width 25%;
`

const Signup = () => { 
    
    
    return (
    <Body>
     <Navbar />
     <Title>SignUp</Title>
     <CenterBody>
        <LeftBody>
            <ImageHolder src={Heart} width={"1000px"} height={"800px"} alt="Pokemon Intro"></ImageHolder>
        </LeftBody>
        <RightBody>
            <SignUpForm />
        </RightBody>
     </CenterBody>
    </Body>
    );
}

export default Signup;