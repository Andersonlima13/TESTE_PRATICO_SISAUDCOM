// components/ui/InputForm.jsx
export default function InputForm({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && (
        <label style={{
          color: "#7a9ac8",
          fontSize: "11px",
          fontWeight: "500",
        }}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: "#0a1a3e",
          border: "1px solid #1e3a6e",
          borderRadius: "8px",
          padding: "10px 14px",
          color: "#c0d4f0",
          fontSize: "13px",
          outline: "none",
          width: "100%",
          boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#3b5ec6")}
        onBlur={(e) => (e.target.style.borderColor = "#1e3a6e")}
      />
    </div>
  );
}