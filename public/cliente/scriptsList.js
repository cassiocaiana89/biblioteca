document.addEventListener("DOMContentLoaded", async () => {
  const clienteList = document.getElementById("cliente-list");

  try {
    const response = await fetch('http://localhost:3000/clientes');
    const usuarios = await response.json();

    usuarios.forEach(cliente => {
      const li = document.createElement('li');
      li.classList.add("cliente-item");

      const clienteInfo = document.createElement("span");
      clienteInfo.textContent = `Nome: ${cliente.nome} | Email: ${cliente.email}`;
      li.appendChild(clienteInfo);

      clienteList.appendChild(li);
    });
  } catch (error) {
    console.error('Erro ao carregar clientes:', error);
  }
});
