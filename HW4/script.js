let product = {
    title: "Велосипед",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNBe8V6mGTLJPPIm1URe1R3sfRboGzSUGrQ&s",
    count: 10,
    favorite: false
}

const btnPlus = document.querySelector(".plus")
const btnMinus = document.querySelector(".minus")
const countElem = document.querySelector(".countValue")
const btnFavorite = document.querySelector(".favorite")
let count = 10

if (localStorage.getItem('product')) {
   product = JSON.parse(localStorage.getItem('product'));
    countElem.innerText = product.count
 }

btnPlus.addEventListener('click', function () {
    product.count++;
    localStorage.setItem('product', JSON.stringify(product)); 
    countElem.innerText = product.count;
});

btnMinus.addEventListener('click', function () {
    product.count--;
    localStorage.setItem('product', JSON.stringify(product)); 
    countElem.innerText = product.count;
});


if (product.favorite) {
    btnFavorite.setAttribute('data-favorite', 'favoriteOn');
} else {
    btnFavorite.setAttribute('data-favorite', 'favoriteOff'); 
}

btnFavorite.addEventListener('click', function () {
    product.favorite = !product.favorite; 
    if (product.favorite) {
        btnFavorite.setAttribute('data-favorite', 'favoriteOn'); 
    } else {
        btnFavorite.setAttribute('data-favorite', 'favoriteOff'); 
    }
    localStorage.setItem('product', JSON.stringify(product));
});