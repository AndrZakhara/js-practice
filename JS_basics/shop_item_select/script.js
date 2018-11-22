const item = document.querySelectorAll('.item');
const totalItems = document.querySelector('#total-price');
let currentTotalPrice = 0;

function itemClick () {
  const price = this.getAttribute('data-price');

  if(this.classList.contains('selected')) {
    this.classList.remove('selected');
    currentTotalPrice -= +price;
    totalItems.value = `${currentTotalPrice} $`;
  }
  else {
    this.classList.add('selected');
    currentTotalPrice += +price;
    totalItems.value = `${currentTotalPrice} $`;
  }
}

function initializePrise() {
  item.forEach((item) => {
    item.onclick = itemClick;
    const currentItemPrice = item.getAttribute('data-price');
    item.querySelector('.item-price').innerHTML += ` ${currentItemPrice} $`;
  });
  totalItems.value = `${currentTotalPrice} $`;
}

document.addEventListener('DOMContentLoaded', initializePrise);