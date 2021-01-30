const home = getElement('section-home'),
  bookmark = getElement('section-bookmark'),
  form = getElement('section-create'),
  settings = getElement('section-settings'),
  navHome = getElement('btnHome'),
  navBook = getElement('btnBook'),
  navCreate = getElement('btnCreate'),
  navSetting = getElement('btnSettings'),
  header = document.querySelector('h1'),
  bookmarkIcons = document.querySelectorAll('[data-js="bookmarkIcon"]'),
  formEl = getElement('form'),
  labels = document.querySelectorAll('[data-js="labelForm"]'),
  counters = document.querySelectorAll('[data-js="counter"]'),
  formInput = getElement('formInput'),
  darkmodeButton = getElement('darkmode'),
  buttons = document.querySelectorAll('.btn-showAnswer'),
  answerButtons = document.querySelectorAll('.btn-answer')

console.log(buttons)

navHome.addEventListener('click', () => {
  home.classList.remove('hidden')
  bookmark.classList.add('hidden')
  form.classList.add('hidden')
  settings.classList.add('hidden')

  header.textContent = 'QuizGenerator'

  navHome.classList.add('active')
  navBook.classList.remove('active')
  navCreate.classList.remove('active')
  navSetting.classList.remove('active')
})

navBook.addEventListener('click', () => {
  home.classList.add('hidden')
  bookmark.classList.remove('hidden')
  form.classList.add('hidden')
  settings.classList.add('hidden')
  header.textContent = 'Bookmark'

  navHome.classList.remove('active')
  navBook.classList.add('active')
  navCreate.classList.remove('active')
  navSetting.classList.remove('active')
})

navCreate.addEventListener('click', () => {
  home.classList.add('hidden')
  bookmark.classList.add('hidden')
  form.classList.remove('hidden')
  settings.classList.add('hidden')
  header.textContent = 'Create your Question'

  navHome.classList.remove('active')
  navBook.classList.remove('active')
  navCreate.classList.add('active')
  navSetting.classList.remove('active')
})

navSetting.addEventListener('click', () => {
  home.classList.add('hidden')
  bookmark.classList.add('hidden')
  form.classList.add('hidden')
  settings.classList.remove('hidden')
  header.textContent = 'Settings'

  navHome.classList.remove('active')
  navBook.classList.remove('active')
  navCreate.classList.remove('active')
  navSetting.classList.add('active')
})

formEl.addEventListener('submit', event => {
  event.preventDefault()
  formEl.reset()
  formInput.focus()
})

bookmarkIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('fa')
  })
})

labels.forEach(label => {
  const inputBox = label.querySelector('[data-js="formInput"]')
  const counter = label.querySelector('[data-js="counter"]')
  inputBox.addEventListener('input', event => {
    counter.textContent = `${event.currentTarget.value.length}/100`
  })
})

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}

const cards = document.querySelectorAll('[data-js="card"]')

cards.forEach(card => {
  const buttonAnswer = card.querySelector('[data-js="buttonAnswer"]')
  const answer = card.querySelector('[data-js="hiddenAnswer"]')
  buttonAnswer.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
})

darkmodeButton.addEventListener('click', () => {
  buttons.forEach(button => button.classList.toggle('btn-darkmode'))
  answerButtons.forEach(answerButton =>
    answerButton.classList.toggle('btn-darkmode')
  )
})
