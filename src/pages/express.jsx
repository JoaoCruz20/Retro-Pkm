import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import useFetch from "../backend/useFetch";

const Body = styled.div`
    background-color: black;
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

const Express = () => {    
    
    const { data , loading, err } =  useFetch("http://localhost:8000/");
    return (
    <Body>
     <Navbar />
     <Title>About Me Page</Title>
     {!loading && data &&<CenterBody>
        {data}
     </CenterBody>}
    </Body>
    );
}

export default Express;