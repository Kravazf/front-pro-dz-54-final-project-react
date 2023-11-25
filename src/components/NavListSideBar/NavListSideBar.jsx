import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import NavBar from '../NavBar/NavBar';
import { NavList, NavListWrapp, StyledContainer } from './styled';

const navigationLinks = [
  { name: 'Home', href: '/MinistryOfSmartPlay' },
  { name: 'Add quiz', href: '/MinistryOfSmartPlay/create' },
  { name: 'Favorite', href: '/MinistryOfSmartPlay/favorite' },
  { name: <LinkedInIcon fontSize='large' />, href: 'https://www.linkedin.com/in/kravazf/' },
  { name: <GitHubIcon fontSize='large' />, href: 'https://github.com/Kravazf?tab=repositories' },
  { name: <InstagramIcon fontSize='large' />, href: 'https://www.linkedin.com/in/kravazf/' },
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
          <ChevronLeftIcon onClick={onClose}/>
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
      <StyledContainer>
        <Hidden implementation="css" mdDown>
            <NavList>
              {navigationLinks.map((item) => (
                  <Link
                  key={item.href}
                    to={item.href}
                    variant='button'
                    className='nav-link'
                  >
                    {item.name}
                  </Link>
              ))}

            </NavList>
        </Hidden>
        <NavBar />
      </StyledContainer>
    </NavListWrapp>
  );
}
