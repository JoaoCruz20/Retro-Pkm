import React from "react";
import styled from "styled-components";
import '../assets/fonts/font-Pkmn.css';


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
            <li><a href="http://localhost:3000/Retro-Pkm">Home</a></li>
            <li><a href="http://localhost:3000/Retro-Pkm/pokedex">Pokedex</a></li>
            <li><a href="http://localhost:3000/Retro-Pkm/games">Games</a></li>
            <li><a href="http://localhost:3000/Retro-Pkm/about-me">About Me</a></li>
            <li><a href="http://localhost:3000/Retro-Pkm/Signup">SignUp</a></li>
            {props.isLogin ? "" :
            <li><a style={{color: "white"}}href="http://localhost:3000/Retro-Pkm/login">Login</a></li>            
            }
        </Container>
    );
  }
  
  export default Navbar;