import './style.scss'
import { getPhotos } from './modules/getPhotos'
import { api } from './modules/api'

const form = document.querySelector('form') as HTMLFormElement


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const query = (document.querySelector('.search-form__input') as HTMLInputElement).value;
    getPhotos(api, query)
})