import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ImageHolder from "../components/ImageHolder";
import Heart from "../assets/images/pikachu-heart.gif";
import GymLeaderBattle from "../assets/music/gym-leader-battle.mp3"; //.mid files do not work, must convert

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
`;

const MusicButton = styled.button`
    height: 50px;
    width: 50px;
    border-radius: 30px;
    margin: 0 0 0 4%;
`;

const Pokedex = () => { 
 const [payload, setPayload] = useState(null);

    const fetchData = () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(data => setPayload(data))
            .catch(error => console.log('ERROR'))
    }

    useEffect(() => {
        fetchData();  
    }, []);     
 
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
         <PokedexBody>{payload?.results.map((pokemon, key) =>             
            <h1 style={{color:"white", padding: "20px",
            margin: "20px"}} key={key}>{pokemon.name}</h1>
         )}</PokedexBody>
        </Body>
        );
 }

export default Pokedex;