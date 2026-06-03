// Início: Autenticação
const nome = sessionStorage.getItem('zenit-nome');
const perfil = sessionStorage.getItem('zenit-perfil');

if (!nome || !perfil) {
    window.location.href = 'cadastro.html';
}

const primeiroNome = nome ? nome.split(' ')[0] : '';
const iniciais = nome
    ? nome.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
    : '--';

document.getElementById('topbar-nome').textContent = primeiroNome;
document.getElementById('topbar-avatar').textContent = iniciais;

if (perfil === 'pes') {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById('view-pes').classList.add('active');
    document.getElementById('tab-pes').classList.add('active');
}
// Fim: Autenticação

// Início: Navegação
function switchView(id, btn) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById('view-' + id).classList.add('active');
    btn.classList.add('active');
}

function switchPage(id, btn) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    btn.classList.add('active');
}
// Fim: Navegação

// Início: Sair
function sair() {
    sessionStorage.removeItem('zenit-nome');
    sessionStorage.removeItem('zenit-perfil');
    window.location.href = 'index.html';
}
// Fim: Sair