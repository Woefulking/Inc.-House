const pictures = {
    france: [ 
        {   
            src: "./images/france/1.jpg",
            author: "Марсель Руссо",
            title: "Охота Амура",
            details: "Холст, масло (50х80)",
            price: "14 500 руб",
        },
        {   
            src: "./images/france/2.jpg",
            author: "Анри Селин",
            title: "Дама с собачкой",
            details: "Акрил, бумага (50х80) ",
            price: "16 500 руб",
        },
        {   
            src: "./images/france/3.jpg",
            author: "Франсуа Дюпон",
            title: "Процедура",
            details: "Цветная литография (40х60) ",
            price: "20 000 руб",
        },
        {   
            src: "./images/france/4.jpg",
            author: "Луи Детуш",
            title: "Роза",
            details: "Бумага, акрил (50х80) ",
            price: "12 000 руб",
        },
        {   
            src: "./images/france/5.jpg",
            author: "Франсуа Дюпон",
            title: "Птичья трапеза",
            details: "Цветная литография (40х60) ",
            price: "22 500 руб",
        },
        {   
            src: "./images/france/6.jpg",
            author: "Пьер Моранж",
            title: "Пейзаж с рыбой",
            details: "Цветная литография (40х60) ",
            price: "20 000 руб",
        },
    ],  
    german: [
        {   
            src: "./images/german/1.jpg",
            author: "Курт Вернер",
            title: "Над городом",
            details: "Цветная литография (40х60) ",
            price: "16 000 руб",
        },
        {   
            src: "./images/german/2.jpg",
            author: "Макс Рихтер",
            title: "Птенцы",
            details: "Холст, масло (50х80) ",
            price: "14 500 руб",
        },
        {   
            src: "./images/german/3.jpg",
            author: "Мартин Майер",
            title: "Среди листьев",
            details: "Цветная литография (40х60)  ",
            price: "20 000 руб",
        },
        {   
            src: "./images/german/4.jpg",
            author: "Герман Беккер",
            title: "Яркая птица",
            details: "Цветная литография (40х60)  ",
            price: "13 000 руб",
        },
        {   
            src: "./images/german/5.jpg",
            author: "Вульф Бауэр",
            title: "Дятлы",
            details: "Бумага, акрил (50х80)  ",
            price: "20 000 руб",
        },
        {   
            src: "./images/german/6.jpg",
            author: "Вальтер Хартманн",
            title: "Большие воды",
            details: "Бумага, акрил (50х80)   ",
            price: "23 000 руб",
        },
    ],
    england: [
        {   
            src: "./images/england/1.jpg",
            author: "Пол Смит",
            title: "Дикий зверь",
            details: "Акварель, бумага (50х80)",
            price: "19 500 руб",
        },
        {   
            src: "./images/england/2.jpg",
            author: "Джон Уайт",
            title: "Скалистый берег",
            details: "Цветная литография (40х60)",
            price: "17 500 руб",
        },
        {   
            src: "./images/england/3.jpg",
            author: "Джим Уотсон",
            title: "Река и горы",
            details: "Акварель, бумага (50х80)",
            price: "20 500 руб",
        },
        {   
            src: "./images/england/4.jpg",
            author: "Юджин Зиллион",
            title: "Белый попугай",
            details: "Цветная литография (40х60)",
            price: "15 500 руб",
        },
        {   
            src: "./images/england/5.jpg",
            author: "Эрик Гиллман",
            title: "Ночная рыба",
            details: "Бумага, акрил (50х80)",
            price: "12 500 руб",
        },
        {   
            src: "./images/england/6.jpg",
            author: "Альфред Барр",
            title: "Рыжий кот",
            details: "Цветная литография (40х60) ",
            price: "21 000 руб",
        },
    ],
};

function createGallery(country) {
    const gallery = document.querySelector(".reproductions__list");
    gallery.innerHTML = '';

    const fragment = document.createDocumentFragment();

    pictures[country].forEach(picture => {
        const pictureElement = document.createElement('div');
        pictureElement.className = "reproduction-card";

        pictureElement.innerHTML = `
            <img class="reproduction-card__image" src="${picture.src}" alt="${picture.title}">
            <p class="reproduction-card__author">${picture.author}</p>
            <h3 class="reproduction-card__title ">${picture.title}</h3>
            <p class="reproduction-card__details">${picture.details}</p>
            <p class="reproduction-card__price">${picture.price}</p>
            <button class="reproduction-card__button">В корзину</button>
        `;

        fragment.appendChild(pictureElement);
    });

    gallery.appendChild(fragment);
}

function fillGallery() {
    const buttons = document.querySelectorAll('.reproductions__filter-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
    
            let prevButton = document.querySelector('.reproductions__filter-button--active');
            prevButton.classList.remove('reproductions__filter-button--active');

            button.classList.toggle("reproductions__filter-button--active")
            currentCountry = button.value
            createGallery(currentCountry)
        })
    })
}


createGallery("france")
fillGallery()
