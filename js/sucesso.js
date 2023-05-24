


if(localStorage.getItem("user-token") != null){
    const bemVindoEl = document.querySelector("#bemvindo-user");
    const botaoLogout = document.querySelector("#btnSair");
    const avatarUsuario = document.querySelector("img");

    //RECUPERANDO O OBJETO USER-VALIDADO DO LOCAL-STORAGE
    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));
    avatarUsuario.setAttribute("src", usuarioValidado.avatarUsuario);
    bemVindoEl.innerHTML = usuarioValidado.nomeCompleto;

    //REMOVENDO OS ITENS DO LOCAL-STORAGE
    botaoLogout.addEventListener("click", ()=>{
        localStorage.removeItem("user-validado");
        localStorage.removeItem("user-token");
        window.location.href = "../login.html";
    });
}
else{
    alert("Você precisa estar logado para acessar esta página!")
    window.location.href = "../login.html";
}
