package backend.backend.entity;

import java.util.UUID;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Admin {
    private UUID id;
    private String nome;
    private String senha;

}
