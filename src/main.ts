import './style.scss';
import { getPhotos } from './modules/getPhotos';
import { api } from './modules/api';
import { setLocalStorage, localStorageHistory, searchHistory } from './modules/localStorage';
import { displaySearchHistory, hideSearchHistory } from './modules/searchHistory';

const form = document.querySelector('form') as HTMLFormElement;
const searchBar = document.querySelector("#search") as HTMLInputElement;

localStorageHistory()

document.addEventListener('click', (e) => {
    if (e.target !== searchBar) {
        hideSearchHistory();
    } else {
        displaySearchHistory(searchHistory);
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = (document.querySelector('.search-form__input') as HTMLInputElement).value;
    hideSearchHistory();
    setLocalStorage(query);
    getPhotos(api, query);
});
