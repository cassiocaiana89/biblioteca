document.addEventListener("DOMContentLoaded", async () => {
  const usuarioList = document.getElementById("usuario-list");

  try {
    const response = await fetch('http://localhost:3000/usuarios');
    const usuarios = await response.json();

    usuarios.forEach(usuario => {
      const li = document.createElement('li');
      li.classList.add("usuario-item");

      const usuarioInfo = document.createElement("span");
      usuarioInfo.textContent = `Nome: ${usuario.nome} | Email: ${usuario.email}`;
      li.appendChild(usuarioInfo);

      usuarioList.appendChild(li);
    });
  } catch (error) {
    console.error('Erro ao carregar usuários:', error);
  }
});
