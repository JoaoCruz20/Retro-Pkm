import React from "react";
import styled from "styled-components";
import '../assets/fonts/font-Pkmn.css';
import { Link } from "react-router-dom";


const Container = styled.ul`
height: 50px;
margin: 0% 1% 1% 1%;
list-style-type: none;
overflow: hidden;

li {
    display: inline-flex;
    justify-content: flex-start;
}
li:last-child {
    border: 2px solid #c7a008ff;
    float:right;
}
a {    
     color: #acacacff;
     padding: 10px 10px 10px 10px;
     font-size: 18px;
     font-family: "Pkmn", Times, serif;
  }
`;

const Navbar = (props) => {

    return (    
        <Container>
            <li><Link to="/Retro-Pkm">Home</Link></li>
            <li><Link to="/pokedex">Pokedex</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/about-me">AboutMe</Link></li>
            <li><Link to="/signup">Singup</Link></li>
            {props.isLogin ? "" :
            <li><Link style={{color: "white"}} to="/login">Login</Link></li>            
            }
        </Container>
    );
  }
  
  export default Navbar;