// components/ui/Button.jsx
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
}) {
  const variants = {
    primary: {
      backgroundColor: disabled ? "#1e3a6e" : "#3b5ec6",
      color: disabled ? "#3a5a88" : "#e0eaff",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#7a9ac8",
      border: "1px solid #1e3a6e",
      cursor: "pointer",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...variants[variant],
        borderRadius: "8px",
        padding: "11px 20px",
        fontSize: "13px",
        fontWeight: "500",
        width: fullWidth ? "100%" : "auto",
        transition: "background-color 0.2s, opacity 0.2s",
      }}
      onMouseEnter={(e) => {
        if (!disabled && variant === "primary")
          e.target.style.backgroundColor = "#2e4eb8";
      }}
      onMouseLeave={(e) => {
        if (!disabled && variant === "primary")
          e.target.style.backgroundColor = "#3b5ec6";
      }}
    >
      {children}
    </button>
  );
}