import styled from 'styled-components';

export const FooterWrapp = styled('div')(() => ({
  display: 'flex',
  height: '100%',
  backgroundColor: '#252839',
  alignItems: 'center',
}));

export const FooterNavigation = styled('div')(() => ({
  ul: {
    position: 'relative',
    display: 'flex',
    gap: '30px',
    flexDirection: 'column',
  },

  'ul li': {
    position: 'relative',
    listStyle: 'none',
  },

  'ul li a': {
    fontSize: '2em',
    textDecoration: 'none',
    letterSpacing: '2px',
    lineHeight: '1em',
    textTransform: 'uppercase',
    color: 'transparent',
    WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)',
  },

  'ul li a::before': {
    content: 'attr(data-text)',
    position: 'absolute',
    color: '#00dc82',
    width: '0',
    overflow: 'hidden',
    transition: '1s',
    borderRight: '8px solid #00dc82',
    WebkitTextStroke: '1px #00dc82',
  },

  'ul li a:hover::before': {
    width: '100%',
    filter: 'drop-shadow(0 0 25px #00dc82)',
  },
}));
