import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginPageFormWrap = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const StyledRegisterLink = styled(Link)(() => ({
  color: 'green',
}));
