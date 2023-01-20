const { default: axios } = require("axios")

module.exports = class PromoListRepository {
    URL = new URL('https://card.wb.ru/cards/list')

    constructor(promoIds) {
        this.URL.searchParams.set('locale','ru')
        this.URL.searchParams.set('curr','rub')
        this.URL.searchParams.set('lang','ru')
        this.URL.searchParams.set('nm',encodeURI(promoIds))
    }

    getAdvertsObjects () {
        return axios.get(this.URL.href).then(value => value.data.data.products)
    }
}