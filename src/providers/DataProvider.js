const AdvertsRepository = require("../repositories/AdvertsRepository");
const PromoListRepository = require("../repositories/PromoListRepository");

module.exports = class DataProvider {

    getPromo(requestString){
        let promoArray = [];
        return new AdvertsRepository(requestString).getAdvertsIds().then(advertObject => {
            return new PromoListRepository(advertObject.ids).getAdvertsObjects().then(promoObjects => {
                promoObjects.map(promo => {
                    promoArray.push({brand: promo.brand, position: advertObject.positions[promo.id]})
                })

                return promoArray;
            })
        }).catch(err => { throw err })
    }
}