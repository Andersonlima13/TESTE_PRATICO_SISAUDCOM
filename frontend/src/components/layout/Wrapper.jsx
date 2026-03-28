import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #0d1b3e;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default function Wrapper({ children }) {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
}