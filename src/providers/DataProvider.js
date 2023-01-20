const AdvertsRepository = require("../repositories/AdvertsRepository");
const PromoListRepository = require("../repositories/PromoListRepository");

module.exports = class DataProvider {

    getPromo(requestString){
        return new AdvertsRepository(requestString).getAdvertsIds().then(idsString => {
            return new PromoListRepository(idsString).getAdvertsObjects().then(promoObjects => promoObjects.length)
        })
    }
}