import React from 'react';
import styled from 'styled-components';
import LogoSrc from 'assets/logo_white.png';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const curURL = useLocation();
  const handleSignBtn = () => {
    if (localStorage.getItem('loginToken')) {
      localStorage.removeItem('loginToken');
      navigate('/');
    } else {
      curURL.pathname === '/signin' ? navigate('/signup') : navigate('/signin');
    }
  };

  return (
    <Container>
      <Logo src={LogoSrc} />
      <BtnGroup>
        <li>
          <Link to="/">
            <Btn>메인페이지</Btn>
          </Link>
        </li>
        <li>
          <Btn onClick={handleSignBtn}>
            {localStorage.getItem('loginToken')
              ? '로그아웃'
              : curURL.pathname === '/signin'
              ? '회원가입'
              : '로그인'}
          </Btn>
        </li>
      </BtnGroup>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #a5c9c7;
  width: 100%;
  height: 65px;
`;

const Logo = styled.img`
  width: 350px;
  margin-left: 20px;
`;

const BtnGroup = styled.ul`
  display: flex;
  margin-left: auto;
`;

const Btn = styled.button`
  margin-right: 20px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
