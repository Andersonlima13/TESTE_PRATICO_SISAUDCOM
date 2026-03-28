// pages/Home/Home.jsx
import { useState } from "react";
import styled from "styled-components";
import FormButton from "../../components/ui/FormButton";
import InfoButton from "../../components/ui/InfoButton";
import UserWrapper from "./UserWrapper";
import Pagination from "./Pagination";

const PageContainer = styled.div`
  padding: 24px;
  flex: 1;
`;

const Title = styled.h1`
  color: #e0eaff;
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 4px;
`;

const Subtitle = styled.p`
  color: #4a6a98;
  font-size: 12px;
  margin: 0 0 20px;
`;

const ControlsBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
  flex-wrap: wrap;
`;

const SearchContainer = styled.div`
  flex: 1;
  min-width: 200px;
  background-color: #0a1a3e;
  border: 1px solid #1e3a6e;
  border-radius: 8px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchIcon = styled.span`
  color: #2e4a72;
  font-size: 14px;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  color: #a0b8d8;
  font-size: 12px;
  width: 100%;

  &::placeholder {
    color: #4a6a98;
  }
`;

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
    <PageContainer>

      {/* Cabeçalho da página */}
      <Title>Funcionários</Title>
      <Subtitle>
        Gerencie todos os funcionários cadastrados no sistema
      </Subtitle>

      {/* Barra de controles */}
      <ControlsBar>

        {/* Busca */}
        <SearchContainer>
          <SearchIcon>⌕</SearchIcon>
          <SearchInput
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome, ID, cargo..."
          />
        </SearchContainer>

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
      </ControlsBar>

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
    </PageContainer>
  );
}