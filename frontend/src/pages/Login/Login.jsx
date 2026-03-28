// pages/Login/Login.jsx
import LoginForm from "./LoginForm";

const CheckIcon = () => (
  <div style={{
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    backgroundColor: "#1a2e6e",
    border: "2px solid #3b5ec6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  }}>
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
  </div>
);

export default function Login({ onSubmit, loading }) {
  return (
    <div style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      position: "relative",
    }}>

      {/* Círculos decorativos de fundo */}
      {[320, 480, 640].map((size) => (
        <div key={size} style={{
          position: "absolute",
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          border: `1px solid rgba(91,127,212,${size === 320 ? 0.12 : size === 480 ? 0.07 : 0.03})`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }} />
      ))}

      {/* Card do formulário */}
      <div style={{
        backgroundColor: "#0f2050",
        border: "1px solid #1e3a6e",
        borderRadius: "12px",
        padding: "36px 40px",
        width: "100%",
        maxWidth: "360px",
        position: "relative",
        zIndex: 1,
      }}>
        <CheckIcon />

        <h1 style={{
          color: "#e0eaff",
          fontSize: "18px",
          fontWeight: "500",
          textAlign: "center",
          margin: "0 0 6px",
        }}>
          Acesso ao Sistema
        </h1>

        <p style={{
          color: "#5a7aa8",
          fontSize: "11px",
          textAlign: "center",
          letterSpacing: "0.5px",
          margin: "0 0 28px",
        }}>
          AGILIDADE · AUTONOMIA · SEGURANÇA
        </p>

        <LoginForm onSubmit={onSubmit} loading={loading} />

        <p style={{
          color: "#2e4a72",
          fontSize: "11px",
          textAlign: "center",
          marginTop: "16px",
        }}>
          SAAM · Sistema de Gestão
        </p>
      </div>
    </div>
  );
}