function logIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (email === savedEmail && password === savedPassword) {
        if (email === 'mayeultch@gmail.com' && password === 'mayeultch.09') {
            window.location.href = 'superutilisateur.html';
        } else {
            window.location.href = 'page_catalogue.html';
        }
    } else {
        alert('Email ou mot de passe incorrect');
    }
}
