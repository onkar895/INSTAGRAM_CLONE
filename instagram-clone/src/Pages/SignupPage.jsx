// Material UI :
//     Material UI is a library of React UI components that implements Google's Material Design.
//     It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.
//     Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.

/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { styled, Box, Typography } from '@mui/material'
import Insta_Logo from '../Images/logoinsta.png'
import Fbwhite_Logo from '../Images/FbWhite.png'
import GP_Logo from '../Images/Google_Play.png'
import MS_Logo from '../Images/Microsoft.png'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';


const LoginPage = () => {

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    fullname: "",
    username: "",
    password: ""
  });

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch (error) {
      console.log(error, "error while handling signin")
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/")
  })


  return (

    <Container>
      <LoginContainer>
        <Box>
          <LogoImg src={Insta_Logo} alt="InstaLogo" />
        </Box>

        <SignUpContainer>
          <Typography>Sign up to see photos and videos</Typography>
          <Typography>from your friends.</Typography>
        </SignUpContainer>


        <FbContainer>
          <img src={Fbwhite_Logo} alt="FbLogo" />
          <a href='https://www.facebook.com/login/'>Log in with Facebook</a>
        </FbContainer>


        <OrContainer>
          <Box>OR</Box>
        </OrContainer>

        <InputContainer>
          <input type="email"
            name='email'
            placeholder='Mobile number or email'
            value={formValues.email}
            onChange={(e) => setFormValues({
              ...formValues,
              [e.target.name]: e.currentTarget.value
            })}
          />

          <input type='text' name='text' placeholder='Full Name' />

          <input type='text' name='text' placeholder='Username' />

          <input type="password"
            name='password'
            placeholder='Password'
            value={formValues.password}
            onChange={(e) => setFormValues({
              ...formValues,
              [e.target.name]: e.target.value
            })}
          />

          <BtnContainer>
            <button onClick={(e) => handleSignIn(e)}>Sign Up</button>
          </BtnContainer>


        </InputContainer>
      </LoginContainer>

      <Box style={{ margin: "20px 0 0 0 " }}>Get The App</Box>

      <ImgContainer>
        <img src={GP_Logo} alt="Google Play" />
        <img src={MS_Logo} alt="Microsoft" />
      </ImgContainer>

    </Container>

  )
}


const LogoImg = styled('img')`
width: 180px;
margin: 10px;
`

const Container = styled(Box)`
width:100vw;
height:100vh;
display:flex;
flex-direction : column;
justify-content:center;
align-items:center;
`

const LoginContainer = styled(Box)`
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
text-align:center;
padding:20px 35px;
`

const InputContainer = styled("form")`
display:flex;
flex-direction:column;
align-items:center;
input{
   font-family:  "Trebuchet MS","Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
    margin:3px 0;
    width: 270px;
    height:38px;
    outline:none;
    border:1px solid rgb(219, 219, 219);
    border-radius : 3px;
    padding: 9px 0 7px 8px;
    border-radius:3px;
    background:white;
    color : grey;
    font-size:12px;
}

button{
   font-family:  "Trebuchet MS","Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
    width:270px;
    margin:10px 0;
    height:32px;
    border:none;
    outline:none;
    background:  #3dacf5;
    color:white;
    font-weight : bold;
    font-size:14px;
    border-radius:5px;
}
`
const BtnContainer = styled(Box)`
button:hover {
  cursor : pointer;
}
`

const OrContainer = styled(Box)`
color: grey;
font-weight : bold;
font-size : 12px;
margin: 7px 0 7px 0;
`
const FbContainer = styled(Box)`
font-family:  "Trebuchet MS","Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
display : flex;
align-items : center;
justify-content : center;
margin : 16px 0 10px 0;
background:  #2a90d4;
padding : 6px;
border-radius : 5px;
img {
  margin-right : 9px;
  margin-top : 1px;
  width : 18px;
  height : 18px;
}

a {
  font-family:  "Trebuchet MS","Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  color:#163b87;
  font-weight : 580;
  text-decoration: none;
  color : white;
}
`
const SignUpContainer = styled(Box)`
p {
font-family:  "Trebuchet MS","Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
color : grey;
font-size : 16px;
font-weight : 600;
}
`
const ImgContainer = styled(Box)`
  display : flex;
  gap : 6px;
  margin-top :16px;
  img {
    width : 130px;
  }
`



export default LoginPage
