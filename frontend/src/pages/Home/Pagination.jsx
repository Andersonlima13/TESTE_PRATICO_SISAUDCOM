// pages/Home/Pagination.jsx
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
`;

const RecordsInfo = styled.span`
  color: #3a5a88;
  font-size: 11px;
`;

const PagesContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const PageButton = styled.button`
  background-color: ${(props) => (props.$active ? "#3b5ec6" : "#0a1a3e")};
  border: 1px solid ${(props) => (props.$active ? "#3b5ec6" : "#1e3a6e")};
  border-radius: 4px;
  padding: 4px 9px;
  color: ${(props) => (props.$active ? "#e0eaff" : "#5a7aa8")};
  font-size: 11px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  min-width: 28px;
  text-align: center;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Ellipsis = styled.span`
  color: #3a5a88;
  font-size: 11px;
  padding: 0 4px;
`;

export default function Pagination({
  totalRegistros,
  paginaAtual,
  totalPaginas,
  onPaginaChange,
}) {
  const pages = [];

  // gera janela de páginas ao redor da atual
  for (let i = 1; i <= totalPaginas; i++) {
    if (
      i === 1 ||
      i === totalPaginas ||
      (i >= paginaAtual - 1 && i <= paginaAtual + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <PaginationContainer>
      <RecordsInfo>
        Exibindo {Math.min(10, totalRegistros)} de {totalRegistros} registros
      </RecordsInfo>

      <PagesContainer>
        <PageButton
          onClick={() => onPaginaChange?.(paginaAtual - 1)}
          disabled={paginaAtual === 1}
        >
          ←
        </PageButton>

        {pages.map((page, i) =>
          page === "..." ? (
            <Ellipsis key={`ellipsis-${i}`}>...</Ellipsis>
          ) : (
            <PageButton
              key={page}
              $active={page === paginaAtual}
              onClick={() => onPaginaChange?.(page)}
            >
              {page}
            </PageButton>
          )
        )}

        <PageButton
          onClick={() => onPaginaChange?.(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
        >
          →
        </PageButton>
      </PagesContainer>
    </PaginationContainer>
  );
}