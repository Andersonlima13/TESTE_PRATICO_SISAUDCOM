package backend.backend.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import backend.backend.entity.Admin;
import backend.backend.repository.AdminRepository;
import org.springframework.security.crypto.password.PasswordEncoder;

@Component
public class AdminPasswordBootstrap implements CommandLineRunner {

    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminPasswordBootstrap(AdminRepository adminRepository, PasswordEncoder passwordEncoder) {
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        adminRepository.findByNome("Administrador").ifPresent(this::ensureEncodedPassword);
    }

    private void ensureEncodedPassword(Admin admin) {
        if (admin.getSenha() != null && admin.getSenha().startsWith("$2")) {
            return;
        }

        admin.setSenha(passwordEncoder.encode(admin.getSenha()));
        adminRepository.save(admin);
    }
}