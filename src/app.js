import '/src/app.scss'


console.log('123')

document.addEventListener("DOMContentLoaded", function () {
  const openProfileUploadImageModal = document.querySelector('.profile__upload-btn')
  const modal = document.querySelector('.modal')
  openProfileUploadImageModal.addEventListener('click', function () {
    modal.style.opacity = 1
    modal.style.pointerEvents = 'auto'
  })
  document.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.removeAttribute('style');
    }
  })
})


