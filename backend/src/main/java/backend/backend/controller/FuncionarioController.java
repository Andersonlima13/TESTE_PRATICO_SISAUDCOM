package backend.backend.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.dto.FuncionarioDto;
import backend.backend.service.FuncionarioService;

@RestController
@RequestMapping("/funcionarios")
public class FuncionarioController {

    @Autowired
    private final FuncionarioService funcionarioService;

    public FuncionarioController(FuncionarioService funcionarioService) {
        this.funcionarioService = funcionarioService;
    }

    @GetMapping
    public ResponseEntity<List<FuncionarioDto>> listarTodos() {
        return ResponseEntity.ok(funcionarioService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FuncionarioDto> buscarPorId(@PathVariable UUID id) {
        return ResponseEntity.ok(funcionarioService.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<FuncionarioDto> criar(@Validated @RequestBody FuncionarioDto funcionarioDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(funcionarioService.criar(funcionarioDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FuncionarioDto> atualizar(@PathVariable UUID id,
            @Validated @RequestBody FuncionarioDto funcionarioDto) {
        return ResponseEntity.ok(funcionarioService.atualizar(id, funcionarioDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable UUID id) {
        funcionarioService.excluir(id);
        return ResponseEntity.noContent().build();
    }

}
