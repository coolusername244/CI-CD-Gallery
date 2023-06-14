import { IArr } from "../interfaces/IArr"

export const renderPhotos = (arr: IArr[]) => {
    const imageDisplay = document.querySelector('#image-display') as HTMLElement
    imageDisplay.innerHTML = ''
    arr.forEach(item => {
        const article: string = `
            <div class='img-item'>
                <img src='${item.urls.full}' alt='${item.alt_description}'>
            </div>
        `
        imageDisplay.innerHTML += article
    })
}