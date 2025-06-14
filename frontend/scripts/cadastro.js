const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  try {
    const response = await axios.post("http://localhost:8080/auth/register", {
      login: email,
      password: senha,
      role: "USER", // ajuste conforme necessário
    });

    console.log(response);
    window.location.href = "login.html";
  } catch (error) {
    console.log(error);
    alert(`Erro ao cadastrar usuário: ${error?.response?.data?.message || 'Erro desconhecido'}`);
  }
});

const senha = document.getElementById("senha");
const btn = document.getElementById("verSenha");

btn.addEventListener("click", () => {
  if (senha.type === "password") {
    senha.type = "text";
    btn.classList.add("fa-eye");
    btn.classList.remove("fa-eye-slash");
  } else {
    senha.type = "password";
    btn.classList.add("fa-eye-slash");
    btn.classList.remove("fa-eye");
  }
});
