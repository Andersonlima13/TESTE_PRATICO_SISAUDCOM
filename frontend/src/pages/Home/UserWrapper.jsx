// pages/Home/UserWrapper.jsx
import Head from "./Head";
import UserItem from "./UserItem";

export default function UserWrapper({
  funcionarios,
  onVer,
  onEditar,
  onExcluir,
  onSort,
  sortKey,
  sortDir,
}) {
  return (
    <div style={{
      backgroundColor: "#0a1530",
      border: "1px solid #1e3a6e",
      borderRadius: "10px",
      overflow: "hidden",
    }}>
      <Head onSort={onSort} sortKey={sortKey} sortDir={sortDir} />

      {funcionarios.length === 0 ? (
        <div style={{
          padding: "40px",
          textAlign: "center",
          color: "#3a5a88",
          fontSize: "13px",
        }}>
          Nenhum funcionário encontrado.
        </div>
      ) : (
        funcionarios.map((f) => (
          <UserItem
            key={f.id}
            funcionario={f}
            onVer={onVer}
            onEditar={onEditar}
            onExcluir={onExcluir}
          />
        ))
      )}
    </div>
  );
}