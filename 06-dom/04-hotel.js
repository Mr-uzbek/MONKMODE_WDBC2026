// DOM - Hotel xonalarini band qilish
// querySelectorAll + forEach + classList

const buttons = document.querySelectorAll('.band-qilish');

buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        const card = this.closest('div');
        card.classList.add('booked');
        this.textContent = 'Band qilindi';
        this.disabled = true;
    });
});
