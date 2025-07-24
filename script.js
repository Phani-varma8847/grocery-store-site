let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;

  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("total").textContent = total;

  const cartItems = document.getElementById("cart-items");
  const li = document.createElement("li");
  li.textContent = `${item} - ₹${price}`;
  cartItems.appendChild(li);
}
