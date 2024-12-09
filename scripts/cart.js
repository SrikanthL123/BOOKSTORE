document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.querySelector('.cart-items-container');
    const totalPriceElement = document.getElementById('total-price');

    // Retrieve cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Display cart items in the cart page
    if (cartItems.length > 0) {
        cartItems.forEach((item) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            
            // Add HTML for the cart item
            cartItem.innerHTML = `
                <span class="item-title">${item.title}</span>
                <span class="item-price">$10.00</span>
                <button class="remove-item-btn">Remove</button>
            `;

            // Add event listener to the "Remove" button
            cartItem.querySelector('.remove-item-btn').addEventListener('click', function () {
                removeItemFromCart(item.title);
            });

            // Append the cart item to the container
            cartItemsContainer.appendChild(cartItem);
        });

        // Calculate and display the total price
        updateTotalPrice(cartItems);
    } else {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }

    // Function to calculate the total price
    function updateTotalPrice(cartItems) {
        const pricePerItem = 10.00; // Example price
        const total = cartItems.length * pricePerItem;
        totalPriceElement.textContent = total.toFixed(2);
    }

    // Function to remove an item from the cart
    function removeItemFromCart(title) {
        cartItems = cartItems.filter((item) => item.title !== title);

        // Update localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Refresh the page to reflect changes
        location.reload();
    }
});
