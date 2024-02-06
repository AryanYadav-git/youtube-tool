import {
    Article,
    Group,
    Home,
    HelpCenter,
    Mail,
    Logout,
    YouTube,
  } from "@mui/icons-material";
  import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
  } from "@mui/material";
  import React from "react";
  
  const Sidebar = ({ mode, setMode }) => {
    return (
      <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home" sx={{ p: 1 }}>
                <ListItemIcon sx={{ fontSize: "small" }}>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: "body2" }}
                  primary="Admin Dashboard"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list" sx={{ p: 1 }}>
                <ListItemIcon sx={{ fontSize: "small" }}>
                  <Article />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: "body2" }}
                  primary="Plans"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list" sx={{ p: 1 }}>
                <ListItemIcon sx={{ fontSize: "small" }}>
                  <Group />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: "body2" }}
                  primary="Projects"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list" sx={{ p: 1 }}>
                <ListItemIcon sx={{ fontSize: "small" }}>
                  <Mail />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: "body2" }}
                  primary="Inbox"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list" sx={{ p: 1 }}>
                <ListItemIcon sx={{ fontSize: "small" }}>
                  <HelpCenter />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: "body2" }}
                  primary="Help & Support"
                />
              </ListItemButton>
            </ListItem>
  
            <ListItem>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon sx={{ fontSize: "small" }}>
                  <YouTube />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: "body2" }}
                  primary="Youtube"
                />
              </ListItemButton>
            </ListItem>
  
            <ListItem>
              <ListItemButton onClick={()=> {
                localStorage.setItem("token", null);
                window.location = "/"
              }} component="a" href="#simple-list">
                <ListItemIcon sx={{ fontSize: "small" }}>
                  <Logout />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: "body2" }}
                  primary="Logout"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };
  
  export default Sidebar;