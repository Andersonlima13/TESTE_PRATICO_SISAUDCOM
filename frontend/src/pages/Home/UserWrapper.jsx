// pages/Home/UserWrapper.jsx
import styled from "styled-components";
import Head from "./Head";
import UserItem from "./UserItem";

const Wrapper = styled.div`
  background-color: #0a1530;
  border: 1px solid #1e3a6e;
  border-radius: 10px;
  overflow: hidden;
`;

const EmptyMessage = styled.div`
  padding: 40px;
  text-align: center;
  color: #3a5a88;
  font-size: 13px;
`;

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
    <Wrapper>
      <Head onSort={onSort} sortKey={sortKey} sortDir={sortDir} />

      {funcionarios.length === 0 ? (
        <EmptyMessage>
          Nenhum funcionário encontrado.
        </EmptyMessage>
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
    </Wrapper>
  );
}