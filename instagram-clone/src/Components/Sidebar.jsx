import { Menu, Search, ExploreOutlined, VideoLibraryOutlined, MapsUgcOutlined, FavoriteBorderOutlined, AddBoxOutlined, HomeOutlined } from "@mui/icons-material"
import Drawer from '@mui/material/Drawer';
import Insta_Logo from '../Images/logoinsta.png'
import { Box, styled, Avatar } from '@mui/material'
import MoreMenu from "./MoreMenu";
import { useState } from "react";

const Sidebar = () => {

  const [open, setOpen] = useState(null)

  const handleClick = (e) => {
    setOpen(e.currentTarget)
  }

  const handleClose = () => {
    setOpen(null);
  }

  return (
    <Drawer variant="permanent">

      <DrawerContainer>

        <ImageContainer>

          <Image src={Insta_Logo} alt="insta logo" />

          <NavigationContainer>

            <StyledUl>
              <li>
                <HomeOutlined fontSize="large" />
                <Box style={{ marginLeft: 15 }} >Home </Box>
              </li>
              <li>
                <Search fontSize="large" />
                <Box style={{ marginLeft: 15 }} >Search</Box>
              </li>
              <li>
                <ExploreOutlined fontSize="large" />
                <Box style={{ marginLeft: 15 }} >Explore </Box>
              </li>
              <li>
                <VideoLibraryOutlined fontSize="large" />
                <Box style={{ marginLeft: 15 }} >Reels</Box>
              </li>
              <li>
                <MapsUgcOutlined fontSize="large" />
                <Box style={{ marginLeft: 15 }} >Messages</Box>
              </li>
              <li>
                <FavoriteBorderOutlined fontSize="large" />
                <Box style={{ marginLeft: 15 }} >Notification</Box>
              </li>
              <li>
                <AddBoxOutlined fontSize="large" />
                <Box style={{ marginLeft: 15 }} >Create</Box>
              </li>
              <li>
                <Avatar fontSize="small" style={{ fontSize: 22, fontWeight: 'bold' }}>O</Avatar>&nbsp;
                <Box style={{ marginLeft: 5 }} >Profile</Box>
              </li>
            </StyledUl>

          </NavigationContainer>

        </ImageContainer>

        <Box style={{ display: 'flex', alignItems: "center", cursor: "pointer" }} onClick={handleClick}>
          <Menu fontSize="large" />
          <Box style={{ marginLeft: 10 }}>More</Box>
        </Box>

        <MoreMenu
          open={open}
          handleClose={handleClose} />

      </DrawerContainer>

    </Drawer>
  )
}


const Image = styled("img")`
width:115px;
object-fit:cover;
margin:20px 0;
`

const ImageContainer = styled(Box)`
height:73px;
width:100%;
display:flex;
justify-content:start;
align-items:start;
flex-direction:column;
`

const NavigationContainer = styled(Box)`
display:flex;
flex-direction:column;
align-items:start;
width:100%;
margin-top:15px;

`

const StyledUl = styled("ul")`
list-style:none;
display:flex;
flex-direction:column;
align-items:start;
& > li{
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px 0;
    cursor:pointer;

}
`

const DrawerContainer = styled(Box)`
display:flex;
flex-direction:column;
justify-content:space-between;
height:100%;
width:17.4vw;
padding:15px 20px
`

export default Sidebar
