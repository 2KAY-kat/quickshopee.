import { products, exclusiveProducts } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    const product = products.concat(exclusiveProducts).find(p => p.id == productId);

    if (product) {
        const currentUrl = encodeURIComponent(window.location.href);
        const productTitle = encodeURIComponent(`Check out ${product.name}`);
        const productDetailsHTML = `
            <div class="product-details">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h1>${product.name}</h1>
                    <p class="price">${product.price}</p>
                    <p class="description">${product.description}</p>
                    <div class="social-media">
                        <a href="mailto:seller@example.com?subject=${encodeURIComponent(`Inquiry about ${product.name}`)}&body=${encodeURIComponent(`I am interested in ${product.name}. Please provide more details.`)}" class="social-icon"><i class="fas fa-envelope"></i></a>
                        <a href="https://wa.me/1234567890?text=${encodeURIComponent(`I am interested in ${product.name}. Please provide more details.`)}" class="social-icon"><i class="fab fa-whatsapp"></i></a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${currentUrl}" class="social-icon"><i class="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/intent/tweet?text=${productTitle}&url=${currentUrl}" class="social-icon"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        `;
        document.querySelector('#product-details').innerHTML = productDetailsHTML;
    } else {
        document.querySelector('#product-details').innerHTML = '<p>Product not found.</p>';
    }
});
