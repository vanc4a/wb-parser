const { default: axios } = require("axios")

module.exports = class AdvertsRepository {
    URL = new URL('https://catalog-ads.wildberries.ru/api/v5/search')

    constructor(searchString) {
        this.URL.searchParams.set('keyword',searchString)
    }

    getAdvertsIds () {
        return axios.get(this.URL.href).then(value => {
            let idsString = '';
            console.log(value.data.adverts.length)
            value.data.adverts.map(product => idsString += `${product.id};`)
            return idsString
        })
    }
}