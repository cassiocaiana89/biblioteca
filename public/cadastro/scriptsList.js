document.addEventListener("DOMContentLoaded", async () => {
  const usuarioList = document.getElementById("usuario-list");

  try {
    const response = await fetch("http://localhost:3000/usuarios");
    const usuarios = await response.json();

    if (usuarios) {
      usuarios.forEach((usuario) => {
        const li = document.createElement("li");
        li.textContent = `${usuario.nome} - ${usuario.email}`;
        usuarioList.appendChild(li);
      });
    }
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
  }
});