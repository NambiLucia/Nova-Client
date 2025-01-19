import  { useState, useEffect } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCardTwoToneIcon from '@mui/icons-material/AddCardTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SpaceDashboardTwoToneIcon from '@mui/icons-material/SpaceDashboardTwoTone';
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import { useMediaQuery } from "@mui/material";


// Account imports
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

function Display() {
  const navigate = useNavigate();
  const theme = useTheme();
  //const [open, setOpen] = React.useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(!isMobile); // Default closed on mobile

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUserDetails = localStorage.getItem('userDetails');
  
    if (storedUserDetails) {
    
        // Parse the JSON string into an object
        const userDetails = JSON.parse(storedUserDetails) 
        setUser({ name: userDetails.name });
    } else {
      console.log('No user details found.');
      setUser(null);
    }
  }, []);
  




  const [anchorEl, setAnchorEl] = useState(null); // Account menu state
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);


  const handleLogout = () => {
    console.log("User logged out");
    setUser(null); // Clear user session
    navigate('/login');
    // You can add redirect logic here (e.g., navigate('/login'))
  }; 

  useEffect(() => {
    // Automatically close the drawer when resizing to mobile
    if (isMobile) setOpen(false);
  }, [isMobile]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#3F51B5' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography
  variant="h6"
  noWrap
  component="div"
  sx={{
    fontFamily: 'Bubblegum',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: { xs: '1.5rem', sm: '2rem' }, 
  }}
>
  NOVA
</Typography>

{user ? (
  <Typography variant="h6">
    Welcome, {user.name}!
  </Typography>
) : (
  <Typography variant="h6">
    Loading user data...
  </Typography>
)}

<Typography
  variant="body1"
  sx={{
    fontSize: { xs: '0.875rem', sm: '1rem' }, 
  }}
>
  Your account is ready to manage payments.
</Typography>

          {/* Account*/}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={handleMenuOpen} sx={{ ml: 2 }}>
            <Avatar sx={{ bgcolor: "secondary.main" }}>
  {user?.name?.charAt(0) || "?"}
</Avatar>

            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
  <MenuItem disabled>{user ? user.name : "Guest"}</MenuItem>
  <MenuItem onClick={handleLogout}>
    <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
    Logout
  </MenuItem>
</Menu>

          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link}
                to="/addpayment"
              
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <AddCardTwoToneIcon /> 
                </ListItemIcon>
                <ListItemText
                 primary=" Add Payment"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link}
                to="/viewpayment"
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <GridViewTwoToneIcon /> 
                </ListItemIcon>
                <ListItemText
                 primary="View Payment"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link}
                to="/dashboard"
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <SpaceDashboardTwoToneIcon /> 
                </ListItemIcon>
                <ListItemText
                 primary="Dashboard"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link}
                to="/approve"
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <SpaceDashboardTwoToneIcon /> 
                </ListItemIcon>
                <ListItemText
                 primary="Approve"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>






         
        </List>
 
        <Divider />
        <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link}
                to="/"
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <HomeTwoToneIcon /> 
                </ListItemIcon>
                <ListItemText
                 primary="Home"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>





      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* <Typography sx={{ marginBottom: 2 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to the NOVA Payment Management System
          </Typography>
          <Typography variant="body1">
            The NOVA Payment Manangement System is designed to streamline your
            financial management, making it easier to track and manage payments
            efficiently. Get started by exploring the dashboard or adding a new
            payment.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Key Features:
          </Typography>
          <Typography variant="body2">
            - Add and manage payments with detailed records.
            <br />
            - Track the status of payments: Initiated, Reviewed, Approved, or
            Processed.
            <br />
            - Upload and manage payment-related documents.
            <br />- View summarized data on the dashboard for quick insights.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Use the navigation menu to access all features. If you need help,
            visit the `Help` section or contact support.
          </Typography>
        </Typography> 
        
        {/* <Typography variant="h6">Welcome, {user ? user.name : "Guest"}!</Typography>
        <Typography variant="body1">Your account is ready to manage payments.</Typography> */}
      </Box>
    </Box>
  );
}

export default  Display;