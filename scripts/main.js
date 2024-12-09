document.addEventListener('DOMContentLoaded', function () {
    const cartCount = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Initialize cart items from localStorage or an empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (!Array.isArray(cartItems)) {
        cartItems = [];
    }

    // Initialize the cart count display
    updateCartCount(cartItems);

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const bookCard = this.closest('.book-card');
            const bookTitle = bookCard.querySelector('.book-title').innerText;

            // Add the book to the cart (allow duplicates)
            cartItems.push({ title: bookTitle });

            // Save the updated cart items back to localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Update the cart count display
            updateCartCount(cartItems);
        });
    });

    function updateCartCount(cartItems) {
        cartCount.textContent = cartItems.length > 0 ? cartItems.length : '0';
    }
});
