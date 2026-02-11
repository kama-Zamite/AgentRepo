document.querySelector("form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const Error = document.getElementById("Error");

    // Admin login
    if (username === "admin" && password === "admin123") {
        window.location.href = "../page/layout/componentsProfessor/admin.html";
        return;
    }

    // Aluno login
    try {
        const response = await fetch("./Router/alunos.json");
        const alunos = await response.json();
        const aluno = alunos.find(a => a.matricula === username && a.senha === password);

        if (aluno) {
            window.location.href = "../page/layout/componentsAluno/alunoP.html";
        } else {
            Error.textContent = "Matrícula ou senha inválida.";
        }
    } catch (err) {
        Error.textContent = "Erro ao acessar dados dos alunos.";
    }
});
