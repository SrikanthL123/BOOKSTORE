// Retrieve the cart data from localStorage or use a default cart if no data is found
let cart = JSON.parse(localStorage.getItem('cartItems')) || [
    { title: "Mountain is You", price: 10 },
    { title: "IKIGAI", price: 12.50 },
    { title: "Dorian Gray", price: 15.50 },
];

// Function to render the order summary on the checkout page
function renderOrderSummary() {
    const orderList = document.getElementById('order-list');
    let totalPrice = 0;
    
    orderList.innerHTML = '';  // Clear any existing list items

    // Populate the list with cart items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.title} - $${item.price.toFixed(2)}`;
        orderList.appendChild(li);
        totalPrice += item.price;
    });

    // Update the total price display
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission
    document.getElementById('checkout-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Order placed successfully!");
    });
    
    renderOrderSummary();
});

