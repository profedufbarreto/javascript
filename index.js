const campoLogin = document.getElementById("campoLogin");
const campoSenha = document.getElementById("campoSenha");
const btnLogar = document.getElementById("btnLogar");
const campoTexto = document.getElementById("campoTexto");

    const autenticar = () => {
        const login = campoLogin.value;
        const senha = campoSenha.value;

        if(login === "dudu" && senha === "123456"){
            campoTexto.innerText = `${login} efetuou seu login com sucesso!`;
        }else{
            campoTexto.innerText = "Usuário ou senha inválidos!";
        }
    }

    btnLogar.addEventListener("click", autenticar);