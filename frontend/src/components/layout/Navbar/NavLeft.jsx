
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoCircle = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #1a2e5c;
  border: 1.5px solid #3b5ec6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: #a0b4e8;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.2;
`;

const Title = styled.span`
  color: #8aaad8;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export default function NavLeft() {
  return (
    <Container>
      <LogoCircle>
        SIS<br />AUD
      </LogoCircle>
      <Title>
        SISAUDCON
      </Title>
    </Container>
  );
}