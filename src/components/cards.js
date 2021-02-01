import getAllDataJs from './getAllDataJs'
import getByDataJs from './getByDataJs'

export default function cards() {
  const cards = getAllDataJs('card')
  cards.forEach(card => {
    const buttonAnswer = getByDataJs('buttonAnswer', card)
    const answer = getByDataJs('hiddenAnswer', card)
    buttonAnswer.addEventListener('click', () => {
      answer.classList.toggle('hidden')
    })
  })
}
