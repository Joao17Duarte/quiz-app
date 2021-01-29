//sections html

const home = getElement('section-home')
const bookmark = getElement('section-bookmark')
const form = getElement('section-create')
const header = document.querySelector('h1')

// bookmark icon selector
const bookmarkIcons = document.querySelectorAll('[data-js="bookmarkIcon"]')

//navigation buttons
const navHome = getElement('btnHome')
const navBook = getElement('btnBook')
const navCreate = getElement('btnCreate')

//form items
const formEl = getElement('form')
const questionInput = getElement('questionInput')

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

bookmarkIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('fa')
  })
})

formEl.addEventListener('submit', event => {
  event.preventDefault()
  formEl.reset()
  questionInput.focus()
})

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}

// const counter = document.querySelectorAll('[data-js="counter"]')

// labelCounter.forEach(label => {
//   const questionInput = getElement('questionInput')
//   const labelCounter = document.querySelectorAll('[data-js="labelCounter"]')

//   labelCounter.addEventListener('input', event => {
//     questionInput
//     counter.textContent = `${event.currentTarget.value.length}/300`
//   })
// })

/*


*/
const labels = document.querySelectorAll('[data-js="labelForm"]')

labels.forEach(label => {
  const inputBox = label.querySelector('[data-js="formInput"]')
  const counter = label.querySelector('[data-js="counter"]')
  inputBox.addEventListener('input', event => {
    counter.textContent = `${event.currentTarget.value.length}/100`
  })
})
