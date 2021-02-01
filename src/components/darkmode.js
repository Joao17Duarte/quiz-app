import getByDataJs from './getByDataJs'
import getAllDataJs from './getAllDataJs'

export default function darkmode() {
  const darkmodeButton = getByDataJs('darkmode'),
    body = getByDataJs('body'),
    header = document.querySelector('header'),
    navBar = document.querySelector('.navigation'),
    navButtons = document.querySelectorAll('.fas'),
    buttons = document.querySelectorAll('.btn-showAnswer'),
    formEl = getByDataJs('form'),
    bookmarkIcons = getAllDataJs('bookmarkIcon'),
    cards = getAllDataJs('card'),
    buttonSubmit = document.querySelectorAll('.btn-form'),
    answerButtons = document.querySelectorAll('.btn-answer'),
    checkedBookmark = document.querySelectorAll('.bookmark')

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
}
