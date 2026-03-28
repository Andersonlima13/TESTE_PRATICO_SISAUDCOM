import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 8px;
  padding: 11px 20px;
  font-size: 13px;
  font-weight: 500;
  width: ${props => props.fullWidth ? "100%" : "auto"};
  transition: background-color 0.2s, opacity 0.2s;
  
  ${({ variant, disabled }) => {
    if (variant === "primary") {
      return `
        background-color: ${disabled ? "#1e3a6e" : "#3b5ec6"};
        color: ${disabled ? "#3a5a88" : "#e0eaff"};
        border: none;
        cursor: ${disabled ? "not-allowed" : "pointer"};
        
        &:hover {
          background-color: ${!disabled ? "#2e4eb8" : "#1e3a6e"};
        }
      `;
    }
    if (variant === "ghost") {
      return `
        background-color: transparent;
        color: #7a9ac8;
        border: 1px solid #1e3a6e;
        cursor: pointer;
      `;
    }
  }}
`;

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
}) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
}