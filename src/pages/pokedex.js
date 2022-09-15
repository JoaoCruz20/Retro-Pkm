import React, {useEffect} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ImageHolder from "../components/ImageHolder";
import Heart from "../assets/images/pikachu-heart.gif";
import GymLeaderBattle from "../assets/music/gym-leader-battle.mp3"; //.mid files do not work, must convert

const Body = styled.div`
    height:2000px;
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

const MusicButton = styled.button`
    height: 50px;
    width: 50px;
    border-radius: 30px;
    margin: 0 0 0 2.5%;
`;

const Pokedex = () => { 

    useEffect(() => {
        PlayMusic()
       }); 
 
       const PlayMusic = () => {
       var audio = new Audio(GymLeaderBattle);
         audio.play();
       }
       
    return (
        <Body>
         <Navbar />
         <MusicButton onClick={PlayMusic} />
         <Title>Hello World</Title>
         <CenterBody>
         <ImageHolder src={Heart} alt="Pokemon Intro"></ImageHolder>
         </CenterBody>
        </Body>
        );
 }

export default Pokedex;