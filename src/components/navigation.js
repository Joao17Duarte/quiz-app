import getAllDataJs from './getAllDataJs'

export default function navigation() {
  const pages = getAllDataJs('page')
  const navButtons = getAllDataJs('navBtn')

  navButtons.forEach(button => {
    const clickedButtonName = button.dataset.name
    button.addEventListener('click', () => {
      pages.forEach(page => {
        const pageName = page.dataset.name
        page.classList.toggle('hidden', clickedButtonName !== pageName)
      })

      navButtons.forEach(button => {
        button.classList.toggle(
          'active',
          clickedButtonName === button.dataset.name
        )
      })
    })
  })
}
