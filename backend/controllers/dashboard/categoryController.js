const categoryModel = require('../../models/categoryModel')
const formidable = require('formidable')
class categoryController {
    add_category = async (req, res) => {
        const form = new formidable.IncomingForm();
        form.parse(req,async(err,fields,files)=>{
            console.log(files)
            console.log(fields)
        })
        
    }

    get_category = async (req, res) => {
        console.log("fgf")
    }

}

module.exports = new categoryController()