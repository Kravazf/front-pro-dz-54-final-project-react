import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  FooterGrid,
  HeaderGrid,
  Item,
  LogoText,
  MainGrid,
  MainWrapp,
  SideBarGrid,
} from '../../styled';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { HeaderWrap, StyledMainGrid } from './styled';
import NavListSideBar from '../NavListSideBar/NavListSideBar';

function Template() {
  return (
    <MainWrapp container>
      <HeaderGrid item lg={12} md={12} sm={12} xs={12}>
        <HeaderWrap>
          <LogoText
            variant='h1'
            component='h2'
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >Ministry of Smart Play</LogoText>
          <NavBar />
        </HeaderWrap>
      </HeaderGrid>
      <SideBarGrid item lg={2} md={2} sm={2} xs={12}>
        <NavListSideBar />
      </SideBarGrid>
        <MainGrid item lg={10} md={10} sm={10} xs={12}>
          <StyledMainGrid>
            <Item>
              <Outlet />
            </Item>
          </StyledMainGrid>
      </MainGrid>
      <FooterGrid item lg={12} md={12} sm={12} xs={12}>
        <Footer />
      </FooterGrid>
    </MainWrapp>
  );
}

export default Template;
