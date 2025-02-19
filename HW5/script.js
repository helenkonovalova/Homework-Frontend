function getProductByID(productId, callback) {
    fetch(`https://dummyjson.com/products/${productId}`)
    .then(function(response){
        return response.json()
    })
    .then(function(product){
        console.log(product);
        callback(product)
    })
    .catch(function(error) {
        console.error(error); 
      });
}
const mainBlock = document.querySelector("main")
const productContainer = document.createElement('div');
mainBlock.appendChild(productContainer);


function displayProduct(product){
    productContainer.innerHTML = '';
   
    const productCardDiv = document.createElement("div") 
    productCardDiv.classList.add("product-card")
    const imageElem = document.createElement("img")
    imageElem.setAttribute("src", `${product.images[1]}`)
    imageElem.setAttribute('alt', 'image')

    const titleElem = document.createElement("p")
    titleElem.innerText = product.title
    
    const stockElem = document.createElement("p")
    const stockElemBold = document.createElement("b")
    stockElemBold.innerText = "Stock: "
    stockElem.innerText = `${product.stock}`
    stockElem.prepend(stockElemBold)


    const priceElem = document.createElement("p")
    const priceElemBold = document.createElement("b")
    priceElemBold.innerText = 'Price: '
    priceElem.innerText = `${product.price}`
    priceElem.prepend(priceElemBold)

    const ratingElem = document.createElement("p")
    const ratingElemBold = document.createElement("b")
    ratingElemBold.innerText = "Rating AVG: "
    let avg = product.reviews.reduce(function(acc, review){
        return acc + review.rating
    },0) / product.reviews.length
    ratingElem.innerText = avg.toFixed(1) 
    ratingElem.prepend(ratingElemBold)
    
    const categoryElem = document.createElement("p")
    const categoryElemBold = document.createElement("b")
    categoryElemBold.innerText = "Category: "
    categoryElem.innerText = `${product.category}`
    categoryElem.prepend(categoryElemBold)

    productCardDiv.append(imageElem, titleElem, stockElem, priceElem, ratingElem, categoryElem)
   
    productContainer.append(productCardDiv)

}
// getProductByID(4, displayProduct);

const inputProductId = document.querySelector('#product_id')
const showBtn = document.querySelector('#show_product')
showBtn.addEventListener('click', function() {
    const productId = inputProductId.value;
    if (productId) {
        getProductByID(productId, displayProduct);
    } 
});
