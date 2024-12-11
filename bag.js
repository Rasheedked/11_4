// Sample Data for Bag Items
var bagData = [
    {
        id: 1,
        name: "Dior Sauvage 50ml",
        image: "https://cdn.salla.sa/XjKDR/C3rvJN3YtDtAbNRrjHMRADR83MbxP7a7CN5vy20u.jpg",
        price: 329.00,
    },
    {
        id: 2,
        name: "Cerave Green",
        image: "https://m.media-amazon.com/images/I/51flyLJHWtL.jpg",
        price: 112.00,
    },
    {
        id: 3,
        name: "Bath and Body Wash Into the Night",
        image: "https://www.bathandbodyworks.ae/assets/styles/bbw/image-thumb__287994__product_listing/28003655_1.jpg",
        price: 85.00,
    },
];

var subtotal = 0;

function renderBagItems() {
    var bagItemsContainer = document.getElementById("bag-items");
    bagItemsContainer.innerHTML = ""; 

    for (var i = 0; i < bagData.length; i++) {
        var item = bagData[i];

        // Create Bag Item
        var bagItemDiv = document.createElement("div");
        bagItemDiv.className = "bag-item";

        // Item Image
        var itemImage = document.createElement("img");
        itemImage.src = item.image;

        // Item Details
        var itemDetails = document.createElement("div");
        itemDetails.className = "bag-item-details";

        var itemName = document.createElement("h4");
        itemName.textContent = item.name;

        var itemPrice = document.createElement("p");
        itemPrice.textContent = "AED " + item.price.toFixed(2);

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemPrice);

        // Remove Button
        var removeButton = document.createElement("button");
        removeButton.className = "remove-btn";
        removeButton.textContent = "Remove";
        removeButton.onclick = (function (id) 
        {
            return function () 
            {
                removeFromBag(id);
            };
        })(item.id);

        bagItemDiv.appendChild(itemImage);
        bagItemDiv.appendChild(itemDetails);
        bagItemDiv.appendChild(removeButton);

        bagItemsContainer.appendChild(bagItemDiv);
    }

    updateSubtotal();
}

function removeFromBag(itemId) {
    var updatedBagData = [];
    for (var i= 0; i < bagData.length; i++) 
        {
        if (bagData[i].id != itemId) 
            {
            updatedBagData[updatedBagData.length] = bagData[i];
            }
        }
    bagData = updatedBagData;
    renderBagItems();
}

function updateSubtotal() {
    subtotal= 0;
    for (var i= 0; i< bagData.length; i++) 
        {
        subtotal += bagData[i].price;
    }
    document.getElementById("subtotal").textContent = "AED " + subtotal.toFixed(2);
}

function applyPromoCode() 
{
    var promoInput = document.getElementById("promo-code").value;
    if (promoInput === "DISCOUNT10") 
        {
        var discount = subtotal * 0.1;
        subtotal -= discount;
        alert("Promo code applied! You saved AED " + discount.toFixed(2));
    } 
    else 
    {
        alert("Invalid promo code.");
    }
    document.getElementById("subtotal").textContent = "AED " + subtotal.toFixed(2);
}

// Initial Render
renderBagItems();

