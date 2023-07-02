/* eslint-disable no-unused-vars */
import React from "react";
import { Grid } from "@mui/material"
import Sidebar from "../Components/Sidebar";


// The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout.
// There are five grid breakpoints: xs, sm, md, lg, and xl.
// Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by the component


const HomePage = () => {
  return (


    <Grid container >
      <Grid item xs={2}  >
        <Sidebar />
      </Grid>

      <Grid item xs={7} style={{ padding: "12px" }} >
        fdgg
      </Grid>

      <Grid item xs={3} >
        ghhyghh
      </Grid>
    </Grid>

  )
}

export default HomePage;
