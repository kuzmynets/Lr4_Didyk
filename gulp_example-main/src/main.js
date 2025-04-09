function active_page() {
    const currentURL = window.location.href;

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        if (currentURL === link.href) {
            link.classList.add('active');
        }
    });
}

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    alert(`Дякую: ${name} за ваш відгук, ми відповімо вам на Email: ${email}, Повідомлення: ${message}`);
});

document.addEventListener('DOMContentLoaded', active_page);