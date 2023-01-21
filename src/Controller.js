const DataProvider = require("./Providers/DataProvider")

exports.promo = (req,res) => {
    let dataProvider = new DataProvider()
    let searchString = ''

    if(!req.query.text){
        return res.status(404).send('Nothing to search.')
    }
    searchString = req.query.text.replace('%',' ')
    dataProvider.getPromo(searchString).then(promo => res.send(promo)).catch(err => {
        if(err == 404) {
            return res.status(404).send('Bad request.')
        }
        return res.status(500).send('Something went wrong.')
    })
}