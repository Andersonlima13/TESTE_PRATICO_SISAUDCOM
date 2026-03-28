// components/ui/FormButton.jsx
export default function FormButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
}) {
  const variants = {
    primary: {
      backgroundColor: disabled ? "#1e3a6e" : "#3b5ec6",
      color: disabled ? "#3a5a88" : "#e0eaff",
      border: "none",
    },
    danger: {
      backgroundColor: "transparent",
      color: "#c05a5a",
      border: "1px solid #3a1a1a",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#7a9ac8",
      border: "1px solid #1e3a6e",
    },
  };

  const sizes = {
    sm: { padding: "4px 10px", fontSize: "11px" },
    md: { padding: "7px 14px", fontSize: "12px" },
    lg: { padding: "10px 20px", fontSize: "13px" },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...variants[variant],
        ...sizes[size],
        borderRadius: "8px",
        fontWeight: "500",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transition: "background-color 0.2s, opacity 0.2s",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}