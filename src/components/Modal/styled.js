import styled from 'styled-components';

export const StyledBorderModalWindow = styled('div')(() => ({
  border: '0 solid #00dc82',
  boxShadow: '0 0 25px #00dc82',
  margin: '10px',
  filter: 'drop-shadow(0 0 25px #00dc82)',
  borderRadius: '5px',
}));

export const StyledDialogTitle = styled('div')(() => ({
  textAlign: 'center',
  padding: '5px',
}));

export const DialogAction = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '15px 0',
}));

export const ButtonModal = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  border: '1px Solid',
  borderRadius: '5px',
  padding: '10px 50px',
  backgroundColor: '#04AA6D',
  color: '#fff',
  cursor: 'pointer',
}));
