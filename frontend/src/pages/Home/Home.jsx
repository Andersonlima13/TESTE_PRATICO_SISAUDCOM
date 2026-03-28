// pages/Home/Home.jsx
import { useState } from "react";
import FormButton from "../../components/ui/FormButton";
import InfoButton from "../../components/ui/InfoButton";
import UserWrapper from "./UserWrapper";
import Pagination from "./Pagination";

// mock — substituir pelo retorno da API
const MOCK_FUNCIONARIOS = [
  { id: "001", nome: "Lucas Mendes",   cargo: "Dev. Backend",   departamento: "Tecnologia", salario: 7500, dataAdmissao: "12/03/2023", ativo: true  },
  { id: "002", nome: "Ana Silva",      cargo: "Dev. Frontend",  departamento: "Tecnologia", salario: 6800, dataAdmissao: "05/07/2023", ativo: true  },
  { id: "003", nome: "Carlos Rocha",   cargo: "Contador",       departamento: "Fiscal",     salario: 5200, dataAdmissao: "18/01/2022", ativo: true  },
  { id: "004", nome: "Patricia Faria", cargo: "Analista Fiscal", departamento: "Fiscal",    salario: 4900, dataAdmissao: "22/09/2021", ativo: false },
  { id: "005", nome: "Rafael Torres",  cargo: "Gerente",        departamento: "Tributário", salario: 9300, dataAdmissao: "08/04/2020", ativo: true  },
];

export default function Home() {
  const [busca, setBusca]           = useState("");
  const [pagina, setPagina]         = useState(1);
  const [sortKey, setSortKey]       = useState(null);
  const [sortDir, setSortDir]       = useState("asc");
  const [filtroStatus, setFiltroStatus] = useState(false);

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  return (
    <div style={{ padding: "24px", flex: 1 }}>

      {/* Cabeçalho da página */}
      <h1 style={{ color: "#e0eaff", fontSize: "20px", fontWeight: "500", margin: "0 0 4px" }}>
        Funcionários
      </h1>
      <p style={{ color: "#4a6a98", fontSize: "12px", margin: "0 0 20px" }}>
        Gerencie todos os funcionários cadastrados no sistema
      </p>

      {/* Barra de controles */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>

        {/* Busca */}
        <div style={{
          flex: 1,
          minWidth: "200px",
          backgroundColor: "#0a1a3e",
          border: "1px solid #1e3a6e",
          borderRadius: "8px",
          padding: "7px 12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          <span style={{ color: "#2e4a72", fontSize: "14px" }}>⌕</span>
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome, ID, cargo..."
            style={{
              background: "none",
              border: "none",
              outline: "none",
              color: "#a0b8d8",
              fontSize: "12px",
              width: "100%",
            }}
          />
        </div>

        {/* InfoButtons de filtro */}
        <InfoButton
          label="Status"
          active={filtroStatus}
          onClick={() => setFiltroStatus((v) => !v)}
        />
        <InfoButton label="Departamento" />
        <InfoButton label="Admissão" />
        <InfoButton label="Exportar" icon="↓" />

        {/* Botão principal */}
        <FormButton variant="primary" onClick={() => {}}>
          + Novo funcionário
        </FormButton>
      </div>

      {/* Tabela */}
      <UserWrapper
        funcionarios={MOCK_FUNCIONARIOS}
        onVer={(id)     => console.log("ver", id)}
        onEditar={(id)  => console.log("editar", id)}
        onExcluir={(id) => console.log("excluir", id)}
        onSort={handleSort}
        sortKey={sortKey}
        sortDir={sortDir}
      />

      {/* Paginação */}
      <Pagination
        totalRegistros={48}
        paginaAtual={pagina}
        totalPaginas={10}
        onPaginaChange={setPagina}
      />
    </div>
  );
}