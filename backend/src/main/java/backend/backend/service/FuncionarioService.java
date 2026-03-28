package backend.backend.service;

import java.sql.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import backend.backend.dto.FuncionarioDto;
import backend.backend.entity.Funcionario;
import backend.backend.repository.FuncionarioRepository;

@Service
public class FuncionarioService {

    private final FuncionarioRepository funcionarioRepository;

    public FuncionarioService(FuncionarioRepository funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository;
    }

    public List<FuncionarioDto> listarTodos() {
        return funcionarioRepository.findAll()
                .stream()
                .map(this::toDto)
                .toList();
    }

    public FuncionarioDto buscarPorId(UUID id) {
        return toDto(buscarOuLancarErro(id));
    }

    public FuncionarioDto criar(FuncionarioDto dto) {
        Funcionario funcionario = new Funcionario();
        aplicarDados(funcionario, dto);
        funcionario.setAtivo(true);
        return toDto(funcionarioRepository.save(funcionario));
    }

    public FuncionarioDto atualizar(UUID id, FuncionarioDto dto) {
        Funcionario funcionario = buscarOuLancarErro(id);
        aplicarDados(funcionario, dto);
        return toDto(funcionarioRepository.save(funcionario));
    }

    public void excluir(UUID id) {
        funcionarioRepository.delete(buscarOuLancarErro(id));
    }

    private Funcionario buscarOuLancarErro(UUID id) {
        return funcionarioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Funcionario nao encontrado"));
    }

    private void aplicarDados(Funcionario funcionario, FuncionarioDto dto) {
        funcionario.setNome(dto.getNome());
        funcionario.setDataAdmissao(parseDate(dto.getDataAdmissao()));
        funcionario.setSalario(dto.getSalario());
    }

    private Date parseDate(String dataAdmissao) {
        if (dataAdmissao == null || dataAdmissao.isBlank()) {
            return null;
        }
        try {
            return Date.valueOf(dataAdmissao);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Data de admissao invalida. Use o formato yyyy-MM-dd");
        }
    }

    private FuncionarioDto toDto(Funcionario funcionario) {
        FuncionarioDto dto = new FuncionarioDto();
        dto.setNome(funcionario.getNome());
        dto.setDataAdmissao(funcionario.getDataAdmissao() != null
                ? funcionario.getDataAdmissao().toString()
                : null);
        dto.setSalario(funcionario.getSalario());
        return dto;
    }
}