document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(min(90%, 500px), 1fr))';
    gridContainer.style.gridGap = '20px';
    gridContainer.style.padding = '30px';
    gridContainer.style.marginTop = '20px';

    const blocks = JSON.parse(localStorage.getItem('blocks')) || [];

    blocks.forEach(block => {
        const gridItem = document.createElement('div');
        gridItem.style.display = 'flex';
        gridItem.style.flexDirection = 'column';
        gridItem.style.alignItems = 'center';
        gridItem.style.border = '3px solid black';
        gridItem.style.padding = '25px';
        gridItem.style.borderRadius = '10px';
        gridItem.style.backgroundColor = '#f5f5dc';

        const svg = document.createElement('div');
        svg.innerHTML = block.svg;
        svg.setAttribute('style', 'color: blue; width: 80px; height: 80px;');
        gridItem.appendChild(svg);

        const link = document.createElement('a');
        link.href = block.linkHref;
        link.textContent = block.linkText;
        link.setAttribute('style', 'font-size: 30px; margin-top: 20px; color: #2c8279; transition: transform 0.3s ease-in-out;');
        gridItem.appendChild(link);

        gridContainer.appendChild(gridItem);
    });
});
