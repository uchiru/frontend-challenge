export const setToLocalStorage = (data: any, key: string) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    }
}