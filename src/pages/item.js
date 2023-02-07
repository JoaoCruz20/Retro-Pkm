import React, {useEffect} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router";

const Body = styled.div`
    height: 100%;
    background-color: black;
    padding: 30px 0 0 0;
`;


const Item = () => {
    const data = useLocation().state;
    console.log(data)

    return (
        <Body>
         <Navbar>
         </Navbar>
        </Body>
    );
  }
  
  export default Item;