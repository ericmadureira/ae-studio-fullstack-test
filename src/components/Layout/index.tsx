import React from 'react';

import Header from '../Header';
import * as S from './styles';

interface LayoutProps {
  children?: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutWrapper>
      <Header />
      <S.LayoutMain>
        {children}
      </S.LayoutMain>
    </S.LayoutWrapper>
  );
};

export default Layout;
