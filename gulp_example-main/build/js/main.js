function active_page() {
    const currentPath = window.location.pathname;

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });
}
document.addEventListener('DOMContentLoaded', active_page);

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    alert(`Дякую: ${name} за ваш відгук, ми відповімо вам на Email: ${email}, Повідомлення: ${message}`);
});