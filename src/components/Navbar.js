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

let protocol = window.location.protocol;
let hostname = window.location.hostname;
let pathname = window.location.pathname;
let port = window.location.port

const Navbar = (props) => {

    //if window.location.href has port then remove window.location.port

    //if it doesn't work, we can use const on window.location.href and then use that const to build the path to other routes ${href}/pokedex


    return (    
        <Container>
            <li><a href={`${protocol}//${hostname}:${port}/Retro-Pkm`}>Home</a></li>
            <li><a href={`${protocol}//${hostname}:${port}/Retro-Pkm/pokedex`}>Pokedex</a></li>
            <li><a href={`${protocol}//${hostname}:${port}/Retro-Pkm/games`}>Games</a></li>
            <li><a href={`${protocol}//${hostname}:${port}/Retro-Pkm/about-me`}>About Me</a></li>
            <li><a href={`${protocol}//${hostname}:${port}/Retro-Pkm/signup`}>SignUp</a></li>
            {props.isLogin ? "" :
            <li><a style={{color: "white"}}href={`${protocol}//${hostname}:${port}/Retro-Pkm/login`}>Login</a></li>            
            }
        </Container>
    );
  }
  
  export default Navbar;