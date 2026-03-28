// components/layout/Navbar/NavRight.jsx
export default function NavRight() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{
        width: 0,
        height: 0,
        borderTop: "6px solid transparent",
        borderBottom: "6px solid transparent",
        borderLeft: "10px solid #5b7fd4",
      }} />
      <span style={{
        color: "#c8d8f0",
        fontSize: "14px",
        fontWeight: "500",
      }}>
        SAAM
      </span>
    </div>
  );
}