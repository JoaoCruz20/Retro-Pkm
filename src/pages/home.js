import React, {useEffect} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ImageHolder from "../components/ImageHolder";
import IntroBattle from "../assets/images/intro-battle.gif";
import IntroBattleMusic from "../assets/music/intro-battle-music.mp3";
import SpeakerIcon from "../assets/icons/speaker.png";




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
    background-image: url(${SpeakerIcon});
    height: 50px;
    width: 50px;
    border-radius: 30px;
    margin: 0 0 0 2.5%;
`;


 const Home = () => {

    useEffect(() => {
       PlayMusic()
      }); 

      const PlayMusic = () => {
      var audio = new Audio(IntroBattleMusic);
        audio.play();
      }

    return (
        <Body>
         <Navbar>
         </Navbar>
         <MusicButton onClick={PlayMusic} />
         <Title>Welcome to Retro Pokemon</Title>
         <CenterBody>
            <ImageHolder src={IntroBattle} alt="Pokemon Intro"></ImageHolder>
        </CenterBody>
        
        </Body>
    );
  }
  
  export default Home;