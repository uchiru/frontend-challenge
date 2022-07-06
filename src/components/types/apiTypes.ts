export type ImgResponseType = {
    id: string
    url: string
    width: string
    height: string
    breeds: Array<any> // массив больших объектов, типизация которых займёт много времени, а в проекте использоваться не будет. Упустил в связи с тем, что это тестовое
}

export type ImgAppType = {
    id: string
    url: string
    width: string
    height: string
    isLike: boolean
    breeds: Array<any> // массив больших объектов, типизация которых займёт много времени, а в проекте использоваться не будет. Упустил в связи с тем, что это тестовое
}