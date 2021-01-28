//sections html

const home = document.querySelector('[data-js=section-index]')
const bookmark = document.querySelector('[data-js=section-book]')
const form = document.querySelector('[data-js=section-form]')
const header = document.querySelector('h1')

const bookmarkIcon = document.querySelectorAll('[data-js="bookmark-icon"]')

//navigation buttons
const navHome = document.querySelector('[data-js=btnHome]')
const navBook = document.querySelector('[data-js=btnBook]')
const navCreate = document.querySelector('[data-js=btnCreate]')

navHome.addEventListener('click', () => {
  home.classList.remove('hidden')
  bookmark.classList.add('hidden')
  form.classList.add('hidden')
  header.textContent = 'QuizGenerator'

  navHome.classList.add('active')
  navBook.classList.remove('active')
  navCreate.classList.remove('active')
})

navBook.addEventListener('click', () => {
  home.classList.add('hidden')
  bookmark.classList.remove('hidden')
  form.classList.add('hidden')
  header.textContent = 'Bookmark'

  navHome.classList.remove('active')
  navBook.classList.add('active')
  navCreate.classList.remove('active')
})

navCreate.addEventListener('click', () => {
  home.classList.add('hidden')
  bookmark.classList.add('hidden')
  form.classList.remove('hidden')
  header.textContent = 'Create your Question'

  navHome.classList.remove('active')
  navBook.classList.remove('active')
  navCreate.classList.add('active')
})

//section 16 index
//section 65 bookmark
//section 148 form

bookmarkIcon.forEach(icon => {
  const bookIcon = icon.querySelector('[data-js="bookmarkIcon"]')

  bookIcon.addEventListener('click', () => {
    bookIcon.classList.toggle('')
  })
})

/*



const cards = document.querySelectorAll('[data-js="card"]')

cards.forEach(card => {
  const button = card.querySelector('[data-js="button"]')
  const answer = card.querySelector('[data-js="answer"]')
  
  button.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
})

*/
