import * as React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { NavList } from './styled';

export default function ListDividers() {
  return (
    <NavList component="nav" aria-label="mailbox folders">
      <ListItemButton component={Link} to="/MinistryOfSmartPlay">
        <ListItemText primary="Homepage" />
      </ListItemButton>
      <Divider />
      <ListItemButton divider component={Link} to="/quiz/create">
        <ListItemText primary="Add New (Quiz)" />
      </ListItemButton>
      <ListItemButton component={Link} to="/quiz/favorite">
        <ListItemText primary="Favorite" />
      </ListItemButton>
    </NavList>
  );
}
