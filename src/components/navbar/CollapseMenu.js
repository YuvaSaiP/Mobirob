import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><a href="/" onClick={props.handleNavbar}>Home</a></li>
          <li><a href="/" onClick={props.handleNavbar}>About Us</a></li>
          <li><a href="/" onClick={props.handleNavbar}>Products</a></li>
          <li><a href="/" onClick={props.handleNavbar}>Contact Us</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #ffffff;
  position: fixed;
  top: 3.5rem;
  display:flex;
  justify-content:center;
  text-align:center;
  left: 0;
  right: 0;
  box-shadow: 0px 1px 8px #CCD6F6;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1rem;
    line-height: 2;
    color: #003A52;
    /* color: #0A192F; */
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    font-weight:700;

    &:hover {
      color: #2DBBC4;
      color: #FFC483;
    }
  }
`;