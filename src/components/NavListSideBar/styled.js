import styled from 'styled-components';

export const NavListWrapp = styled('div')(() => ({
  display: 'flex',
  backgroundColor: '#252839',
  justifyContent: 'center',
}));

export const StyledContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '10px',
  width: '100%',
}));

export const NavList = styled('div')`
  display: flex;
  flex-grow: 1;
  align-items: center;

  .nav-link {
    color: white;
    margin-right: 20px;
    flex-grow: 1;
    text-align: center;
    font-size: 25px;
    color: rgba(255, 255, 255, 0.5);
    filter: drop-shadow(0 0 25px #00dc82);
    transition: color 0.3s, filter 0.3s;
    text-decoration: underline #00dc82;
    text-decorationColor: #00dc82;
  }

  .nav-link:hover {
    color: #00dc82;
    filter: drop-shadow(0 0 25px #00dc82);
  }
`;
