
const buyTickets = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.js-close-modal');
const modalcontainer = document.querySelector('.js-modal-container');

function showModal() {
  modal.classList.add('open')
 
}

function hideModal() {
  modal.classList.remove('open')
}

for (const buyTicket of buyTickets) {
  buyTicket.addEventListener('click', showModal)
  
  
}

closeModal.addEventListener('click', hideModal)

modal.addEventListener('click', hideModal)

modalcontainer.addEventListener('click', function(event) {
  event.stopPropagation()
})
