// components/ui/FormButton.jsx
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 8px;
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: background-color 0.2s, opacity 0.2s;
  white-space: nowrap;

  /* Variant styles */
  ${(props) => {
    switch (props.$variant) {
      case "danger":
        return `
          background-color: transparent;
          color: #c05a5a;
          border: 1px solid #3a1a1a;
        `;
      case "ghost":
        return `
          background-color: transparent;
          color: #7a9ac8;
          border: 1px solid #1e3a6e;
        `;
      case "primary":
      default:
        return `
          background-color: ${props.disabled ? "#1e3a6e" : "#3b5ec6"};
          color: ${props.disabled ? "#3a5a88" : "#e0eaff"};
          border: none;
        `;
    }
  }}

  /* Size styles */
  ${(props) => {
    switch (props.$size) {
      case "sm":
        return `
          padding: 4px 10px;
          fontSize: 11px;
        `;
      case "lg":
        return `
          padding: 10px 20px;
          fontSize: 13px;
        `;
      case "md":
      default:
        return `
          padding: 7px 14px;
          fontSize: 12px;
        `;
    }
  }}
`;

export default function FormButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
}) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      $size={size}
    >
      {children}
    </StyledButton>
  );
}