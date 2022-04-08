import styled from "styled-components";

const Body = styled.div`
background-color: black;

 h1{
     color: white;
 }
`;

 const Home = () => {
    return (
        <Body>
           <h1>Hello</h1>
           <p>OIOIOII</p>
        </Body>
    );
  }
  
  export default Home;