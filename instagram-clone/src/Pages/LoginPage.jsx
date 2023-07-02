/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Grid, Box, styled, Typography } from "@mui/material"
import Insta_Image from '../Images/login.svg'
import Insta_Logo from '../Images/logoinsta.png'
import Fb_Logo from '../Images/FbLogo.png'
import GP_Logo from '../Images/Google_Play.png'
import MS_Logo from '../Images/Microsoft.png'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';


// The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout.
// There are five grid breakpoints: xs, sm, md, lg, and xl.
// Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by the component


const LoginPage = () => {

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/")
  })

  return (


    <Grid container >
      <Grid item xs={2}  >

      </Grid>

      <Grid item xs={8} style={{ padding: "12px" }} >
        <Container>

          <StyledImg src={Insta_Image} alt="Instagram" />

          <MainContainer>
            <LoginContainer>

              <Box>
                <LogoImg src={Insta_Logo} alt="InstaLogo" />
              </Box>

              <InputContainer>
                <input type="email"
                  name='email'
                  placeholder='Phone number,username or email'
                  value={formValues.email}
                  onChange={(e) => setFormValues({
                    ...formValues,
                    [e.target.name]: e.currentTarget.value
                  })}
                />

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
                  <button onClick={(e) => handleLogin(e)}>Log in</button>
                </BtnContainer>


                <OrContainer>
                  <Box>OR</Box>
                </OrContainer>

                <FbContainer>
                  <img src={Fb_Logo} alt="FbLogo" />
                  <a href='https://www.facebook.com/login/'>Log in with Facebook</a>
                </FbContainer>

                <ForgetPass>
                  <a href="#"><Typography>
                    Forgot Password ?
                  </Typography></a>
                </ForgetPass>

              </InputContainer>
            </LoginContainer>

            <LowerContainer>
              <SignUpContainer>
                <Box>Dont have an account ?&nbsp;
                  <Box component="span" onClick={() => navigate("/signup")}>Sign up</Box>
                </Box>
              </SignUpContainer>

              <GetContainer>
                <Box style={{ margin: "20px 0 0 0 " }}>Get The App</Box>
              </GetContainer>


              <ImgContainer>
                <img src={GP_Logo} alt="Google Play" />
                <img src={MS_Logo} alt="Microsoft" />
              </ImgContainer>

            </LowerContainer>

          </MainContainer>

        </Container>

      </Grid>

      <Grid item xs={2} >

      </Grid>
    </Grid>

  )
}

const StyledImg = styled('img')(({ theme }) => ({
  height: "100vh",
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}))

const LogoImg = styled('img')`
width: 180px;
margin: 20px;
`

const Container = styled(Box)`
width:100vw;
height:100vh;
display:flex;
`

const LoginContainer = styled(Box)`
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
text-align:center;
padding:20px 35px;
margin-top : 20px;
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
margin-top: 6px;
`
const FbContainer = styled(Box)`
display : flex;
margin-top : 16px;
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
}
`
const ForgetPass = styled(Box)`
p {
  font-size : 11.5px;
  font-family:  "Trebuchet MS","Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  margin-top : 14px;
  margin-left : 4px;
  color: #244ca3;
}
a {
  text-decoration: none;
}
`

const MainContainer = styled(Box)`
display : flex;
flex-direction : column;
`

const LowerContainer = styled(Box)`
display : flex;
flex-direction: column;
`

const SignUpContainer = styled(Box)`
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
text-align:center;
padding: 20px 73px;
margin-top : 10px;
span {
  color:#0095F6;
  cursor:pointer;
}
}
`

const GetContainer = styled(Box)`
display : flex;
justify-content: center;
`

const ImgContainer = styled(Box)`
  display : flex;
  justify-content: center;
  gap : 6px;
  margin-top :16px;
  img {
    width : 130px;
  }
`

export default LoginPage;
