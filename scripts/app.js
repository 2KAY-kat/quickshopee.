document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', image: 'assets/images/19-346x310.webp', price: '$10' },
        { id: 2, name: 'Product 2', image: 'assets/images/checkers515Wx515H.png', price: '$20' },
        { id: 3, name: 'Product 3', image: 'assets/images/biscuitssnacks-1.jpg', price: '$30' },
    ];

    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
        `;
        productsContainer.appendChild(productElement);
    });
});