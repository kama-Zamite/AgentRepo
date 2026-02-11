// Inicializa 5 alunos no localStorage ao iniciar o sistema, se ainda não existirem
(() => {
    const alunosKey = 'alunos';
    if (!localStorage.getItem(alunosKey)) {
        const alunos = [
            { username: 'aluno1', password: 'senha1' },
            { username: 'aluno2', password: 'senha2' },
            { username: 'aluno3', password: 'senha3' },
            { username: 'aluno4', password: 'senha4' },
            { username: 'aluno5', password: 'senha5' }
        ];
        localStorage.setItem(alunosKey, JSON.stringify(alunos));
    }
})();
const BASE_URL = "http://localhost:3000/api";

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const Error = document.getElementById("Error");
    // Admin permanece como está
    if (username === "admin" && password === "admin123") {
        window.location.href = "../page/layout/componentsProfessor/admin.html";
        return;
    }

    // Alunos são autenticados pelo localStorage
    const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
    const aluno = alunos.find(a => a.username === username && a.password === password);
    if (aluno) {
        console.log('Login de aluno bem-sucedido, redirecionando...');
        localStorage.setItem('alunoLogado', aluno.username);
        window.location.href = "./page/layout/componentsAluno/alunoP.html";
        return;
    }

    Error.textContent = "Invalid username or password.";
});


function createUser() {}