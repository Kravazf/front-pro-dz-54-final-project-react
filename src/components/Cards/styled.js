import styled from 'styled-components';

export const StyledCard = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '550px',
  border: '1px solid rgba(4, 170, 109)',
  borderRadius: '0 0 10px 10px',
  position: 'relative',
}));

export const StyledCardMedia = styled('img')(() => ({
  height: '200px',
  backgroundSize: 'cover',
}));

export const CardAction = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  paddingBottom: '7px',
}));

export const Buttons = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  border: '1px Solid',
  borderRadius: '5px',
  padding: '5px 7px 5px 7px',
  backgroundColor: '#04AA6D',
  color: '#fff',
  cursor: 'pointer',
}));
