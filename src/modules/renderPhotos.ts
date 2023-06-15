import { IArr } from "../interfaces/IArr"

export const renderPhotos = (arr: IArr[]): void => {
    const imageDisplay = document.querySelector('#image-display') as HTMLElement
    imageDisplay.innerHTML = ''
    arr.forEach(item => {
        const article: string = `
          <div class="image__card">
            <div class="image__content">
              <div class="image__content-front">
                <img class="image__content-image" src="${item.urls.full}" alt="${item.alt_description}">
              </div>
              <div class="image__content-back">
                <p class="image__content-description">${item.description}</p>
              </div>
            </div>
          </div>
        `
        imageDisplay.innerHTML += article
    })
}