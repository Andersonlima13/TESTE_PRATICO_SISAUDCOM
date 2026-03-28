import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 10px solid #5b7fd4;
`;

const Title = styled.span`
  color: #c8d8f0;
  font-size: 14px;
  font-weight: 500;
`;

export default function NavRight() {
  return (
    <Container>
      <Triangle />
      <Title>
        SAAM
      </Title>
    </Container>
  );
}