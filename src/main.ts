import './style.scss'
import { getPhotos } from './modules/getPhotos'
import { api } from './modules/api'
import { setLocalStorage, localStorageHistory } from './modules/localStorage'

const form = document.querySelector('form') as HTMLFormElement

localStorageHistory()

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = (document.querySelector('.search-form__input') as HTMLInputElement).value;
    setLocalStorage(query);
    getPhotos(api, query);
})