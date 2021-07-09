import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../state';
import { logout } from '../state/auth/actions';

import Button from './button';
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

const Right = styled.nav`
  position: relative;
  flex: 1;
  text-align: right;
`;

const Title = styled.h1`
  font-family: poppins;
  margin: 30px;
  color: #000;
  font-weight: 600;
`;

const NavItems = styled.button`
  outline: none;
  background-color: transparent;
  cursor: pointer;
  border: none;
  color: #8b9aa7;

  display: flex;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 165%;

  &:hover {
    color: #3c5090;
  }
`;

const Header = (props) => {
  const [{ auth }, dispatch] = useStateValue();

  const handleLogout = async () => {
    localStorage.clear();
    await dispatch(logout());
  };

  return (
    <Nav>
      <Title>DH Hoteling App</Title>

      {!isTokenExpired() && <NavItems>Home</NavItems>}
      {!isTokenExpired() && <NavItems>Settings</NavItems>}
      {!isTokenExpired() && <NavItems>Reserve</NavItems>}
      {!isTokenExpired() && (
        <Right>
          <Button primary onClick={() => handleLogout()}>
            Logout
          </Button>
        </Right>
      )}
    </Nav>
  );
};

export default Header;
