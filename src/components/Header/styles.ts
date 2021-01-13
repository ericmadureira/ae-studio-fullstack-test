import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: #CCCCCC;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const NavBarWrapper = styled.nav`
`;

export const NavBarList = styled.ul`
`;

export const NavBarListItem = styled.li`
  display: inline-block;
  list-style-type: none;
  margin-right: 2rem;
`;

export const NavBarLink = styled(Link)`
  color: #000;
  font-size: 1rem;
  text-decoration: none;
`;

export const NavBarTitleLink = styled(Link)`
  color: #000;
  font-size: 2rem;
  text-decoration: none;
`;

export const NavBarUserLogo = styled.div`
  align-items: center;
  border: solid 2px #000;
  border-radius: 50%;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  width: 40px;
`;
