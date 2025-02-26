document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-livro-form');
    const livrosList = document.getElementById('livros-list');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const publicado = document.getElementById('publicado').value;

        try {
            const response = await fetch('http://localhost:3000/livros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ titulo, autor, publicado })
            });
            const livro = await response.json();
            fetchLivros();
            
            form.reset();
        } catch (error) {
            console.error('Erro ao adicionar livro:', error);
        }
    });

    const deletarLivro = async (id) => {
        try {
            await fetch(`http://localhost:3000/livros/${id}`, {
                method: 'DELETE'
            });
            fetchLivros();
        } catch (error) {
            console.error('Erro ao deletar livro:', error);
        }
    };
    
    const addLivroToList = (livro) => {
        const li = document.createElement('li');
        li.textContent = `${livro.titulo} - ${livro.autor} (Publicado em: ${new Date(livro.publicado).toLocaleDateString()})`;
    
        const deletarBotao = document.createElement('button');
        deletarBotao.textContent = 'Deletar';
        deletarBotao.addEventListener('click', () => {
            deletarLivro(livro.id);
        });
    
        li.appendChild(deletarBotao);
        livrosList.appendChild(li);
    };

    const fetchLivros = async () => {
        try {
            const response = await fetch('http://localhost:3000/livros');
            const livros = await response.json();
            livros.forEach(addLivroToList);
        } catch (error) {
            console.error('Erro ao buscar livros:', error);
        }
    };

    fetchLivros();
});
