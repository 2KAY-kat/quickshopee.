import { header, logo, banner, about, contact, products, exclusiveProducts } from './data.js';

let logoHTML = '';
let headerHTML = '';
let bannerHTML = '';
let aboutHTML = '';
let contactHTML = '';
let productsHTML = '';
let exclusiveProductsHTML = '';

logo.forEach((logo) => {
    logoHTML += `
    <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1582 8.67197L16.1311 3.77856L28.8589 9.04913" fill="#0056b3"/>
<path d="M24.2826 30.3489C26.4721 30.3489 28.2469 28.767 28.2469 26.8156C28.2469 24.8642 26.4721 23.2822 24.2826 23.2822C22.0932 23.2822 20.3184 24.8642 20.3184 26.8156C20.3184 28.767 22.0932 30.3489 24.2826 30.3489Z" fill="#007bff"/>
<path d="M12.3256 30.3489C14.515 30.3489 16.2899 28.767 16.2899 26.8156C16.2899 24.8642 14.515 23.2822 12.3256 23.2822C10.1362 23.2822 8.36133 24.8642 8.36133 26.8156C8.36133 28.767 10.1362 30.3489 12.3256 30.3489Z" fill="#0056b3"/>
<path d="M9.34512 9.61338L6.74011 2.74633H0V0.911133H8.21807L11.2953 9.02556L9.34512 9.61338Z" fill="#555"/>
<path d="M4.34961 8.07251H32.9397L27.4902 21.6999H9.11067L4.34961 8.07251Z" fill="#ccc"/>
</svg>
    <h1>${logo.heading}</h1>
    `;
});

document.querySelector('.logo').innerHTML = logoHTML;

header.forEach((header) => {
    headerHTML += `
        <div class="search-container">
            <input type="search" placeholder="Search..." id="search">
            <button type="submit" id="search-button">${header.value}</button>
        </div>
    `;
});

document.querySelector('.search').innerHTML = headerHTML;

banner.forEach((banner) => {
    bannerHTML += `
  <div class="banner-content">
    <h1>${banner.heading1}</h1>
    <p>${banner.p_description}</p>
    <a href="#featured-product" class="btn">Shop Now <i class="fa fa-shopping-cart"></i> &rarr;</a>
  </div>
    `;
});

document.querySelector('.js-banner').innerHTML = bannerHTML;

about.forEach((about) => {
    aboutHTML += `
    <div class="about-image">
                <img src="${about.image}" alt="About QuickShopee">
            </div>
            <div class="about-description">
                <h2>${about.about_h2}</h2>
                <p>${about.p1_description}</p>
                <p>${about.p2_description}</p>
            </div>   
    `;
});

document.querySelector('.about-section').innerHTML = aboutHTML;

contact.forEach((contact) => {
    contactHTML += `
        <div class="contact-card">
            <h2>Contact Us</h2>
            <div class="contact-details">
                <p><strong>Address:</strong> ${contact.address}</p>
                <p><strong>Phone:</strong> ${contact.phone}</p>
                <p><strong>Email:</strong> ${contact.email}</p>
            </div>
        </div>
        <iframe
            class="contact-map"
            src="${contact.mapSrc}"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
        ></iframe>
    `;
});

document.querySelector('.contact-section').innerHTML = contactHTML;

productsHTML += '<div class="products-container">';
products.forEach((product) => {
    productsHTML += `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <div class="product-actions">
                <button class="bookmark-btn"><i class="fas fa-bookmark"></i></button>
                <button class="like-btn"><i class="fas fa-heart"></i></button>
                <button class="details-btn"><i class="fas fa-info-circle"></i></button>
            </div>
        </div>
    `;
});
productsHTML += '</div>';

exclusiveProductsHTML += '<div class="products-container">';
exclusiveProducts.forEach((product) => {
    exclusiveProductsHTML += `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <div class="product-actions">
                <button class="bookmark-btn"><i class="fas fa-bookmark"></i></button>
                <button class="like-btn"><i class="fas fa-heart"></i></button>
                <button class="details-btn" data-product-id="${product.id}"><i class="fas fa-info-circle"></i></button>
            </div>
        </div>
    `;
});
exclusiveProductsHTML += '</div>';

document.querySelector('#products').innerHTML = productsHTML;
document.querySelector('#featured-product').innerHTML = exclusiveProductsHTML;