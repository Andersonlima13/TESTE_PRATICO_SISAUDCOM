// components/layout/Navbar/Navbar.jsx
import { useState } from "react";
import styled from "styled-components";
import NavLeft from "./NavLeft";
import NavCenter from "./NavCenter";
import NavRight from "./NavRight";

const StyledHeader = styled.header`
  background-color: #0a1530;
  border-bottom: 1px solid #1e3a6e;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <StyledHeader>
      <NavLeft />
      <NavCenter activeLink={activeLink} onLinkClick={setActiveLink} />
      <NavRight />
    </StyledHeader>
  );
}