document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-login-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        try {
            const response = await fetch('http://localhost:3000/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });

            if (response.redirected) {
                window.location.href = response.url;
            } else {
                const result = await response.text();
                errorMessage.textContent = result;
            }
            
            form.reset();
        } catch (error) {
            console.error('Erro ao logar:', error);
            errorMessage.textContent = 'Erro ao logar. Tente novamente.';
        }
    });
});
