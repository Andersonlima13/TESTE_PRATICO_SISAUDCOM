package backend.backend.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.backend.entity.Funcionario;

public interface FuncionarioRepository extends JpaRepository<Funcionario, UUID> {
    Optional<Funcionario> findById(UUID id);

    Optional<Funcionario> findByNome(String nome);
}