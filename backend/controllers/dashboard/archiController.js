const archiModel = require("../../models/archiModel")
const { responseReturn } = require("../../utiles/response")

class archiController {
    get_archi_request = async(req, res) => {
       const { page, searchValue, parPage } = req.query
       const skipPage = parseInt(parPage) * (parseInt(page) - 1)
       try {
        if (searchValue) {

        } else {
            const archis = await archiModel.find({ status: 'pending' }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
            const totalArchi = await archiModel.find({ status: 'pending' }).countDocuments()
            responseReturn(res, 200, { totalArchi, archis})
        }
       } catch (error) {

       }
    }
}

module.exports = new archiController()