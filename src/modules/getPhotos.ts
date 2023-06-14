import { IArr } from "../interfaces/IArr";
import { renderPhotos } from "./renderPhotos";

export const getPhotos = async (url: string, userInput: string): Promise<void> => {
    const response = await fetch(url + userInput)
    const data: IArr[] = await response.json();
    renderPhotos(data)
}