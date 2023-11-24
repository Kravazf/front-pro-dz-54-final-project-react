import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NavBar from '../NavBar/NavBar';
import { NavList, NavListWrapp } from './styled';

const navigationLinks = [
  { name: 'Home', href: '/MinistryOfSmartPlay' },
  { name: 'Add quiz', href: '/MinistryOfSmartPlay/create' },
  { name: 'Favorite', href: '/MinistryOfSmartPlay/favorite' },
];

export default function NavListSideBar({ open, onOpen, onClose }) {
  return (
    <NavListWrapp>
      <Drawer
      anchor='left'
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      >
        <IconButton>
          <ChevronLeftIcon onClick={onClose}/>
        </IconButton>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.href}>
              <Link
                key={item.href}
                to={item.href}
                variant='button'
                style={{
                  color: 'black',
                }}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <NavList>
          {navigationLinks.map((item) => (
              <Link
              key={item.href}
                to={item.href}
                variant='button'
              >
                {item.name}
              </Link>
          ))}
            <NavBar />
      </NavList>
    </NavListWrapp>
  );
}
