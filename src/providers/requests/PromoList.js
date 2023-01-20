module.exports = class PromoList {
    URL = new URL('https://card.wb.ru/cards/list')

    constructor(promoIds) {
        this.URL.searchParams.set('locale','ru')
        this.URL.searchParams.set('curr','rub')
        this.URL.searchParams.set('lang','ru')
        this.URL.searchParams.set('nm',encodeURI(promoIds))
    }
}