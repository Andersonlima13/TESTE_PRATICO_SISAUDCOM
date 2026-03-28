// components/layout/Navbar/NavCenter.jsx
const NAV_LINKS = ["Home", "Desenvolvimento", "Soluções", "Contato"];

export default function NavCenter({ activeLink, onLinkClick }) {
  return (
    <nav style={{ display: "flex", gap: "24px" }}>
      {NAV_LINKS.map((link) => (
        <span
          key={link}
          onClick={() => onLinkClick?.(link)}
          style={{
            color: activeLink === link ? "#c8d8f0" : "#5a7aa8",
            fontSize: "13px",
            cursor: "pointer",
            paddingBottom: "2px",
            borderBottom: activeLink === link ? "1.5px solid #3b5ec6" : "1.5px solid transparent",
            transition: "color 0.2s, border-color 0.2s",
          }}
        >
          {link}
        </span>
      ))}
    </nav>
  );
}