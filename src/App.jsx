import React from 'react';
import {
  FooterGrid,
  HeaderGrid,
  Item,
  LogoText,
  MainGrid,
  MainWrapp,
  SideBarGrid,
} from './styled';
import { QuizTests } from './pages/QuizTests';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <MainWrapp container>
      <HeaderGrid item lg={12} md={12} sm={12} xs={12}>
        <LogoText
          variant='h1'
          component='h2'
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >Ministry of Smart Play</LogoText>
      </HeaderGrid>
      <SideBarGrid item lg={1} md={1} sm={2} xs={12}>
        <Item>SideBar</Item>
      </SideBarGrid>
      <MainGrid item lg={9} md={9} sm={8} xs={12}>
        <Item>
          <QuizTests />
        </Item>
      </MainGrid>
      <SideBarGrid item lg={2} md={2} sm={2} xs={12}>
        <Item>SideBarAdverts</Item>
      </SideBarGrid>
      <FooterGrid item lg={12} md={12} sm={12} xs={12}>
        <Footer />
      </FooterGrid>
    </MainWrapp>
  );
}

export default App;
