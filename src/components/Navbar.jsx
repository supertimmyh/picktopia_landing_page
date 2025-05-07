import styled from 'styled-components';
import { useState } from 'react';
import logo from '../assets/PICKTOPIA.svg';

const Nav = styled.nav`
  background-color: #ff7f50;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
  margin: 0;
  font-weight: bold;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  position: relative;
  outline: none;

  &:hover, &:focus {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px white;
  }

  @media (max-width: 768px) {
     width: 100%;
     text-align: center;
     padding: 1rem;
  }
`;


const BookNowButton = styled(NavLink)`
  background-color: white;
  color: #ff7f50;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover, &:focus {
    background-color: #fff8f6;
    color: #ff7f50;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px white, 0 0 0 4px #ff7f50;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const HamburgerIcon = styled.div`
  width: 24px;
  height: 2px;
  background-color: white;
  position: relative;
  transition: all 0.3s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }
`;

const NavContainer = styled.div`
  width: min(1200px, calc(100% - 2rem));
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoImage = styled.img`
  height: 90px;
  width: auto;
  margin-right: 0.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #ffffff;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1000;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #4CAF50;
    border-radius: 4px;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <LogoImage src={logo} alt="PICKTOPIA Logo" />
          <Logo>Picktopia Pickleball Club</Logo>
        </LogoContainer>
        <HamburgerButton onClick={toggleMenu}>
          <HamburgerIcon isOpen={isOpen} />
        </HamburgerButton>
        <NavLinks isOpen={isOpen}>
          <NavLink href="/">Home</NavLink>
          <BookNowButton href="/signup">Join Now</BookNowButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;