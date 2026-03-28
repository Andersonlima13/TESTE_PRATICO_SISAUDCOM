// components/ui/InfoButton.jsx
export default function InfoButton({ label, icon = "▼", onClick, active = false }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        backgroundColor: active ? "#1a2e6e" : "#0a1a3e",
        border: `1px solid ${active ? "#3b5ec6" : "#1e3a6e"}`,
        borderRadius: "8px",
        padding: "7px 12px",
        color: active ? "#a0c0f0" : "#7a9ac8",
        fontSize: "12px",
        cursor: "pointer",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#3b5ec6";
        e.currentTarget.style.color = "#a0c0f0";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = active ? "#3b5ec6" : "#1e3a6e";
        e.currentTarget.style.color = active ? "#a0c0f0" : "#7a9ac8";
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}