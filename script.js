const API_URL = 'https://fakestoreapi.com/products';
const main = document.getElementById('main');
const form = document.getElementById('form');

// Get initial products
getProducts(API_URL);

async function getProducts(url) {
    const res = await fetch(url);
    const data = await res.json();

    showProducts(data);
}

function showProducts(products) {
    main.innerHTML = '';

    products.forEach((product) => {
        const { id, title, price, description, image } = product;

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = ` <img src="${image}" alt="${title}">
                <h3>${title}</h3>
                <p><strong>Price:</strong> $${price}</p>
                <p>${description}</p>`

            ;

        main.appendChild(productCard);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        'getProducts (API_URL + ? title = ${ searchTerm })';

        search.value = '';
    } else {
        window.location.reload();
    }
});