import React from "react";
import styled from "styled-components";
import Login from "./Login.js"
import '../assets/fonts/font-Pkmn.css';

const Body = styled.div`
width:100%
`;

const Container = styled.ul`
height: 50px;
margin: 0% 1% 1% 1%;
border-radius: 15px;
list-style-type: none;
overflow: hidden;


li {
    display: inline-flex;
    justify-content: flex-start;
}
a {    
     color: #acacacff;
     padding: 10px 10px 10px 10px;
     font-size: 18px;
     font-family: "Pkmn", Times, serif;
  }
`;




const Navbar = () => {
    return (
    <Body>
        <Container>
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="http://localhost:3000/pokedex">Pokedex</a></li>
            <li><a href="https://www.w3schools.com">Games</a></li>
            <li><a href="https://www.w3schools.com">About Me</a></li>
            <Login></Login>
        </Container>
    </Body>
    );
  }
  
  export default Navbar;