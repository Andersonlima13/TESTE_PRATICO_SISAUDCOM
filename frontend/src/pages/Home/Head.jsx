// pages/Home/Head.jsx
const COLUMNS = [
  { key: "id",           label: "ID"           },
  { key: "nome",         label: "Nome"         },
  { key: "cargo",        label: "Cargo"        },
  { key: "departamento", label: "Departamento" },
  { key: "salario",      label: "Salário"      },
  { key: "admissao",     label: "Admissão"     },
  { key: "status",       label: "Status"       },
  { key: "acoes",        label: "Ações"        },
];

const GRID = "60px 1.5fr 1fr 1fr 0.8fr 0.8fr 0.8fr 1.2fr";

export default function Head({ onSort, sortKey, sortDir }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: GRID,
      backgroundColor: "#0a1530",
      borderBottom: "1px solid #1e3a6e",
      padding: "0 16px",
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