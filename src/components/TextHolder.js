import React from "react";
import styled from "styled-components";

const Container = styled.ul`
width:500px;
height:600px;
display:flex;
flex-direction: column;

h1 {
color: #acacacff;
font-Size: 40px;
}

p {
font-Size: 20px;
}

`;

const TextHolder = (props) => {
    return (    
     <Container style={props?.style}>
            <h1>{props?.title}</h1>
           <p>{props?.paragraph}</p>
    </Container>    
    );
  }
  
  export default TextHolder;