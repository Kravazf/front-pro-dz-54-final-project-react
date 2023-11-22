import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LoginButton, StyledToolbar } from './styled';
import AnimateLogo from '../UI/AnimateLogo/AnimateLogo';

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              flexGrow: 1,
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <AnimateLogo />
          </Link>
          <Link
            to="/login"
          >
            <LoginButton color="inherit">Login</LoginButton>
          </Link>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
