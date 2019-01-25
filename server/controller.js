module.exports = {
    getInvoList: (req, res, next)=>{
        req.app.get('db').get_inventory()
        .then(items=>res.status(200).send(items))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err)
        })
    }
} 