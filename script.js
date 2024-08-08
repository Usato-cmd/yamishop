
const images = [
    'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg',
    'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/f207e54596f652a282899cb3/pexels-photo-5965948.jpeg'
];
let currentIndex = 0;

function changeImage() {
    const img = document.getElementById('slideshow');
    img.classList.add('fade-out');
    
    setTimeout(() => {
        img.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
        
        setTimeout(() => {
            img.classList.remove('fade-out');
            img.classList.add('fade-in');
            
            setTimeout(() => {
                img.classList.remove('fade-in');
            }, 500);
        }, 50);
    }, 500);
}

/*Changer l'image immédiatement au chargement de la page*/
changeImage();

/*Puis changer l'image toutes les 3 secondes*/
setInterval(changeImage, 3000);

