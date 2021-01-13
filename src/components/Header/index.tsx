import React from 'react';

import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.NavBarTitleLink
        to='/'
      >
        LA Business
      </S.NavBarTitleLink>
      <S.NavBarWrapper>
        <S.NavBarList>
          <S.NavBarListItem>
            <S.NavBarLink
              to='/business/most-locations-business-report'
            >
              Most Locations Business
            </S.NavBarLink>
          </S.NavBarListItem>
          <S.NavBarListItem>
            <S.NavBarLink
              to='/business/oldest-business-report'
            >
              Oldest Business
            </S.NavBarLink>
          </S.NavBarListItem>
        </S.NavBarList>
      </S.NavBarWrapper>
      <S.NavBarUserLogo>EA</S.NavBarUserLogo>
    </S.HeaderWrapper>
  );
}

export default Header;
