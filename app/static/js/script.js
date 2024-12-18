document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript code here

    // Example: Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Example: Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});
ddocument.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.response-btn');
    const restartButton = document.getElementById('restart-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const currentCard = button.closest('.question-card');
            const nextCardId = button.dataset.next;

            currentCard.classList.add('hidden'); // Ocultar la carta actual
            const nextCard = document.getElementById(nextCardId);
            if (nextCard) {
                nextCard.classList.remove('hidden'); // Mostrar la siguiente carta
            }
        });
    });

    restartButton.addEventListener('click', () => {
        document.querySelectorAll('.question-card').forEach((card, index) => {
            card.classList.add('hidden');
            if (index === 0) {
                card.classList.remove('hidden'); // Reinicia en la primera carta
            }
        });
    });
});

