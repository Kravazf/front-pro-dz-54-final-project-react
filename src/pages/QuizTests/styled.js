import styled from 'styled-components';

export const CenteredItem = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: '1',
  minHeight: '48vh',
  color: '#00dc82',
  filter: 'drop-shadow(0 0 25px #00dc82)',
}));
