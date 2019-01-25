module.exports = {
    getInvoList: (req, res, next)=>{
        req.app.get('db').get_inventory()
        .then(items=>res.status(200).send(items))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err)
        })
    },
    postProduct: (req, res, next)=>{
        const {name, price, img} = req.body
        req.app.get('db').create_product([name, price, img])
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err)
        })
    }
} 