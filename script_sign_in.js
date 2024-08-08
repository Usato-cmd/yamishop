function signUp() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Inscription réussie');
    } else {
        alert('Veuillez remplir tous les champs');
    }
}
