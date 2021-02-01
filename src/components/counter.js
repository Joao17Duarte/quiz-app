import getByDataJs from './getByDataJs'
import getAllDataJs from './getAllDataJs'

export default function counter() {
  const labels = getAllDataJs('labelForm'),
    counters = getAllDataJs('counter')

  labels.forEach(label => {
    const inputBox = getByDataJs('formInput', label)
    const counter = getByDataJs('counter', label)
    inputBox.addEventListener('input', event => {
      counter.textContent = `${event.currentTarget.value.length}/100`
    })
  })
}
