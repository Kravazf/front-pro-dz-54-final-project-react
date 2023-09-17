import styled from 'styled-components';

export const StyledCard = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  border: '1px solid rgba(4, 170, 109)',
  borderRadius: '10px',
}));

export const StyledCardMedia = styled('img')(() => ({
  flex: '1',
  padding: '10px',
}));

export const CardAction = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0 0 10px 0',
}));

export const Buttons = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  border: '1px Solid',
  borderRadius: '5px',
  padding: '5px 7px 5px 7px',
  backgroundColor: '#04AA6D',
  color: '#fff',
}));
