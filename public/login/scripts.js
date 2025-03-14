document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("add-login-form");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });
      const data = await response.json();
      if (data) {
        window.location.href = "http://localhost:3000/page/livros"; 
      } else {
        errorMessage.textContent = "Erro ao logar. Tente novamente.";
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
      errorMessage.textContent = "Erro ao logar. Tente novamente.";
    }
  });
});
