import styled from 'styled-components';

export const ResponsiveTypography = styled('div')(() => ({
  flexGrow: 1,
  color: '#00dc82',
  filter: 'dropShadow(0 0 25px #00dc82)',
  transition: 'color 0.3s, filter 0.3s',
  alignSelf: 'flex-end',
  '@media (max-width:600px)': {
    fontSize: '1.5rem',
  },
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
  '@media (min-width:900px)': {
    fontSize: '3.5rem',
  },
}));