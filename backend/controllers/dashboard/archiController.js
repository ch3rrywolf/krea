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
        responseReturn(res, 500, { error: error.message })
       }
    }

    get_archi = async(req, res) => {
        const { archiId } = req.params

        try {
            const archi = await archiModel.findById(archiId)
            responseReturn(res, 200, {archi})
        } catch (error) {
            responseReturn(res, 500, {error : error.message})
        }
    }

    archi_status_update = async(req, res) => {
        const {archiId, status} = req.body
        try {
            await archiModel.findByIdAndUpdate(archiId, {
                status
            })
            const archi = await archiModel.findById(archiId)
            responseReturn(res, 200, { archi, message: 'archi status update success' })
        } catch (error) {
            responseReturn(res, 500, { error: error.message})
        }
    }
}

module.exports = new archiController()