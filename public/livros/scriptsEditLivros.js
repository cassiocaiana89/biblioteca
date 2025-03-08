async function editLivro() {
    const id = new URLSearchParams(window.location.search).get("id");

    try {
        const response = await fetch(`http://localhost:3000/livros/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();

        if (data) {
            document.getElementById("titulo").value = data.titulo;
            document.getElementById("autor").value = data.autor;
            document.getElementById("publicado").value = data.publicado;
        } else {
            console.error("Erro ao carregar dados do livro");
        }
    } catch (error) {
        console.error("Erro ao carregar dados do livro:", error);
    }           

}