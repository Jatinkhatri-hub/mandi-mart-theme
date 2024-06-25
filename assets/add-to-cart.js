document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.atc-button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const variantId = this.getAttribute('data-variant-id');
      
      if(variantId) {
        addToCart(variantId);
      }
    })
  });
});

function addToCart(variantId) {
  fetch('/cart/add.js', {
    method: 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [{
        id: variantId,
        quantity: 1
      }]
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Product added to cart:", data);
  });
}