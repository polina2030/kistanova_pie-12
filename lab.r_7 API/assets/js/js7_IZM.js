//Функция вывода всех карточек с товарами на страницу
//param arr_products - массив с товарами и их данными
function show_list_products(arr_products){
    // Очистим список на странице
    let prodCard = document.getElementById('prodCard');
    prodCard.innerHTML = '';

    // Перебираем все товары и добавляем их на страницу
    for (let i = 0; i < arr_products.length; i++) {
        let product = arr_products[i];

        let productCard = document.createElement('div');
        productCard.className = 'productCard';
        productCard.id = `productCard_${i}`;

        // Открытие карточки товара
        productCard.addEventListener('click', () => {
            show_description(product);
        });
        
        
        let imgContainer = document.createElement('div');
        imgContainer.className = 'imgContainer';
        imgContainer.id = `imgContainer${i}`;

        // Картинка
        let img_product = document.createElement('img');
        img_product.className = 'img_product';
        img_product.src = product.thumbnail;
        img_product.alt = product.title;
        imgContainer.appendChild(img_product);

        // название цена цвета(3)
         let name_images = document.createElement('div');
        name_images.className = 'name_images';
        
        let title = document.createElement('p');
        title.className = 'title_product';
        title.textContent = product.title;
        
        let colors_all = document.createElement('div');
        colors_all.className = 'colors_all';
        
        let color_images_one = document.createElement('div');
        color_images_one.className = 'color_images_one';
        let color_images_two = document.createElement('div');
        color_images_two.className = 'color_images_two';
        let color_images_three = document.createElement('div');
        color_images_three.className = 'color_images_three';
        
        

        let price = document.createElement('p');
        price.className = 'price_productCard';
        price.textContent = `$${product.price}`;
        
        //let description = document.createElement('p');
        //description.className = 'text_product_card_description';
        //description.textContent = product.description;
        
        // Добавляем все элементы в карточку товара
        productCard.appendChild(imgContainer);
        name_images.appendChild(title);
        colors_all.appendChild(color_images_one);
        colors_all.appendChild(color_images_two);
        colors_all.appendChild(color_images_three);
        name_images.appendChild(colors_all);
        productCard.appendChild(name_images);
        productCard.appendChild(price);
        prodCard.appendChild(productCard);
    }
    
}

let list_products = [];
fetch('https://dummyjson.com/products?limit=30&skip=30')
.then(res => res.json())
.then(data => {
    // Записываем полученные продукты в массив
    list_products = data.products;
    show_list_products(list_products);
});

// Поиск
let search_btn = document.getElementById('search_btn');
let resultInfo = document.getElementById('resultInfo');
let searchQuery;
let searchResults;
let total;
search_btn.addEventListener('click', () => {
    searchQuery = document.getElementById('searchQuery').value.toLowerCase(); //приводим к нижнему регистру
    searchResults = [];
    
    fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
    .then(ress => ress.json())
    .then(data_search => {
        // Получим продукты
        total = data_search.total;
        searchResults = data_search.products;


        let prodCard = document.getElementById('prodCard');
        // Вывод сколько нашлось
        if (searchResults.length === 0) {
            resultInfo.innerHTML = '';
            prodCard.innerHTML = '<div class="noResults"> <div class="noResultsText">Нет таких товаров, меняй!</div></div>';
            console.log(prodCard);
        } else if (searchQuery === "") {
            resultInfo.innerHTML = "";
            show_list_products(list_products);
        } else {
            resultInfo.innerHTML = `<div class="text_what_found">Всего найдено товаров: ${total}, из них отражены на странице: ${searchResults.length}</div>`;
            show_list_products(searchResults);
        }
    });
    
});

// открытие карточки товара
//Функция открытия карточки товара с выводом цены. описания, названия, картинки
//param product - элемент массива (товар) со всеми его данными
function show_description(product) {
    let overlay = document.createElement('div');
    overlay.className = 'overlay';

    // Создаем окно для вывода
    let open_show_card = document.createElement('div');
    open_show_card.className = 'open_show_card';
    open_show_card.innerHTML = `
    <div style="display: flex; justify-content: flex-end;">
            <img src="../assets/img/7laba/close20.png" alt="" id="buttonClose">
    </div>
            <div class = "card_content">
                <img src="${product.thumbnail}" alt="${product.title}" class="modal_img">
                <div>
                    <h2>${product.title}</h2>
                    <p>Цена: $${product.price}</p>
                    <p>Описание: ${product.description}</p>
                </div>
            </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(open_show_card);

    // Кнопка "Закрыть" на форме открытия карточки
    let buttonClose = document.getElementById('buttonClose');
    buttonClose.addEventListener('click', () => {
        open_show_card.remove();
        overlay.remove();
    });
};



// добавление товара на страничку
let max_id = 194; //макс. id в имеющемся списке
let add_btn = document.getElementById('add_btn');
let body = document.body;
let prod;
add_btn.addEventListener('click', () => {
    let overlay = document.createElement('div');
    overlay.className = 'overlay';

    // Создаем карточку
    let add_productCard = document.createElement('div');
    add_productCard.className = 'add_productCard';

    add_productCard.innerHTML = `
        <div class = "add_krest">
            <h3>Добавление товара</h3>
            <img src="../assets/img/7laba/close20.png" alt="" id="close_btn">
        </div>
            <hr style="background-color: #e0e0e0; height: 2px; border: none; margin-bottom: 30px;">
            <div class = "add_product">
                <div class="label_add_productCard">Название товара:</div>
                <input class="text_add_productCard" id = "input_add_productCard"></input>
            </div>
            <div class = "add_product">
                <div class="label_add_productCard">Цена товара:</div>
                <input class= "price_add_productCard" id = "input_add_productCard"></input>
            </div>
                <div class = "add_product">
                <div class="label_add_productCard">Описание товара:</div>
                <textarea class="description_add_productCard" id = "input_add_description"></textarea>
            </div>
            
        
        <button type="button" id="save_btn" class="button">Сохранить</button>

    `;
    
    body.appendChild(overlay);
    body.appendChild(add_productCard);

    // кнопка "Закрыть" на открывшейся форме для заполнения
    document.getElementById('close_btn').addEventListener('click', () => {
        add_productCard.remove();
        overlay.remove();
    });

    // кнопка "Сохранить" на открывшейся форме для заполнения
    add_productCard.querySelector('#save_btn').addEventListener('click', () => {
        max_id = max_id + 1;
        let title = add_productCard.querySelector('.text_add_productCard').value;
        let price = add_productCard.querySelector('.price_add_productCard').value;
        let description = add_productCard.querySelector('.description_add_productCard').value;

        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: max_id,
                title: title,
                price: price,
                description: description,
                thumbnail: "../assets/img/nothing.png"
            })
        })
        .then(res => res.json())
        .then(data_add => {

            // Создаем новую карточку товара после нажатия на кнопку "Сохранить"
            let add_productCard_html = `
                <div class="productCard" id="productCard_${max_id}">
                    <div class="imgContainer">
                        <img class="img_product" src="${data_add.thumbnail}" alt="${data_add.title}">
                    </div>
                    <div class = "name_images"> 
                        <p class="title_product">${data_add.title}</p>
                        <div class="colors_all">
                            <div class="color_images_one"></div>
                            <div class="color_images_two"></div>
                            <div class="color_images_three"></div>
                        </div>
                    </div>
                    <p class="text_productCard">$${data_add.price}</p>
                </div>
            `;
            

            // выводим создавшийся товар на страничку
            let prodCard = document.getElementById('prodCard');
            
     
            prodCard.insertAdjacentHTML('afterbegin', add_productCard_html);
            
            //Открытие карточки товара после добавления
            document.getElementById(`productCard_${max_id}`).addEventListener('click', () => {
                show_description(data_add);
            });

            // Закрываем форму открывшейся карточки
            add_productCard.remove();
            overlay.remove();
        })
    });
});












