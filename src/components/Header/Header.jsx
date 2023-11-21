import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { ResponsiveTypography, StyledToolbar } from './styled';

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
            <ResponsiveTypography
              variant="h2"
              noWrap
              component="div"
            >
              Ministry of Smart Play
            </ResponsiveTypography>
          </Link>
          <Link
            to="/login"
          >
            <Button color="inherit">Login</Button>
          </Link>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
