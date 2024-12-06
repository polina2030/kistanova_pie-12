let allProducts = []; 

// Функция для отображения продуктов
function showProducts(products) {
    let productList = document.getElementById('product-list');
    productList.innerHTML = '';
    
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        // название
        let productItem = document.createElement('div');
        let productName = document.createElement('h3');
        productName.textContent = product.title;
        productItem.className = 'product-item';
        productList.appendChild(productItem);
        productItem.appendChild(productName);
        
        // картинка
        let productImage = document.createElement('img');
        productImage.src = product.thumbnail; 
        productImage.className = 'product-image';
        productItem.appendChild(productImage);
        
        //описание
        let productDescription = document.createElement('p');
        productDescription.textContent = product.description; 
        productDescription.className = 'productDescription';
        productItem.appendChild(productDescription);
        
        //цена
        let productPrice = document.createElement('p');
        productPrice.innerHTML = product.price + '$'; 
        productPrice.className = 'productPrice';
        productItem.appendChild(productPrice);

    }
}

// Загрузка всех продуктов 
fetch('https://dummyjson.com/products?skip=60&limit=30')
.then(res => res.json())
.then(data => {
    allProducts = data.products;
    showProducts(allProducts);
});

// Обработчик для кнопки поиска
let searchButton = document.getElementById('search_button');

searchButton.addEventListener('click', () => {
    let searchInput = document.getElementById('search_bar').value.toLowerCase(); 
    let search_boxInput = document.getElementById('search_box');
    if (searchInput === '') {
        search_boxInput.innerHTML = "Вы не ввели ни одного значения. Введите значение";
        
        fetch('https://dummyjson.com/products?skip=60&limit=30')
        .then(res => res.json())
        .then(data => {
            allProducts = data.products;
            showProducts(allProducts);
        });
        
        return;
    }

    fetch(`https://dummyjson.com/products/search?q=${searchInput}`)
    .then(res => res.json())
    .then(data => {
        allProducts = data.products;
        showProducts(allProducts);
        let total = data.total;
        search_boxInput.innerHTML = "Количество всех продуктов: " + total + ", Количество продуктов на странице: " + allProducts.length;
    });
        
})



