import React, {useEffect} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ImageHolder from "../components/ImageHolder";
import TextHolder from "../components/TextHolder";
import MusicButton from "../components/MusicButton";
import IntroBattle from "../assets/images/intro-battle.gif";
import GameBoy from "../assets/images/gameboy-color.png";
import IntroBattleMusic from "../assets/music/intro-battle-music.mp3";


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


const paragraphText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


 const Home = () => {


    return (
        <Body>
         <Navbar>
         </Navbar>
         <MusicButton audio={IntroBattleMusic} name={"Intro Battle Music"}/>
         <Title>Welcome to Retro Pokemon</Title>
         <FirstBody>
            <ImageHolder src={IntroBattle} alt="Pokemon Intro"></ImageHolder>
        </FirstBody>
        <SecondBody>
            <TextHolder title="Introducing the Idea" paragraph={paragraphText}/>
            <ImageHolder src={GameBoy} alt="Gameboy" width="330px" height="600px">
                <ImageHolder style={{zIndex: 3}} src={IntroBattle} alt="Pokemon Intro"></ImageHolder>
            </ImageHolder>
        </SecondBody>
        <Footer />
        </Body>
    );
  }
  
  export default Home;