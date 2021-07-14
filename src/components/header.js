import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../state';
import { logout } from '../state/auth/actions';

import { useHistory } from 'react-router-dom';
import { isTokenExpired } from '../utils/jwt';

const Nav = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: white;
  position: ${(props) => (props.fixed ? 'fixed' : 'relative')};
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

`;
const RightNav = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row-reverse;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  background-color: red;

  position: relative;
  flex: 1;
  flex-direction: row-reverse;
  text-align: right;
`;

const Title = styled.h1`
  font-family: poppins;
  margin: 30px;
  color: #000;
  font-weight: 500;
`;
const UserText = styled.h1`
  font-family: poppins;
  font-size: 15px;
  margin: 5%;
  color: #000;
`;
const NavItems = styled.button`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  border: none;
  color: #8b9aa7;
  transition: all 0.3s ease;

  &:hover {
    color: #3c5090;
  }
`;

const Header = (props) => {
  const [{ auth }, dispatch] = useStateValue();
  const history = useHistory();
  const handleLogout = async () => {
    localStorage.clear();
    await dispatch(logout());
  };

  return (
    <Nav>
      <Title>DH Hoteling App</Title>
      <NavMenu>
        {!isTokenExpired() && <NavItems onClick={()=> history.push('/')}>Home</NavItems>}
        {!isTokenExpired() && <NavItems onClick={()=> history.push('/setting')}>Settings</NavItems>}
        {!isTokenExpired() && <NavItems onClick={()=> history.push('/reserve')}>Reserve</NavItems>}
      </NavMenu>
      <RightNav>
        {!isTokenExpired() && (
          <NavItems primary onClick={() => handleLogout()}>
            Logout
          </NavItems>
        )}
        {!isTokenExpired() && <UserText>{props.email}</UserText>}
      </RightNav>
    </Nav>
  );
};

export default Header;
