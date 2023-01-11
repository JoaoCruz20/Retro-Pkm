import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ImageHolder from "../components/ImageHolder";
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

const MusicButton = styled.button`
    height: 50px;
    width: 50px;
    border-radius: 30px;
    margin: 0 0 0 4%;
`;

let page = 0;

const Pokedex = () => { 

     const { data , loading, err } =  useFetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`);
    // console.log(data)
 
       const PlayMusic = () => {
       var audio = new Audio(GymLeaderBattle);
         audio.play();
       }
       
    return (
         <Body>
         <Navbar />
         <MusicButton onClick={PlayMusic} />
         <Title>Retro Pokedex</Title>
         <CenterBody>
         <ImageHolder src={Heart} alt="Pokemon Intro"></ImageHolder>
         </CenterBody>
         {!loading && data && <PokedexBody>
            {data?.results.map((pokemon, key) => 
            <Card key={key} url={pokemon.url}  name={pokemon.name}  />
         )}

         </PokedexBody>}
         <Pagination />
        </Body>
        );
 }

export default Pokedex;