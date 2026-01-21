const hamburger = document.getElementById('hamburger');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

// Abre o modal ao clicar no hambúrguer
hamburger.addEventListener('click', () => {
    modal.style.display = 'flex';
    hamburger.classList.add('active'); // Anima para X
});

// Fecha o modal ao clicar no X ou no overlay
close.addEventListener('click', () => {
    modal.style.display = 'none';
    hamburger.classList.remove('active'); // Volta às barrinhas
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        hamburger.classList.remove('active');
    }
})