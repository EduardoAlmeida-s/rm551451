"use strict"; //usar o modo restrito


//Adicione um atributo a cada objeto, sendo eles: 
// avatarusuário
//este atributo deve conter a url da imagem de avatar do usuário 
// MOSTRAR SENHA



//USUARIOS VALIDOS
// const usuario1 = {
//     nomeUsuario : "rita-lee",
//     senhaUsuario: "0000"
// }

// const usuario2 = {
//     nomeUsuario : "juquinha",
//     senhaUsuario: "123"
// }

// console.log(usuario1.nomeUsuario);
// console.log(usuario1.senhaUsuario);
// console.log(usuario2.nomeUsuario);
// console.log(usuario2.senhaUsuario);

// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1);
// listaDeUsuarios.push(usuario2);

// console.log(listaDeUsuarios);


let listaDeUsuarios = [
    {
        nomeCompleto : "Walter William da Silva",
        nomeUsuario : "Walter",
        senhaUsuario : "123456",
        avatarUsuario: "data:image/jpeg;base64,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"
    },
    {
        nomeCompleto : "Vitor Machado Miranda",
        nomeUsuario : "Tinho",
        senhaUsuario : "123456",
        avatarUsuario: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1_6-PtcF48iM3PkReAZlBpbSaLDhKNyisg&usqp=CAU"
    },
    {
        nomeCompleto : "Ronaldo Nazário de Lima",
        nomeUsuario : "Fenômeno",
        senhaUsuario : "123456",
        avatarUsuario: "https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos-de-sol_23-2149436188.jpg?w=2000"
    },
    {
        nomeCompleto : "Casimiro Miguel",
        nomeUsuario : "Cazé",
        senhaUsuario : "123456",  
        avatarUsuario: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"

    },
];




localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));





addEventListener('click', (evento)=>{
    
    let userInput = document.querySelector("#idUser");
    let passwordInput = document.querySelector("#idPass");
    let eyePass = document.querySelector(".fa");
    
    //MOSTRAR SENHA
    if(evento.target.className == "fa fa-eye" || evento.target.className == "fa fa-eye-slash"){
        
        evento.target.setAttribute("style", "cursor: pointer;");

        if(passwordInput.getAttribute("type") == "password"){
            passwordInput.setAttribute("type", "text");
            eyePass.setAttribute("class", "fa fa-eye-slash");
        }
        else{
            passwordInput.setAttribute("type", "password");
            eyePass.setAttribute("class", "fa fa-eye");
        }
    }





    //USUARIO QUE REPRESENTA OS DADOS QUE CHEGAM DO FORMULÁRIO
    const usuarioLogado = {
        nomeUsuarioLogado : userInput.value,
        senhaUsuarioLogado: passwordInput.value
    };

    //USUARIO QUE VAI REPRESENTAR OS DADOS VALIDADOS
    let usuarioValidado = {};

    let listaDeUsuariosRecuperada = JSON.parse(localStorage.getItem("listaUser"));


    if(evento.target.id == "btnSubmit"){
        try{
            listaDeUsuariosRecuperada.forEach((usuario)=>{
                if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && passwordInput.value == usuario.senhaUsuario){
                    
                    usuarioValidado = usuario;

                    throw "Usuário VALIDO!!!";
                }
            });
            throw "Usuário ou Senha Invalido!!!"
        }
        catch (err){
            
            const msgStatus = document.querySelector("#info");

            if(err == "Usuário VALIDO!!!"){
                msgStatus.setAttribute("style", "color:#00ff00;");
                msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} realizou o login com SUCESSO!</strong></span>`;

                //Adicionar o objeto USUÁRIO-VALIDADO no LOCAL-STORAGE
                localStorage.setItem("user-validado", JSON.stringify(usuarioValidado));


                //CRIANDO A AUTENTICAÇÃO
                let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                alert(token);

                localStorage.setItem("user-token", token);

                setTimeout(()=>{
                    window.location.href = "../sucesso.html";
                },3000);
            }
            else{
                msgStatus.setAttribute("style", "color:#ff0000;");
                msgStatus.innerHTML = `<span><strong>Login ou Usuario INCORRETOS!</strong></span>`;
            }
        }
    }
});