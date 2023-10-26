export default function initModal() {
  const modal = document.querySelector('.modal');
  const closeButton = document.querySelector('.modal__close-button')
  const cards = document.querySelectorAll('.card:not(.modal__card)')

  if (!modal || !closeButton) return

  const showModal = () => {
    modal.classList.remove('modal__closed')
  }
  const hideModal = () => {
    modal.classList.add('modal__closed')
  }

  closeButton.addEventListener('pointerup', () => {
    hideModal() 
  })

  cards.forEach(card => {
    card.addEventListener('pointerup', (e) => {
        if (e.target.classList.contains('button')) return
        showModal()
    })
  })

  document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
        hideModal()
    }
  })


}
