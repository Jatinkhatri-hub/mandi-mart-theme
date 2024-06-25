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
  fetch('')
}