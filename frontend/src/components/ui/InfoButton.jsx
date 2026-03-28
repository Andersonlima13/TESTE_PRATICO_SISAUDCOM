// components/ui/InfoButton.jsx
import styled from "styled-components";

const StyledInfoButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${(props) => (props.$active ? "#1a2e6e" : "#0a1a3e")};
  border: 1px solid ${(props) => (props.$active ? "#3b5ec6" : "#1e3a6e")};
  border-radius: 8px;
  padding: 7px 12px;
  color: ${(props) => (props.$active ? "#a0c0f0" : "#7a9ac8")};
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    border-color: #3b5ec6;
    color: #a0c0f0;
  }
`;

export default function InfoButton({ label, icon = "▼", onClick, active = false }) {
  return (
    <StyledInfoButton onClick={onClick} $active={active}>
      <span>{icon}</span>
      <span>{label}</span>
    </StyledInfoButton>
  );
}