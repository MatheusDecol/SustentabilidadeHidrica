const formLogin = document.getElementById("formLogin");


formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    try {
        const response = await axios.post("http://localhost:8080/auth/login", {
            emailUsuario: email,
            password: senha
        });

        const token = response.data.token;
        localStorage.setItem("token", token);

        console.log(response);
        window.location.href = "principal.html";
    } catch (error) {
        console.error("Erro ao entrar", error);
        alert(`Erro ao entrar: ${error?.response?.data?.message || 'Erro desconhecido'}`);
    }
})

const btn = document.getElementById("verSenha");

btn.addEventListener('click', () => {
    if (senha.type === 'password') {
        senha.type = 'text';
        btn.classList.add('fa-eye');
        btn.classList.remove('fa-eye-slash');
    } else {
        senha.type = 'password';
        btn.classList.add('fa-eye-slash');
        btn.classList.remove('fa-eye');
    }
});
