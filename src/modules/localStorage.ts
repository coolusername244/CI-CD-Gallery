export const searchHistory: string[] = []

export const localStorageHistory = (): void => {
    const localStorageHistory = localStorage.getItem('searchHistory')
    if (localStorageHistory) {
        const values: string[] = JSON.parse(localStorageHistory)
        values.forEach(item => {
            searchHistory.push(item)
        })

    }
}

export const setLocalStorage = (query: string): void => {
    if (query !== '') {
        searchHistory.push(query)
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
    }
}

