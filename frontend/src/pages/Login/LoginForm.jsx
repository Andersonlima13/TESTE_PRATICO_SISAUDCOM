// pages/Login/LoginForm.jsx
import { useState } from "react";
import InputForm from "../../components/ui/InputForm";
import Button from "../../components/ui/Button";

export default function LoginForm({ onSubmit, loading }) {
  const [form, setForm] = useState({ email: "", senha: "" });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <InputForm
        label="E-mail do administrador"
        type="email"
        name="email"
        placeholder="admin@empresa.com"
        value={form.email}
        onChange={handleChange}
      />
      <InputForm
        label="Senha"
        type="password"
        name="senha"
        placeholder="••••••••"
        value={form.senha}
        onChange={handleChange}
      />
      <Button type="submit" fullWidth disabled={loading}>
        {loading ? "Entrando..." : "Entrar no sistema"}
      </Button>
    </form>
  );
}