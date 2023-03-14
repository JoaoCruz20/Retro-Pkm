import React, {useEffect} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import fetcher from "../backend/fetcher";

const Body = styled.div`
    height: 100%;
    background-color: black;
    padding: 30px 0 0 0;
`;

const CentralBody = styled.div`
    height: 100%;
    background-color: black;
`;

const Image = styled.div`
    height: 700px;
    width: 50%;
    background-color: black;
    border: 3px solid yellow
  
`;

const Details = styled.div`
    height: 700px;
    width: 50%;
    background-color: black;
    border: 3px solid yellow
`;

const Pokemon = () => {
    const location = useLocation();
    console.log(location)

    useEffect(()=> {
        const data = fetcher(location?.state?.url);
        data.then((res) => console.log(res))
    }, [location])

    return (
        <Body>
         <Navbar>
         </Navbar>
         <CentralBody>
            <Image>

            </Image>
            <Details>
                <h1>{}</h1>
            </Details>
         </CentralBody>
        </Body>
    );
  }
  
  export default Pokemon;