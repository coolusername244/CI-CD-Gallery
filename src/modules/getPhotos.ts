import { renderPhotos } from "./renderPhotos";

export const getPhotos = async (url: string, userInput: string) => {
    const response = await fetch(url + userInput)
    const data = await response.json();
    renderPhotos(data)
}