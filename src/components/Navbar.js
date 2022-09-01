import React from "react";
import styled from "styled-components";

const Body = styled.div`
width:100%
`;

const Container = styled.ul`
height: 50px;
margin: 0% 1% 1% 1%;
border-radius: 15px;
list-style-type: none;
overflow: hidden;
background-color: #38444d;

li {
    display: inline-flex;
    justify-content: flex-start;
}
a {    
     color: white;
     padding: 10px 10px 10px 10px;
  }
`;


const Navbar = () => {
    return (
    <Body>
        <Container>
            <li><a href="https://www.w3schools.com">Hello1</a></li>
            <li><a href="https://www.w3schools.com">Hello2</a></li>
            <li><a href="https://www.w3schools.com">Hello3</a></li>
        </Container>
    </Body>
    );
  }
  
  export default Navbar;