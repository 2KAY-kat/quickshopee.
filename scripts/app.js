import { products } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');
    const featuredProductContainer = document.getElementById('featured-product');

    // Function to get the featured product based on the current day
    function getFeaturedProduct() {
        const day = new Date().getDate();
        return products[day % products.length];
    }

    // Display the featured product
    const featuredProduct = getFeaturedProduct();
    featuredProductContainer.innerHTML = `
        <h2>Featured Product</h2>
        <div class="product">
            <img src="${featuredProduct.image}" alt="${featuredProduct.name}">
            <div class="product-details">
                <h2>${featuredProduct.name}</h2>
                <p class="description">${featuredProduct.description}</p>
                <p>${featuredProduct.price}</p>
                <a href="#product-${featuredProduct.id}" class="cta-button">View Product</a>
            </div>
        </div>
    `;

    // Display all products
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.id = `product-${product.id}`;
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
        `;
        productsContainer.appendChild(productElement);
    });
});