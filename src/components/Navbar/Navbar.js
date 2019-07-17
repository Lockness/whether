import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: #6574cd;
  padding: 1rem 1rem 0 1rem;
`;

const StyledNavBrand = styled.span`
  letter-spacing: -0.05em;
  font-size: 1.875rem;
  font-weight: 700;
`;

const Navbar = () => (
  <StyledNav>
    <StyledNavBrand>Whether</StyledNavBrand>
  </StyledNav>
);

export default Navbar;
