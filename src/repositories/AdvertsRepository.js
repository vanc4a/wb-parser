const { default: axios } = require("axios")

module.exports = class AdvertsRepository {
    URL = new URL('https://catalog-ads.wildberries.ru/api/v5/search')

    constructor(searchString) {
        this.URL.searchParams.set('keyword',String(searchString))
    }

    getAdvertsIds () {
        return axios.get(this.URL.href).then(value => {
            let idsString = '';
            let advertsArr = [];
            let positionsObject = {};
            let posNum = 0; 
            if(value.data.adverts == null){
               throw 404
            }

            value.data.pages.map(page => {
                page.positions.map(pos => advertsArr.push(`page: ${page.page}, position: ${pos}`));
            })

            value.data.adverts.map(product => {
                idsString += `${product.id};`;
                positionsObject[product.id] = advertsArr[posNum]
                posNum += 1;
            })
            
            return {ids: idsString, positions: positionsObject}
        })
    }
}