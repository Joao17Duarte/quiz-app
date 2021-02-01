import getByDataJs from './getByDataJs'

export default function navigation() {
  const home = getByDataJs('section-home'),
    bookmark = getByDataJs('section-bookmark'),
    form = getByDataJs('section-create'),
    settings = getByDataJs('section-settings'),
    navHome = getByDataJs('btnHome'),
    navBook = getByDataJs('btnBook'),
    navCreate = getByDataJs('btnCreate'),
    navSetting = getByDataJs('btnSettings'),
    title = document.querySelector('h1')

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
}
