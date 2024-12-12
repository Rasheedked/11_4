
var products = [
    ["Royal Coconut Shampoo", 49.99, "ROYAL COCONUT SHAMPOO.png", "Moisturizes and reduces dandruff for healthy hair"],
    ["Golden Jojoba Oil", 39.99, "Golden JojobaOil.png", "Natural moisturizing properties"],
    ["Royal Charcoal Shampoo", 59.99, "ROYAL Charcoal Shampoo.png", "Deep cleaning with Vitamin E enrichment"],
    ["Golden Black Seed Oil", 35.99, "Black Seed Oil.png", "Natural black seed oil benefits"],
    ["Al-Jadayel Hair Oil", 59.99, "Al-Jadayel Hair Oil.jpg", "Smooths hair edges and treats split ends"],
    ["Golden Garlic Oil", 37.99, "GARLIC OIL.png", "Natural garlic oil benefits"],
    ["Golden Argan Oil", 44.99, "ARGAN OIL.png", "Natural moisturizing argan oil"]
];





function displayProducts() {
    var container = document.getElementsByClassName('products-grid')[0];
    container.innerHTML = ''; 
    
    for (var i = 0; i < products.length; i++) {
        createProductCard(products[i], container);
    }
}

function createProductCard(product, container) {
    var html = 
        '<div class="product-card">' +
            '<img src="' + product[2] + '" alt="' + product[0] + '">' +
            '<h3>' + product[0] + '</h3>' +
            '<p class="description">' + product[3] + '</p>' +
            '<p class="price">AED ' + product[1] + '</p>' +
            '<button class="add-to-cart">Add to Cart</button>' +
        '</div>';
    container.innerHTML += html;
}


function manualSort(arr, ascending) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (ascending) {
                if (arr[j][1] > arr[j + 1][1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                }
            } else {
                if (arr[j][1] < arr[j + 1][1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}


function handleSortChange() {
    var sortType = sortSelect.value;
    if (sortType === 'price-low') {
        manualSort(products, true);
    } else if (sortType === 'price-high') {
        manualSort(products, false);
    }
    displayProducts();
}

var sortSelect = document.getElementById('sort');

function initializePage() {
    sortSelect.addEventListener('change', handleSortChange);
    displayProducts();
}

window.onload = initializePage;