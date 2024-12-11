// Wishlist Data
const wishlistData = [
    { id: 1, name: 'CeraVe Dry Skin', price: 'AED 112.00', image: 'https://static.thcdn.com/images/large/original//productimg/1600/1600/11798696-1235192205505719.jpg' },
    { id: 2, name: 'Tom Ford Ombre Leather', price: 'AED 680.00', image: 'https://www.sephora.ae/dw/image/v2/BKWK_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw0b69f434/images/hi-res/PID_principal/P3426001_principal.jpg?sw=585&sh=585&sm=fit' },
    { id: 3, name: 'Dior Homme Intense', price: 'AED 420.00', image: 'https://shop-beauty.dior.ae/cdn/shop/products/Y0479201_F077926009_E01_GHC_de_DE_1200x1200.jpg?v=1706880763' },
    { id: 4, name: 'Into the night', price: 'AED 85.00', image: 'https://www.bathandbodyworks.ae/assets/styles/bbw/image-thumb__288114__product_listing/28003659_1.jpg' },
    { id: 5, name: 'Al-Jadayel Hair Oil', price: 'AED 49.00', image: 'Al-Jadayel Hair Oil.jpg' },
];
// Render Wishlist Items
function renderWishlist() {
    const wishlistContainer = document.getElementById('wishlist-items');
    wishlistContainer.innerHTML = '';
    
    wishlistData.forEach(function(item) {
        const wishlistItem = document.createElement('div');
        wishlistItem.classList.add('wishlist-item');
        wishlistItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button class="remove-btn" onclick="removeFromWishlist(${item.id})">Remove</button>
            <button class="addtobag-btn" onclick="addToBag(${item.id})">Add to Bag</button>
        `;
        wishlistContainer.appendChild(wishlistItem);
    });
}

// Remove Item from Wishlist
function removeFromWishlist(itemId) {
    let index= -1; // assuming the item is not found.
    for (let i= 0; i< wishlistData.length; i++) {
        if (wishlistData[i].id === itemId) {
            index = i; 
            break; 
        }
    }
    if (index >-1) {
        wishlistData.splice(index, 1); // splice to change the contents of an array by removing the elements.
        renderWishlist();
    }
}

