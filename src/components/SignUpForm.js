import React from "react";
import styled from "styled-components";
import '../assets/fonts/font-Pkmn.css';

const LoginContainer = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
margin: 5% 0 0 0;
`

const LoginForm = styled.form`
display:flex;
justify-content:center;
flex-direction:column;

label{
     color: black;
     padding: 10px 10px 10px 10px;
     font-size: 18px;
     font-family: "Pkmn", Times, serif;
}

input{
     border: 2px solid #c7a008;
     border-radius: 5px;
     padding:15px 100px 15px 100px;
     margin: 0 0 2% 0;
}


`

const LoginButton = styled.button`
display:flex;
justify-content:center;
margin: 5% 0 0 0;
border: 2px solid #c7a008;
border-radius: 5px;
padding:15px;
font-family: "Pkmn", Times, serif;

      &:hover{
          background-color: white;
     }

`


const SignUpForm = () => {
    return (   
     <LoginContainer>
        <LoginForm>
             <label for="username">Username</label>
             <input type="text" id="username" name="username" />
             <label for="username">Email</label>
             <input type="text" id="email" name="email" />
             <label for="password">Password</label>
             <input type="password" id="password" name="password" />
             <label for="checkbox">checkbox</label>
             <input type="checkbox" id="checkbox" name="checkbox" />
        </LoginForm>
        <LoginButton>Login</LoginButton>
     </LoginContainer>
       );
  }
  
  export default SignUpForm;