import React, {useEffect} from "react";
import styled from "styled-components";
import SpeakerIcon from "../assets/icons/speaker.png";
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from './redux/counterSlice';
import '../assets/fonts/font-Pkmn.css';


const Button = styled.div`
    button {
        height: 50px;
        width: 50px;
        border-radius: 30px;
        margin: 0 0 0 4%;
        background-color:white;
        display:flex;
        transition: all 0.5s;
    }

    button:hover span {
        padding-right: 25px;
    }

    button:hover span:after {
        opacity: 1;
        right: 0;
    }  

    img {
        padding: 7px 0 0 5px;
    }

    span{
        font-size: 14px;
        font-family: "Pkmn", Times, serif;
        padding: 5px 0 0 20px;
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
        color:white;
    }

    span:after {
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
      }

`;

let music

const MusicButton = (props) => {
    const name = useSelector((state) => state.counter.name)
    const dispatch = useDispatch()

    music = props.audio

  /*   useEffect(() => {
        PlayMusic(music)
    },[]);  */


    // When you redo this feature, search for the HTMLMediaElement - link to MDN docs - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement

       const PlayMusic = (music) => {
        let audio = new Audio(music); 
            audio.play();
              
        }

    return (
        <Button> 
            <button onClick={() => {
                PlayMusic(music)
                dispatch(changeName())
                }}>
                <img alt="speaker" width="25px"height="25px" src={SpeakerIcon} />
                <span>{name}</span>
                <span>Playing {props.name}</span>
            </button>
        </Button>   
    );
  }
  
  export default MusicButton;