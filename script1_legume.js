let products = JSON.parse(localStorage.getItem('products')) || [];
let cart1 = JSON.parse(localStorage.getItem('cart1')) || [];

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    if (document.getElementById('catalogue')) {
        displayCatalogue();
    }
    if (document.getElementById('panier1')) {
        displayCart();
    }
    document.getElementById('product-price').addEventListener('input', updateTotalCost);
    document.getElementById('product-stock').addEventListener('input', updateTotalCost);
    updateSummary();
});

function displayCatalogue() {
    products = JSON.parse(localStorage.getItem('products')) || [];
    const catalogueDiv = document.getElementById('catalogue');
    catalogueDiv.innerHTML = '';
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.style.display = 'flex';
        productDiv.style.alignItems = 'center';
        productDiv.style.marginBottom = '10px';
        productDiv.style.border = '1px solid #ccc';
        productDiv.style.padding = '10px';
        productDiv.innerHTML = `
            <div style="width: 35%; display: flex; justify-content: center; align-items: center;">
                <img src="${product.image}" alt="${product.name}" style="max-width: 100%; max-height: 100%; object-fit: contain; object-position: center;">
            </div>
            <div style="background-color: #F5F5DC; padding: 10px; width: 65%;">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Prix: €${product.price.toFixed(2)}</p>
                <p>Stock: ${product.stock}</p>
                <label for="quantity-${index}">Quantité:</label>
                <input type="number" id="quantity-${index}" min="1" max="${product.stock}" value="1" onchange="updateTotal(${index})">
                <p>Total: €<span id="total-${index}">${product.price.toFixed(2)}</span></p>
                <button style="background-color: #2c8279; color: white; padding: 10px; font-size: 16px;" onclick="addToCart(${index})">Ajouter au Panier</button>
            </div>
        `;
        catalogueDiv.appendChild(productDiv);
    });
}

function addToCart(index) {
    const quantity = parseInt(document.getElementById(`quantity-${index}`).value);
    const product = products[index];
    const cartItem = { ...product, quantity };
    cart1.push(cartItem);
    localStorage.setItem('cart1', JSON.stringify(cart1));
    updateCartCount();
    updateSummary();
    alert('Produit ajouté au panier.');
}

function displayCart() {
    cart1 = JSON.parse(localStorage.getItem('cart1')) || [];
    const panierDiv = document.getElementById('panier1');
    panierDiv.innerHTML = '';
    cart1.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.style.display = 'flex';
        productDiv.style.alignItems = 'center';
        productDiv.style.marginBottom = '10px';
        productDiv.style.border = '1px solid #ccc';
        productDiv.style.padding = '10px';
        productDiv.innerHTML = `
            <div style="width: 35%; display: flex; justify-content: center; align-items: center;">
                <img src="${product.image}" alt="${product.name}" style="max-width: 100%; max-height: 100%; object-fit: contain; object-position: center;">
            </div>
            <div style="background-color: #F5F5DC; padding: 10px; width: 65%;">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Prix: €${product.price.toFixed(2)}</p>
                <p>Quantité: ${product.quantity}</p>
                <p>Total: €${(product.price * product.quantity).toFixed(2)}</p>
                <button style="background-color: #2c8279; color: white; padding: 10px; font-size: 16px;" onclick="removeFromCart(${index})">Supprimer</button>
            </div>
        `;
        panierDiv.appendChild(productDiv);
    });
    updateSummary();
}

function removeFromCart(index) {
    cart1.splice(index, 1);
    localStorage.setItem('cart1', JSON.stringify(cart1));
    updateCartCount();
    displayCart();
    alert('Produit supprimé du panier.');
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count1');
    cart1 = JSON.parse(localStorage.getItem('cart1')) || [];
    cartCount.textContent = cart1.length;
}

function updateTotal(index) {
    const quantity = parseInt(document.getElementById(`quantity-${index}`).value);
    const product = products[index];
    const total = product.price * quantity;
    document.getElementById(`total-${index}`).textContent = total.toFixed(2);
}

function updateTotalCost() {
    const price = parseFloat(document.getElementById('product-price').value) || 0;
    const stock = parseInt(document.getElementById('product-stock').value) || 0;
    const totalCost = price * stock;
    document.getElementById('total-cost').value = totalCost.toFixed(2);
}

function updateSummary() {
    cart1 = JSON.parse(localStorage.getItem('cart1')) || [];
    let totalCost = cart1.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    const tax = 5000;
    const shipping = 2500;
    totalCost += tax + shipping;
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);
}

function validateOrder() {
    const paymentMethod = document.getElementById('payment-method').value;
    if (!paymentMethod) {
        alert('Veuillez sélectionner un mode de paiement.');
        return;
    }
    if (cart1.length === 0) {
        alert('Votre panier est vide.');
        return;
    }
    alert('Commande validée. Merci pour votre achat!');
    cart1 = [];
    localStorage.setItem('cart1', JSON.stringify(cart1));
    updateCartCount();
    displayCart();
    updateSummary();
}
