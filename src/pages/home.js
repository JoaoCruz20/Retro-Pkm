import React, {useEffect} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ImageHolder from "../components/ImageHolder";
import TextHolder from "../components/TextHolder";
import IntroBattle from "../assets/images/intro-battle.gif";
import GameBoy from "../assets/images/gameboy-color.png";
import IntroBattleMusic from "../assets/music/intro-battle-music.mp3";
import SpeakerIcon from "../assets/icons/speaker.png";




const Body = styled.div`
    height:100%;
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
const FirstBody = styled.div`
    margin: 50px;
    display:flex;
    justify-content:center;
`;

const SecondBody = styled.div`
    display:flex;
    justify-content:center;
    background-color: #ffffffff;
`;

const MusicButton = styled.button`
    background-image: url(${SpeakerIcon});
    height: 50px;
    width: 50px;
    border-radius: 30px;
    margin: 0 0 0 4%;
    background-color:#acacacff;
`;

const paragraphText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


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
         <FirstBody>
            <ImageHolder src={IntroBattle} alt="Pokemon Intro"></ImageHolder>
        </FirstBody>
        <SecondBody>
            <TextHolder title="Introducing the Idea" paragraph={paragraphText}/>
            <ImageHolder src={GameBoy} alt="Gameboy" width="330px" height="600px">
                <img style={{zIndex: 3}} src={IntroBattle} alt="Pokemon Intro"></img>
            </ImageHolder>
        </SecondBody>

        
        </Body>
    );
  }
  
  export default Home;