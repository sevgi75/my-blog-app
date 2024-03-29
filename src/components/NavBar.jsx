import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuthCalls from '../hooks/useAuthCalls';
// import AdbIcon from '@mui/icons-material/Adb';

const pages = [
  {
    page: "DASHBOARD",
    link: "/"
  },
  {
    page: "NEW BLOG",
    link: "newblog",
  },
  {
    page: "ABOUT",
    link: "about",
  },
];
const settings = [
  {
    page:"login",
    link:"login",
  },
  {
    page:"My Blogs",
    link:"myBlogs",
  },
  {
    page:"Profile",
    link:"profile",
  },
  {
    page:"logout",
    link:"logout",
  },
];

function NavBar() {
  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.auth)
  const {logout} = useAuthCalls()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleNavBarMenu = (e) => {
    navigate(e)
    console.log(e);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:"#046582"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            My Blog App
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((item) => (
                <MenuItem 
                key={item.page} 
                onClick={()=> {
                  handleNavBarMenu(item.link)
                  handleCloseNavMenu()
                }}
                >
                  <Typography textAlign="center">{item.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            
          >
           <span style={{ color: 'wheat', fontSize: '30' }}>{"<My BL❤G App>"}</span> (FL❤WERS)
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((item) => (
              <Button
                key={item.page}
                onClick={()=> {
                  handleNavBarMenu(item.link)
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {item.page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user && (
                <MenuItem
                onClick={()=>{
                  handleCloseUserMenu();
                  navigate("my-blogs")
                }}
                >
                My Blogs
                </MenuItem>
              )}
              {user && (
                <MenuItem
                onClick={()=>{
                  handleCloseUserMenu();
                  navigate("profile")
                }}
                >
                Profile
                </MenuItem>
              )}
              {user && (
                <MenuItem
                onClick={()=>{
                  handleCloseUserMenu();
                  logout()
                }}
                >
                Logout
                </MenuItem>
              )}
              {!user && (
                <MenuItem
                onClick={()=>{
                  handleCloseUserMenu();
                  navigate("login")                
                }}
                >
                Login
                </MenuItem>
              )}
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;