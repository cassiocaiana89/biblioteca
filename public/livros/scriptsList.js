document.addEventListener("DOMContentLoaded", async () => {
  const livroList = document.getElementById("livro-list");

  try {
    const response = await fetch('http://localhost:3000/livros');
    const livro = await response.json();

    livro.forEach(livro => {
      const li = document.createElement('li');
      li.classList.add("livro-item");

      const livroInfo = document.createElement("span");
      livroInfo.textContent = `titulo: ${livro.titulo} | autor: ${livro.autor} | editora: ${livro.editora}`;
      li.appendChild(livroInfo);

      livroList.appendChild(li);
    });
  } catch (error) {
    console.error('Erro ao carregar livros:', error);
  }
});
