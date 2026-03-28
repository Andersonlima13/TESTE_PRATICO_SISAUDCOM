import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  color: #7a9ac8;
  font-size: 11px;
  font-weight: 500;
`;

const StyledInput = styled.input`
  background-color: #0a1a3e;
  border: 1px solid #1e3a6e;
  border-radius: 8px;
  padding: 10px 14px;
  color: #c0d4f0;
  font-size: 13px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    border-color: #3b5ec6;
  }
`;

export default function InputForm({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}