document.addEventListener("DOMContentLoaded", () => {
    const id = new URLSearchParams(window.location.search).get("id");
    
    async function showLivro() {    
        try {
            const response = await fetch(`http://localhost:3000/livros/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (data) {
                document.getElementById("titulo").textContent = data.titulo;
                document.getElementById("autor").textContent = data.autor;
                document.getElementById("publicado").textContent = data.publicado;
            } else {
                console.error("Erro ao carregar dados do livro");
            }
        } catch (error) {
            console.error("Erro ao carregar dados do livro:", error);   
        }
    }
    showLivro();
});