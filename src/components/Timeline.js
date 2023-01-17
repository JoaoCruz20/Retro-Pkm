import React from "react";
import styled from "styled-components";
import TimelineCard from "../components/TimelineCard";
import gamesData from "../data/games.json";
import {FireRed, Silver} from "../assets/images/index.js";


const Container = styled.div`
margin: 2% 0 2% 0;
height: 100%;
width: 4px;
background-color: white;
border-radius:40px;

li {
    position:relative;
    color: white;

    &::marker{
        font-size:50px;
        position:absolute;
    }

    &:hover {
        color: #c7a008;
    }

    &:nth-child(odd){
        float:left;
        padding-right: calc(50% + 30px);
        left: -7px;
    }

    &:nth-child(even){
        float:right;
        padding-left: calc(50% + 30px);
        text-align: right;
        direction: rtl;
        left: 7px;
    }

}


`;

const Timeline = (props) => {

    const TimelineComponent = gamesData?.games?.map((game, index) =>{
        console.log(game.image)
        return (
            <>
               <li><TimelineCard index={`game-${index}`} name={game.title} year={game.releaseY} src={game?.image} label={game.title} /></li>
            </>
        )
    })

    return (    
      <Container>        
            {TimelineComponent}        
      </Container>    
    );
  }
  
  export default Timeline;