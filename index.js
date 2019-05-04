var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var num = Math.floor(Math.random() * 100) + 1;

 item = {
   itemName: item,
   itemPrice: num
 };
 cart.push(item);

 return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var output = "In your cart, you have ";

  if (cart.length == 1) {
    return output + `${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else
  if (cart.length > 1)
  {
    for (var i = 0; i < cart.length - 1; i++){
      output = output + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    return output + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
  }
  else {
    return "Your shopping cart is empty.";
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
