const DataProvider = require("./Providers/DataProvider")

exports.promo = (req,res) => {
    let dataProvider = new DataProvider()
    try {
        let searchString = ''
        if(!req.query.text){
            throw 'No search text.'
        }
        searchString = req.query.text.replace('%',' ')
        dataProvider.getPromo(searchString).then(promo => console.log(promo))
    }
    catch {
        res.status(500).send('Something went wrong.')
    }
}