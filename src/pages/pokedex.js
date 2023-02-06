import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ImageHolder from "../components/ImageHolder";
import MusicButton from "../components/MusicButton";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Heart from "../assets/images/pikachu-heart.gif";
import GymLeaderBattle from "../assets/music/gym-leader-battle.mp3";
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

const PokedexBody = styled.div`    
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 50px 5% 0 5%;

    h1 {
        color: white;
    }
`;



let offset = 0;
const Pokedex = () => { 

    let [searchparam, setSearchParam] = useState(0);
    offset = searchparam * 20;

    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
    const { data , loading, err } =  useFetch(url);

    return (
         <Body>
         <Navbar />
         <MusicButton audio={GymLeaderBattle} name={"Gym Battle"}/>
         <Title>Retro Pokedex</Title>
         <CenterBody>
         <ImageHolder src={Heart} width={"400px"} height={"400px"} alt="Pokemon Intro"></ImageHolder>
         </CenterBody>
         {!loading && data && <PokedexBody>
            {data?.results.map((pokemon, key) => 
            <Card key={key} url={pokemon.url}  name={pokemon.name}  />
         )}
         </PokedexBody>}
         <Pagination func={setSearchParam} />
        </Body>
        );
 }

export default Pokedex;