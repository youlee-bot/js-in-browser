 var cardsData = [
  {
    inStock: true,
    imgUrl: 'gllacy/choco.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 310,
    isHit: true,
    specialOffer: 'Двойная порция сиропа бесплатно!'
  },
  {
    inStock: false,
    imgUrl: 'gllacy/lemon.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 125,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cowberry.jpg',
    text: 'Сливочное с брусничным джемом',
    price: 170,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cookie.jpg',
    text: 'Сливочное с кусочками печенья',
    price: 250,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/creme-brulee.jpg',
    text: 'Сливочное крем-брюле',
    price: 190,
    isHit: false
  }
];
var createElement = (elementName, elementClass, elementText) => {
    var newElement = document.createElement(elementName);
    newElement.classList.add(elementClass);
    if (elementText) {
      newElement.textContent = (elementText);
      }
    return (newElement);
  }
  
var renderCards = (array) => {
  var goods = document.querySelector('.goods');
  
  array.forEach (value => {    
    var liGood = createElement('li', 'good');
    if (value.isHit) {
      liGood.classList.add('good--hit');
      var specialOffer = createElement('p', 'good__special-offer', value.specialOffer); 
      liGood.append(specialOffer);
      }
      
    if(value.inStock) {
      liGood.classList.add('good--available');
      }else{
        liGood.classList.add('good--unavailable');
        }
    goods.append(liGood);
    
    var h2Title = createElement('h2', 'good__description', value.text); 
    liGood.append(h2Title);
    
    var img = createElement('img', 'good__image'); 
    img.src = value.imgUrl;
    img.alt = value.text;
    liGood.append(img);
    
    var pPrice = createElement('p', 'good__price', value.price + '₽/кг'); 
    liGood.append(pPrice);  
    
    console.log(liGood);
    });
  }
  
renderCards(cardsData);
/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
  </li>
  ...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.

*/
