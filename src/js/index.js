//section html section
const home = getElement('section-home'),
  bookmark = getElement('section-bookmark'),
  form = getElement('section-create'),
  settings = getElement('section-settings'),
  body = document.querySelector('[data-js="body"]'),
  title = document.querySelector('h1'),
  header = document.querySelector('header'),
  //section navbar buttons
  navHome = getElement('btnHome'),
  navBook = getElement('btnBook'),
  navCreate = getElement('btnCreate'),
  navSetting = getElement('btnSettings'),
  navBar = document.querySelector('.navigation'),
  navButtons = document.querySelectorAll('.fas'),
  //section form
  formEl = getElement('form'),
  formInput = getElement('formInput'),
  labels = document.querySelectorAll('[data-js="labelForm"]'),
  counters = document.querySelectorAll('[data-js="counter"]'),
  buttonSubmit = document.querySelectorAll('.btn-form'),
  //section cards
  cards = document.querySelectorAll('[data-js="card"]'),
  buttons = document.querySelectorAll('.btn-showAnswer'),
  answerButtons = document.querySelectorAll('.btn-answer'),
  bookmarkIcons = document.querySelectorAll('[data-js="bookmarkIcon"]'),
  checkedBookmark = document.querySelectorAll('.bookmark'),
  //section darkmode
  darkmodeButton = getElement('darkmode')

navHome.addEventListener('click', () => {
  home.classList.remove('hidden')
  bookmark.classList.add('hidden')
  form.classList.add('hidden')
  settings.classList.add('hidden')

  title.textContent = 'QuizGenerator'

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
  title.textContent = 'Bookmark'

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
  title.textContent = 'Create your Question'

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
  title.textContent = 'Settings'

  navHome.classList.remove('active')
  navBook.classList.remove('active')
  navCreate.classList.remove('active')
  navSetting.classList.add('active')
})

cards.forEach(card => {
  const buttonAnswer = card.querySelector('[data-js="buttonAnswer"]')
  const answer = card.querySelector('[data-js="hiddenAnswer"]')
  buttonAnswer.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
})

bookmarkIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('fa')
  })
})

formEl.addEventListener('submit', event => {
  event.preventDefault()
  formEl.reset()
  formInput.focus()
})

labels.forEach(label => {
  const inputBox = label.querySelector('[data-js="formInput"]')
  const counter = label.querySelector('[data-js="counter"]')
  inputBox.addEventListener('input', event => {
    counter.textContent = `${event.currentTarget.value.length}/100`
  })
})

darkmodeButton.addEventListener('click', () => {
  buttons.forEach(button => button.classList.toggle('darkmode'))
  answerButtons.forEach(answerButton =>
    answerButton.classList.toggle('darkmode')
  )
  cards.forEach(card => card.classList.toggle('darkmode'))
  bookmarkIcons.forEach(icon => icon.classList.toggle('darkmode'))
  navButtons.forEach(icon => icon.classList.toggle('lightdarkmode'))
  navBar.classList.toggle('lightdarkmode')
  header.classList.toggle('darkmode')
  body.classList.toggle('lightdarkmode')
  formEl.classList.toggle('darkmode')
  buttonSubmit.forEach(btn => btn.classList.toggle('lightdarkmode'))
  checkedBookmark.forEach(checkedIcon =>
    checkedIcon.classList.toggle('lightdarkmode')
  )
})

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}
