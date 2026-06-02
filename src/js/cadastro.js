// Início: Cadastro

function cadastrar() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const perfil = document.getElementById('perfil').value;
    const erro = document.getElementById('cadastro-erro');

    if (!nome || !email || !senha || !perfil) {
        erro.textContent = 'Preencha todos os campos para continuar.';
        erro.classList.add('visivel');
        return;
    }

    if (senha.length < 6) {
        erro.textContent = 'A senha precisa ter no mínimo 6 caracteres.';
        erro.classList.add('visivel');
        return;
    }

    erro.classList.remove('visivel');

    // Salva o perfil na sessionStorage para a plataforma usar
    sessionStorage.setItem('zenit-nome', nome);
    sessionStorage.setItem('zenit-perfil', perfil);

    // Redireciona para a plataforma
    window.location.href = 'plataforma.html';
}

// Fim: Cadastro