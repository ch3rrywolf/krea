const categoryModel = require('../../models/categoryModel')
const { responseReturn } = require('../../utiles/response')
// const cloudinary = require('cloudinary').v2
const formidable = require('formidable')

class categoryController {

    add_category = async (req, res) => {
        const form = formidable()
        form.parse(req,async(err,fields,files)=>{
            let {name} = fields
            let {image} = files
        })
    }

    get_category = async (req, res) => {
        console.log('olg')
    }

}

module.exports = new categoryController()