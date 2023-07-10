const ads = require("../schema/addSchema")

module.exports = {
    adAds : (req, res) => {
        const newAd = new ads({
            name : 'alpha',
            url : 'asfghjkl'
        })

        newAd.save().then(()=>{
            console.log('data saved')
            res.send("Data Saved in Db")
        }).catch((e)=>{
            console.log(e.message)
        })
    },
    getAds : async (req,res) => {
        const allAds = await ads.find({})
        res.send(allAds)
    }
}