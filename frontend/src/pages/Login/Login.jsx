import styled from "styled-components";
import LoginForm from "./LoginForm";

const PageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
`;

const DecorativeCircle = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  border: 1px solid rgba(91, 127, 212, ${props => props.opacity});
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const Card = styled.div`
  background-color: #0f2050;
  border: 1px solid #1e3a6e;
  border-radius: 12px;
  padding: 36px 40px;
  width: 100%;
  max-width: 360px;
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #1a2e6e;
  border: 2px solid #3b5ec6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
`;

const Title = styled.h1`
  color: #e0eaff;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin: 0 0 6px;
`;

const Subtitle = styled.p`
  color: #5a7aa8;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.5px;
  margin: 0 0 28px;
`;

const BrandFooter = styled.p`
  color: #2e4a72;
  font-size: 11px;
  text-align: center;
  margin-top: 16px;
`;

const CheckIcon = () => (
  <IconWrapper>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#3b5ec6" />
      <polyline
        points="7,12 10,15 17,9"
        stroke="#e0eaff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconWrapper>
);

export default function Login({ onSubmit, loading }) {
  return (
    <PageContainer>
      {[
        { size: 320, opacity: 0.12 },
        { size: 480, opacity: 0.07 },
        { size: 640, opacity: 0.03 }
      ].map((circle) => (
        <DecorativeCircle 
          key={circle.size} 
          size={circle.size} 
          opacity={circle.opacity} 
        />
      ))}

      <Card>
        <CheckIcon />
        <Title>Acesso ao Sistema</Title>
        <Subtitle>AGILIDADE · AUTONOMIA · SEGURANÇA</Subtitle>
        <LoginForm onSubmit={onSubmit} loading={loading} />
        <BrandFooter>SAAM · Sistema de Gestão</BrandFooter>
      </Card>
    </PageContainer>
  );
}