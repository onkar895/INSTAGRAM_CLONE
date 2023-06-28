import { Grid, Box, styled } from "@mui/material"
import Insta_Image from '../Images/login.svg'
import LoginPage from "./LoginPage"


// The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout.
// There are five grid breakpoints: xs, sm, md, lg, and xl.
// Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by the component


const HomePage = () => {
  return (


    <Grid container >
      <Grid item xs={2}  >

      </Grid>

      <Grid item xs={8} style={{ padding: "12px" }} >
        <Container>
          <StyledImg src={Insta_Image} alt="Instagram" />
          <LoginPage />
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

const Container = styled(Box)`
display : flex;
`

export default HomePage;
