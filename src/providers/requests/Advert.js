module.exports = class Advert {
    URL = new URL('https://catalog-ads.wildberries.ru/api/v5/search')

    constructor(searchString) {
        this.URL.searchParams.set('keyword',encodeURI(searchString))
    }
}