document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const Error = document.getElementById("Error");
    
    const users = [
        {username: "admin", password: "admin123", refe: "admin"},
        {username: "aluno", password: "aluno123", refe: "aluno"},
    ];

    const user = users.find(u => { 
        return u.username === username && u.password === password; 
    });
    if (!user)
    {
        Error.textContent = "Invalid username or password.";
        return;
    }
    
    if (user.refe === "aluno")
        window.location.href = "../page/layout/componentsAluno/alunoP.html";
    else if (user.refe === "admin")
        window.location.href = "../page/layout/componentsProfessor/admin.html";
});
