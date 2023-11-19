import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavList, NavListWrapp } from './styled';
import NavBar from '../NavBar/NavBar';

export default function ListDividers() {
  return (
    <NavListWrapp>
      <NavList component="nav" aria-label="mailbox folders">
        <ul>
            <li>
            <NavBar />
         </li>
          <li>
            <Link
              to='/MinistryOfSmartPlay'
              data-text='&nbsp;Home'>
              &nbsp;Home&nbsp;
            </Link>
          </li>
          <li>
            <Link
              to='/MinistryOfSmartPlay/create'
              data-text='&nbsp;Add quiz'>
              &nbsp;Add quiz&nbsp;
            </Link>
          </li>
          <li>
            <Link
              to='/MinistryOfSmartPlay/favorite'
              data-text='&nbsp;Favorite'>
              &nbsp;Favorite&nbsp;
            </Link>
          </li>
        </ul>
      </NavList>
    </NavListWrapp>
  );
}
