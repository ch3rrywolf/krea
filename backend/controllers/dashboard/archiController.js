class archiController {
    get_archi_request = async(req, res) => {
        console.log(req.query)
    }
}

module.exports = new archiController()