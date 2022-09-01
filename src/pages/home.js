import styled from "styled-components";
import Navbar from "../components/Navbar";
import ImageHolder from "../components/Imageholder";
import IntroBattle from "../assets/images/intro-battle.gif";

const Body = styled.div`
    height:2000px;
    background-color: black;
    padding: 30px 0 0 0;
`;
const CenterBody = styled.div`
    display:flex;
    justify-content:center;
`;

 const Home = () => {
    return (
        <Body>
         <Navbar>
         </Navbar>
         <CenterBody>
            <ImageHolder src={IntroBattle} alt="Pokemon Intro"></ImageHolder>
        </CenterBody>
        </Body>
    );
  }
  
  export default Home;