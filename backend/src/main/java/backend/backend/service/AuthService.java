package backend.backend.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import backend.backend.dto.AdminDto;
import backend.backend.dto.AuthResponseDto;
import backend.backend.entity.Admin;
import backend.backend.repository.AdminRepository;

@Service
public class AuthService {

    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(AdminRepository adminRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public AuthResponseDto autenticar(AdminDto adminDto) {
        Admin admin = adminRepository.findByNome(adminDto.getNome())
                .orElseThrow(() -> new IllegalArgumentException("Admin nao encontrado"));

        if (!passwordEncoder.matches(adminDto.getSenha(), admin.getSenha())) {
            throw new IllegalArgumentException("Senha invalida");
        }

        String token = jwtService.generateToken(admin);
        return new AuthResponseDto(token, "Bearer");
    }

}
