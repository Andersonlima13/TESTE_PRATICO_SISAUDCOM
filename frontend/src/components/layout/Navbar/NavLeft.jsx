
export default function NavLeft() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        backgroundColor: "#1a2e5c",
        border: "1.5px solid #3b5ec6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "8px",
        color: "#a0b4e8",
        fontWeight: "500",
        letterSpacing: "0.5px",
        textAlign: "center",
        lineHeight: "1.2",
      }}>
        SIS<br />AUD
      </div>
      <span style={{
        color: "#8aaad8",
        fontSize: "13px",
        fontWeight: "500",
        letterSpacing: "1px",
      }}>
        SISAUDCON
      </span>
    </div>
  );
}