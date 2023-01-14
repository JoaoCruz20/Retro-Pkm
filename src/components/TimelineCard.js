import React from "react";
import styled from "styled-components";
import FireRed from "../assets/images/fireRed.jpg";


const Container = styled.ul`
display:flex;
flex-direction:column;
width: 200px;
padding: 20px;
margin: 20px;
border: 5px solid #c7a008ff;
border-radius: 10px;
box-shadow: #c7a008ff 10px 7px 20px 0px;
background-color: black;

div {
    display:flex;
}

img {
 height: 200px;
 margin: auto;
 border-radius: 5px;
}

p{
    color: white;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
}
`;

const TimelineCard = (props) => {

    return (    
     <Container>
        <div>
           <img src={FireRed} alt={props?.label}></img>
        </div>
           <p name={props.name}>{props.name}</p>
    </Container>    
    );
  }
  
  export default TimelineCard;