/* eslint-disable react/prop-types */
import { Box, Menu, MenuItem } from "@mui/material"
import { AnnouncementOutlined, AvTimerOutlined, BookmarkBorderOutlined, LightModeOutlined, SettingsOutlined } from '@mui/icons-material';
import styled from "@emotion/styled";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const MenuItemContainer = styled(MenuItem)`
display:flex;
align-items:center;
cursor:pointer;
width : 20vw;
border-radius : 10px;
margin :  0 5px 0 5px;
& > div{
    margin:10px 5px;
}
`

const MoreMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open)
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login")
  })

  return (

    <Menu
      id="basic-menu"
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button'
      }}>


      <MenuItemContainer>
        <Box>
          <SettingsOutlined />
        </Box>
        <Box>
          Settings
        </Box>
      </MenuItemContainer>

      <MenuItemContainer>
        <Box>
          <AvTimerOutlined />
        </Box>
        <Box>
          Activity
        </Box>
      </MenuItemContainer>

      <MenuItemContainer>
        <Box>
          <BookmarkBorderOutlined />
        </Box>
        <Box>
          Saved
        </Box>
      </MenuItemContainer>

      <MenuItemContainer>
        <Box>
          <LightModeOutlined />
        </Box>
        <Box>
          Switch appearance
        </Box>
      </MenuItemContainer>

      <MenuItemContainer>
        <Box>
          <AnnouncementOutlined />
        </Box>
        <Box>
          Report a problem
        </Box>
      </MenuItemContainer>

      <MenuItemContainer>
        <Box style={{ marginLeft: 35, marginTop: 12 }}>Switch accounts</Box>
      </MenuItemContainer>

      <MenuItemContainer
        onClick={() => signOut(firebaseAuth)}
      >
        <Box style={{ marginLeft: 35, marginTop: 12 }}>Log out</Box>
      </MenuItemContainer>
    </Menu >

  )
}

export default MoreMenu
