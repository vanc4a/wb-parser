const DataProvider = require("./providers/DataProvider")

exports.promo = (req,res) => {
    let dataProvider = new DataProvider()
    if(!req.query.text){
        return res.status(404).send('Nothing to search.')
    }
    dataProvider.getPromo(req.query.text).then(promo => res.send(promo)).catch(err => {
        if(err == 404) {
            return res.status(404).send('Bad request.')
        }
        return res.status(500).send('Something went wrong.')
    })
}