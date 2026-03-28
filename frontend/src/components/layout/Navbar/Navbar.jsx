// components/layout/Navbar/Navbar.jsx
import { useState } from "react";
import NavLeft from "./NavLeft";
import NavCenter from "./NavCenter";
import NavRight from "./NavRight";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header style={{
      backgroundColor: "#0a1530",
      borderBottom: "1px solid #1e3a6e",
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <NavLeft />
      <NavCenter activeLink={activeLink} onLinkClick={setActiveLink} />
      <NavRight />
    </header>
  );
}