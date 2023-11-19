import styled from 'styled-components';

export const FormWrap = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '45vh',

}));

export const ButtonCreateQuiz = styled('div')(() => ({
  marginTop: '10px',
  marginBottom: '10px',
  maxWidth: 'max-content',
  display: 'flex',
  justifyContent: 'center',
  border: '1px Solid',
  borderRadius: '5px',
  padding: '7px 10px 7px 10px',
  backgroundColor: 'rgb(37, 40, 57)',
  color: '#fff',
  cursor: 'pointer',
  filter: 'drop-shadow(0 0 25px #00dc82)',
  alignItems: 'center',

  p: {
    color: 'rgba(255, 255, 255, 0.5)',
    filter: 'drop-shadow(25px 0 25px #00dc82)',
    transition: 'color 0.3s, filter 0.3s',
    padding: '0px',
    margin: '0px',
  },

  'p:hover': {
    color: '#00dc82',
    filter: 'drop-shadow(0 0 25px #00dc82)',
  },
}));
