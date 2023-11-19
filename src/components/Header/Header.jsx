import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { ResponsiveTypography } from './styled';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': {
    minHeight: 128,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar style={{
          backgroundColor: 'rgb(37, 40, 57)',
        }}>
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
            <Button color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
