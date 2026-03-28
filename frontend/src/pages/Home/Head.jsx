// pages/Home/Head.jsx
const COLUMNS = [
  { key: "id",           label: "ID",           width: "60px"  },
  { key: "nome",         label: "Nome",          width: "160px" },
  { key: "cargo",        label: "Cargo",         width: "130px" },
  { key: "departamento", label: "Departamento",  width: "120px" },
  { key: "salario",      label: "Salário",       width: "90px"  },
  { key: "admissao",     label: "Admissão",      width: "100px" },
  { key: "status",       label: "Status",        width: "80px"  },
  { key: "acoes",        label: "Ações",         width: "140px" },
];

export default function Head({ onSort, sortKey, sortDir }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: COLUMNS.map((c) => c.width).join(" "),
      backgroundColor: "#0a1530",
      borderBottom: "1px solid #1e3a6e",
      padding: "0 12px",
    }}>
      {COLUMNS.map((col) => (
        <div
          key={col.key}
          onClick={() => col.key !== "acoes" && onSort?.(col.key)}
          style={{
            padding: "10px 8px",
            color: sortKey === col.key ? "#a0c0f0" : "#4a6a98",
            fontSize: "11px",
            fontWeight: "500",
            cursor: col.key !== "acoes" ? "pointer" : "default",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {col.label}
          {sortKey === col.key && (
            <span style={{ fontSize: "9px" }}>
              {sortDir === "asc" ? "▲" : "▼"}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}