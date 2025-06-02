const entrar = document.getElementById("entrar");

entrar.addEventListener("click", 
    function()
    {
        const user = document.getElementById("login").value;
        const senha = document.getElementById("senha").value;

        const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];


        let usuarioEncontrado = usuariosCadastrados.find(
            u => u.usuario === user && u.senha === senha

        );

        if (usuarioEncontrado)
        {
            localStorage.setItem("userLogado", user); // cria item no localStorage
            window.location.href = "dashboard.html"; // redireciona para o dashboard se login correto
        }
        else
        {
            document.getElementById("mensagem").textContent = "Login ou senha incorretos";
        }
    }
)