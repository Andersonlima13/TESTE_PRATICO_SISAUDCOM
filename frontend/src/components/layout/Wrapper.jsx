export default function Wrapper({ children }) {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "#0d1b3e",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }}>
      {children}
    </div>
  );
}