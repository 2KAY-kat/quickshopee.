import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

function viewDetails(productId) {
    window.location.href = `product-details.html?productId=${productId}`;
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function getFromLocalStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return [];
    }
}

function updateButtonState(button, stateClass, message, type) {
    if (button.classList.contains(stateClass)) {
        button.classList.remove(stateClass);
        showNotification(`${message} removed!`, 'warning');
    } else {
        button.classList.add(stateClass);
        showNotification(`${message} added!`, 'success');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

    const bookmarks = getFromLocalStorage('bookmarks');
    const likes = getFromLocalStorage('likes');

    document.querySelectorAll('.bookmark-btn').forEach(button => {
        const productId = button.closest('.product-card').dataset.productId;
        if (bookmarks.includes(productId)) {
            button.classList.add('bookmarked');
        }
        button.addEventListener('click', () => {
            updateButtonState(button, 'bookmarked', 'Bookmark', 'success');
            if (button.classList.contains('bookmarked')) {
                bookmarks.push(productId);
            } else {
                const index = bookmarks.indexOf(productId);
                if (index > -1) {
                    bookmarks.splice(index, 1);
                }
            }
            saveToLocalStorage('bookmarks', bookmarks);
        });
    });

    document.querySelectorAll('.like-btn').forEach(button => {
        const productId = button.closest('.product-card').dataset.productId;
        if (likes.includes(productId)) {
            button.classList.add('liked');
        }
        button.addEventListener('click', () => {
            updateButtonState(button, 'liked', 'Like', 'success');
            if (button.classList.contains('liked')) {
                likes.push(productId);
            } else {
                const index = likes.indexOf(productId);
                if (index > -1) {
                    likes.splice(index, 1);
                }
            }
            saveToLocalStorage('likes', likes);
        });
    });

    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.product-card');
            const productId = card.dataset.productId;
            if (productId) {
                viewDetails(productId);
            } else {
                console.error('Product ID not found');
            }
        });
    });
});

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//swiper scripts

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true 
    },

    navigation : {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev'
    },

    breakpoints : {
      0 : {
        slidesPerView : 1
      },
      768 : {
        slidesPerView : 2
      },
      1024 : {
        slidesPerView : 3
      }
    }
  
  });