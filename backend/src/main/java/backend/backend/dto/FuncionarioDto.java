package backend.backend.dto;

import java.math.BigDecimal;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FuncionarioDto {
    @NotBlank
    private String nome;

    private String dataAdmissao;

    @NotNull
    @Positive
    private BigDecimal salario;

}
