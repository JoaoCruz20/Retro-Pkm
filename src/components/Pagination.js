import React from "react";
import styled from "styled-components";
import '../assets/fonts/font-Pkmn.css';

const Container = styled.div`
display:flex;
justify-content:center;
margin: 2.5% 0 0 0%;

li{
    list-style: none;
}

span{
    padding: 0 5px 0 5px;
}

button {
    padding: 15px;
    margin: 20px;
    border: 2px solid #c7a008ff;
    font-size: 18px;
    font-family: "Pkmn", Times, serif;
    background-color: black;
    color: white;
}

button:hover {
    background-color: #c7a008ff
}

button:active {
    background-color: #c7a008ff;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
`;

let offset
let initialUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
let counter = 0
const Pagination = (props) => { 
    counter = props?.init;

    // pagination bug, it is reseting to the center of the page even when it loads new info
    // Trick here was I props a useState into the child, but could've been a function
    // offset calculations are page number multiplied by 20, ex: 1*20 = 20, 2*20=40, 3*20

    function NextPage(value) {
        if(value >= 0){
            counter = value;
            props?.func(counter)
        }
    }

    return (    
     <Container>
        <li>
            <button aria-label="Previous" onClick={() => NextPage(counter - 1)}><span>&laquo;</span>Previous</button>
        </li>
            <button aria-label="Next" onClick={() => NextPage(counter + 1)}>{counter + 1}</button>
            <button aria-label="Next" onClick={() => NextPage(counter + 2)}>{counter + 2}</button>
            <button aria-label="Next" onClick={() => NextPage(counter + 3)}>{counter + 3}</button>
        <li class="page-item">
            <button aria-label="Next" onClick={() => NextPage(counter + 1)}>Next
            <span>&raquo;</span></button>
        </li>
    </Container>    
    );
  }
  
  export default Pagination;