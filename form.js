document.getElementById('blockForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const svgCode = document.getElementById('svgCode').value;
    const linkText = document.getElementById('linkText').value;
    const linkHref = document.getElementById('linkHref').value;

    const block = { svg: svgCode, linkText: linkText, linkHref: linkHref };
    let blocks = JSON.parse(localStorage.getItem('blocks')) || [];
    blocks.push(block);
    localStorage.setItem('blocks', JSON.stringify(blocks));

    alert('Bloc ajouté!');
    document.getElementById('blockForm').reset();
});
