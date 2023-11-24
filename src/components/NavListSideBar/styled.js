import styled from 'styled-components';

export const NavListWrapp = styled('div')(() => ({
  display: 'flex',
  backgroundColor: '#252839',
  alignItems: 'flex-start',
  justifyContent: 'center',
}));

export const NavList = styled('div')(() => ({
  ul: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    textAlign: 'center',
  },

  'ul li': {
    listStyle: 'none',
    marginRight: '20px',
  },

  'ul li a': {
    fontSize: '19px',
    color: 'rgba(255, 255, 255, 0.5)',
    filter: 'drop-shadow(0 0 25px #00dc82)',
    transition: 'color 0.3s, filter 0.3s',
    textDecoration: 'underline',
    textDecorationColor: '#00dc82',
  },

  'ul li a:hover': {
    color: '#00dc82',
    filter: 'drop-shadow(0 0 25px #00dc82)',
  },
}));
