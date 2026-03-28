// pages/Home/Head.jsx
import styled from "styled-components";

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

const GRID_TEMPLATE = "60px 1.5fr 1fr 1fr 0.8fr 0.8fr 0.8fr 1.2fr";

const StyledHead = styled.div`
  display: grid;
  grid-template-columns: ${GRID_TEMPLATE};
  background-color: #0a1530;
  border-bottom: 1px solid #1e3a6e;
  padding: 0 16px;
`;

const HeaderCell = styled.div`
  padding: 10px 8px;
  color: ${(props) => (props.$isSorted ? "#a0c0f0" : "#4a6a98")};
  font-size: 11px;
  font-weight: 500;
  cursor: ${(props) => (props.$canSort ? "pointer" : "default")};
  user-select: none;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SortIcon = styled.span`
  font-size: 9px;
`;

export default function Head({ onSort, sortKey, sortDir }) {
  return (
    <StyledHead>
      {COLUMNS.map((col) => (
        <HeaderCell
          key={col.key}
          onClick={() => col.key !== "acoes" && onSort?.(col.key)}
          $isSorted={sortKey === col.key}
          $canSort={col.key !== "acoes"}
        >
          {col.label}
          {sortKey === col.key && (
            <SortIcon>
              {sortDir === "asc" ? "▲" : "▼"}
            </SortIcon>
          )}
        </HeaderCell>
      ))}
    </StyledHead>
  );
}