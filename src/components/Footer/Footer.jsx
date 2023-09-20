import React from 'react';
import { Typography } from '@mui/material';
import { FooterNavigation, FooterWrapp } from './styled';

function Footer() {
  return (
    <FooterWrapp>
      <Typography variant='body1' color='white'>
        <a style={{ color: '#fff' }}
        href='http://localhost:3000'
        data-text='&copy; 2023 Ministry of Smart Play'>&copy; 2023 Ministry of Smart Play</a>
      </Typography>
      <FooterNavigation>
        <ul>
          <li>
            <a href='http://localhost:3000' data-text='&nbsp;Home'>&nbsp;Home&nbsp;</a>
          </li>
          <li>
            <a href='http://localhost:3000' data-text='&nbsp;About'>&nbsp;About&nbsp;</a>
          </li>
          <li>
            <a href='http://localhost:3000' data-text='&nbsp;Services'>&nbsp;Services&nbsp;</a>
          </li>
          <li>
            <a href='http://localhost:3000' data-text='&nbsp;Blog'>&nbsp;Blog&nbsp;</a>
          </li>
          <li>
            <a href='http://localhost:3000' data-text='&nbsp;Contact'>&nbsp;Contact&nbsp;</a>
          </li>
        </ul>
      </FooterNavigation>
    </FooterWrapp>
  );
}

export default Footer;
