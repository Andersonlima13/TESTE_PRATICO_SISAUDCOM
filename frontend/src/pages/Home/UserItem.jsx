// pages/Home/UserItem.jsx
import FormButton from "../../components/ui/FormButton";

const GRID = "60px 1.5fr 1fr 1fr 0.8fr 0.8fr 0.8fr 1.2fr";

function Avatar({ nome }) {
  const initials = nome
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div style={{
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      backgroundColor: "#1a2e6e",
      border: "1px solid #2e4a8a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "10px",
      fontWeight: "500",
      color: "#7a9ac8",
      flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

function StatusBadge({ ativo }) {
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      borderRadius: "20px",
      padding: "3px 10px",
      fontSize: "10px",
      fontWeight: "500",
      margin: "6px 6px 6px 0",
      backgroundColor: ativo ? "#0e3028" : "#1e1030",
      color: ativo ? "#3acf8f" : "#8060c0",
      border: `2px solid ${ativo ? "#1a6048" : "#3a2068"}`,
    }}>
      {ativo ? "Ativo" : "Inativo"}
    </span>
  );
}

export default function UserItem({ funcionario, onVer, onEditar, onExcluir }) {
  const { id, nome, cargo, departamento, salario, dataAdmissao, ativo } = funcionario;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: GRID,
        padding: "10px 16px",
        borderBottom: "1px solid #112040",
        alignItems: "center",
        transition: "background-color 0.15s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0f2050")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
    >
      <span style={{ color: "#5a7aa8", fontSize: "11px" }}>#{id}</span>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Avatar nome={nome} />
        <span style={{ color: "#a0b8d8", fontSize: "11px", lineHeight: "1.3" }}>
          {nome}
        </span>
      </div>

      <span style={{ color: "#a0b8d8", fontSize: "11px" }}>{cargo}</span>
      <span style={{ color: "#a0b8d8", fontSize: "11px" }}>{departamento}</span>

      <span style={{ color: "#a0b8d8", fontSize: "11px" }}>
        R$ {salario?.toLocaleString("pt-BR")}
      </span>

      <span style={{ color: "#a0b8d8", fontSize: "11px" }}>{dataAdmissao}</span>

      <StatusBadge ativo={ativo} />

      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <FormButton size="sm" variant="ghost" onClick={() => onVer?.(id)}>
          Ver
        </FormButton>
        <FormButton size="sm" variant="ghost" onClick={() => onEditar?.(id)}>
          Editar
        </FormButton>
        <FormButton size="sm" variant="danger" onClick={() => onExcluir?.(id)}>
          Excluir
        </FormButton>
      </div>
    </div>
  );
}