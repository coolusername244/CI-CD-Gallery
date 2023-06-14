import { getPhotos } from "./getPhotos";
import { api } from "./api";

const dropdown = document.querySelector('#dropdown') as HTMLElement;

export const displaySearchHistory = (searchHistory) => {
    dropdown.innerHTML = '';
    dropdown.style.display = 'inline';

    for (let i = 0; i < 5; i++) {
        const query = searchHistory[i];
        if (query === undefined) {
            break;
        }
        const html = `<div id='${query}' class='history'>${query}</div>`;
        dropdown.innerHTML += html;
    }

    const divs = document.querySelectorAll(`.history`);

    divs.forEach(div => {
        div.addEventListener('click', () => {
            getPhotos(api, div.id);
        })
    })
}

export const hideSearchHistory = () => {
    dropdown.style.display = 'none'
}