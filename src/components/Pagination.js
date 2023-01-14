import React from "react";
import styled from "styled-components";
import '../assets/fonts/font-Pkmn.css';
import useFetch from "../backend/useFetch";

const Container = styled.ul`
display:flex;
justify-content:center;
margin: 2.5% 0 0 5%;

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
let url
let nextpage
let initialUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`

const Pagination = (props) => {
    url = props.url
    offset = props.offset

    function NextPage(url) {
        const { data , loading, err } =  useFetch(url);
        nextpage = data?.next 
        console.log(nextpage)
    }

    return (    
     <Container>
        <li>
            <button aria-label="Previous" onClick={NextPage()}><span>&laquo;</span>Previous</button>
        </li>
            <button aria-label="Next" onClick={NextPage()}>1</button>
            <button aria-label="Next" onClick={NextPage()}>2</button>
            <button aria-label="Next" onClick={NextPage()}>3</button>
        <li class="page-item">
            <button aria-label="Next" onClick={NextPage(props.url)}>Next
            <span>&raquo;</span></button>
        </li>
    </Container>    
    );
  }
  
  export default Pagination;