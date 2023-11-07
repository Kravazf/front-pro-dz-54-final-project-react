import React from 'react';
import { Typography } from '@mui/material';
import { FooterNavigation, FooterWrapp } from './styled';

function Footer() {
  return (
    <FooterWrapp>
      <Typography variant='body1' color='white'>
          <a
            href='/MinistryOfSmartPlay'
            data-text='&nbsp; @2023 Ministry of Smart Play'>
            &nbsp; @ 2023 Ministry of Smart Play&nbsp;
          </a>
      </Typography>
      <FooterNavigation>
        <ul>
          <li>
            <a href='/MinistryOfSmartPlay' data-text='&nbsp;Home'>&nbsp;Home&nbsp;</a>
          </li>
          <li>
            <a href='/MinistryOfSmartPlay' data-text='&nbsp;About'>&nbsp;About&nbsp;</a>
          </li>
          <li>
            <a href='/MinistryOfSmartPlay' data-text='&nbsp;Services'>&nbsp;Services&nbsp;</a>
          </li>
          <li>
            <a href='/MinistryOfSmartPlay' data-text='&nbsp;Blog'>&nbsp;Blog&nbsp;</a>
          </li>
          <li>
            <a href='/MinistryOfSmartPlay' data-text='&nbsp;Contact'>&nbsp;Contact&nbsp;</a>
          </li>
        </ul>
      </FooterNavigation>
    </FooterWrapp>
  );
}

export default Footer;
