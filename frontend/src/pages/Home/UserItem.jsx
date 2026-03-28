// pages/Home/UserItem.jsx
import styled from "styled-components";
import FormButton from "../../components/ui/FormButton";

const GRID = "60px 1.5fr 1fr 1fr 0.8fr 0.8fr 0.8fr 1.2fr";

const StyledAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #1a2e6e;
  border: 1px solid #2e4a8a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
  color: #7a9ac8;
  flex-shrink: 0;
`;

const StyledStatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 10px;
  font-weight: 500;
  margin: 6px 6px 6px 0;
  background-color: ${(props) => (props.$ativo ? "#0e3028" : "#1e1030")};
  color: ${(props) => (props.$ativo ? "#3acf8f" : "#8060c0")};
  border: 2px solid ${(props) => (props.$ativo ? "#1a6048" : "#3a2068")};
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: ${GRID};
  padding: 10px 16px;
  border-bottom: 1px solid #112040;
  align-items: center;
  transition: background-color 0.15s;

  &:hover {
    background-color: #0f2050;
  }
`;

const IdText = styled.span`
  color: #5a7aa8;
  font-size: 11px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NameText = styled.span`
  color: #a0b8d8;
  font-size: 11px;
  line-height: 1.3;
`;

const ColumnText = styled.span`
  color: #a0b8d8;
  font-size: 11px;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

function Avatar({ nome }) {
  const initials = nome
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return <StyledAvatar>{initials}</StyledAvatar>;
}

function StatusBadge({ ativo }) {
  return (
    <StyledStatusBadge $ativo={ativo}>
      {ativo ? "Ativo" : "Inativo"}
    </StyledStatusBadge>
  );
}

export default function UserItem({ funcionario, onVer, onEditar, onExcluir }) {
  const { id, nome, cargo, departamento, salario, dataAdmissao, ativo } = funcionario;

  return (
    <ItemContainer>
      <IdText>#{id}</IdText>

      <FlexRow>
        <Avatar nome={nome} />
        <NameText>{nome}</NameText>
      </FlexRow>

      <ColumnText>{cargo}</ColumnText>
      <ColumnText>{departamento}</ColumnText>

      <ColumnText>
        R$ {salario?.toLocaleString("pt-BR")}
      </ColumnText>

      <ColumnText>{dataAdmissao}</ColumnText>

      <StatusBadge ativo={ativo} />

      <ActionsContainer>
        <FormButton size="sm" variant="ghost" onClick={() => onVer?.(id)}>
          Ver
        </FormButton>
        <FormButton size="sm" variant="ghost" onClick={() => onEditar?.(id)}>
          Editar
        </FormButton>
        <FormButton size="sm" variant="danger" onClick={() => onExcluir?.(id)}>
          Excluir
        </FormButton>
      </ActionsContainer>
    </ItemContainer>
  );
}