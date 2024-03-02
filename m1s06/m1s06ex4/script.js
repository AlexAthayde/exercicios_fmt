function salvarUsuario() {
    const nome = prompt("Digite seu nome:");
    const idade = parseInt(prompt("Digite sua idade:"));
    const email = prompt("Digite seu email:");
  
    const usuario = {
      nome,
      idade,
      email,
    };
  
    localStorage.setItem("user", JSON.stringify(usuario));
  
    alert("Usuário salvo com sucesso!");
  }
  
  salvarUsuario();