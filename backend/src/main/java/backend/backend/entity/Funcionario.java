package backend.backend.entity;

import java.sql.Date;
import java.util.UUID;

import jakarta.validation.constraints.Positive;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Funcionario {
    private UUID id;
    private String nome;
    private Date dataAdmissao;

    @Positive
    private Double salario;
    private boolean ativo;
}
