import getAllDataJs from './getAllDataJs'

export default function bookmark() {
  const bookmarkIcons = getAllDataJs('bookmarkIcon')
  bookmarkIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.toggle('fa')
    })
  })
}
