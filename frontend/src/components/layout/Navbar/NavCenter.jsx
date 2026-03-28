import styled from "styled-components";

const NAV_LINKS = ["Home", "Desenvolvimento", "Soluções", "Contato"];

const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

const NavItem = styled.span`
  color: ${props => props.active ? "#c8d8f0" : "#5a7aa8"};
  font-size: 13px;
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: ${props => props.active ? "1.5px solid #3b5ec6" : "1.5px solid transparent"};
  transition: color 0.2s, border-color 0.2s;
`;

export default function NavCenter({ activeLink, onLinkClick }) {
  return (
    <Nav>
      {NAV_LINKS.map((link) => (
        <NavItem
          key={link}
          active={activeLink === link}
          onClick={() => onLinkClick?.(link)}
        >
          {link}
        </NavItem>
      ))}
    </Nav>
  );
}