import getByDataJs from './getByDataJs'

export default function form() {
  const formEl = getByDataJs('form'),
    formInput = getByDataJs('formInput')
  formEl.addEventListener('submit', event => {
    event.preventDefault()
    formEl.reset()
    formInput.focus()
  })
}
