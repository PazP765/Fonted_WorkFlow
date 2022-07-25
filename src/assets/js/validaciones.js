var discounted = document.getElementById('isDiscounted');
var no_discounted = document.getElementById('isNotDiscounted')
var discount_percentage = document.getElementById('discountPercentage')

var discount_percentage1 = document.getElementById('Motivo')

function updateStatus() {
  if (discounted.checked) {
    discount_percentage.disabled = true;
    discount_percentage1.disabled=false;
    

  } else {
    discount_percentage.disabled = false;
    discount_percentage1.disabled=true;
  }
}

discounted.addEventListener('change', updateStatus)
no_discounted.addEventListener('change', updateStatus)