package backend.backend.dto;

import jakarta.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class AdminDto {
    @NotBlank
    private String nome;

    @NotBlank
    private String senha;

}
