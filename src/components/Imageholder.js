import React from "react";
import styled from "styled-components";

const Container = styled.ul`
width:500px;
height:600px;
display:flex;
justify-content:center;
`;

const ImageHolder = (props) => {
    return (    
     <Container>
           <img src={props.src} alt={props?.label} width={props?.width} height={props?.height}></img>
    </Container>    
    );
  }
  
  export default ImageHolder;