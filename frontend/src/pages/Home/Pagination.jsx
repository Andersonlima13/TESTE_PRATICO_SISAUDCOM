// pages/Home/Pagination.jsx
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

  const btnStyle = (active) => ({
    backgroundColor: active ? "#3b5ec6" : "#0a1a3e",
    border: `1px solid ${active ? "#3b5ec6" : "#1e3a6e"}`,
    borderRadius: "4px",
    padding: "4px 9px",
    color: active ? "#e0eaff" : "#5a7aa8",
    fontSize: "11px",
    cursor: "pointer",
    minWidth: "28px",
    textAlign: "center",
  });

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "14px",
    }}>
      <span style={{ color: "#3a5a88", fontSize: "11px" }}>
        Exibindo {Math.min(10, totalRegistros)} de {totalRegistros} registros
      </span>

      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <button
          style={btnStyle(false)}
          onClick={() => onPaginaChange?.(paginaAtual - 1)}
          disabled={paginaAtual === 1}
        >
          ←
        </button>

        {pages.map((page, i) =>
          page === "..." ? (
            <span key={`ellipsis-${i}`} style={{ color: "#3a5a88", fontSize: "11px", padding: "0 4px" }}>
              ...
            </span>
          ) : (
            <button
              key={page}
              style={btnStyle(page === paginaAtual)}
              onClick={() => onPaginaChange?.(page)}
            >
              {page}
            </button>
          )
        )}

        <button
          style={btnStyle(false)}
          onClick={() => onPaginaChange?.(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
        >
          →
        </button>
      </div>
    </div>
  );
}