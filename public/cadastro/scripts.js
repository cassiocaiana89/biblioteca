document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-cadastro-form');
    const livrosList = document.getElementById('cadastro-list');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
        try {
            const response = await fetch('http://localhost:3000/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, email, senha })
            });
            const cadastro = await response.json();
            fetchcadastro();
            
            form.reset();
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
        }
    });

    const deletarCadastro = async (id) => {
        try {
            await fetch(`http://localhost:3000/cadastro/${id}`, {
                method: 'DELETE'
            });
            fetchcadastro();
        } catch (error) {
            console.error('Erro ao deletar cadastro:', error);
        }
    };
    
    const addCadastroToList = (cadastro) => {
        const li = document.createElement('li');
        li.textContent = `${cadastro.nome} - ${cadastro.email} - ${cadastro.senha})`;
    
        const deletarBotao = document.createElement('button');
        deletarBotao.textContent = 'Deletar';
        deletarBotao.addEventListener('click', () => {
            deletarLivro(cadastro.id);
        });
    
        li.appendChild(deletarBotao);
        livrosList.appendChild(li);
    };

    const fetchLivros = async () => {
        try {
            const response = await fetch('http://localhost:3000/cadastro');
            const cadastro = await response.json();
            cadastro.forEach(addCadastroToList);
        } catch (error) {
            console.error('Erro ao buscar cadastro:', error);
        }
    };

    fetchLivros();
});
