const categoryModel = require('../../models/categoryModel')
const { responseReturn } = require('../../utiles/response')
const cloudinary = require('cloudinary').v2
const formidable = require('formidable')

class categoryController {
    add_category = async (req, res) => {
        const form = new formidable.IncomingForm(); 
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error("Error parsing form:", err);
                return responseReturn(res, 404, { error: 'Something went wrong during parsing' });
            } else {
                let { name } = fields;
                let { image } = files;
    
                
                // console.log("Parsed fields:", fields);
                // console.log("Parsed files:", files);
    
                if (Array.isArray(name)) {
                    name = name[0]; 
                }
    
                if (name && typeof name === 'string') {
                    name = name.trim();
                } else {
                    return responseReturn(res, 400, { error: 'Invalid category name' });
                }
    
                const slug = name.split(' ').join('-');
    
                cloudinary.config({
                    cloud_name: process.env.cloud_name,
                    api_key: process.env.api_key,
                    api_secret: process.env.api_secret,
                    secure: true
                });
    
                try {
                    
                    const imageFile = image && image[0]; 
                
                    if (!imageFile || !imageFile.filepath) {
                        return responseReturn(res, 400, { error: 'No image file uploaded' });
                    }
                
                
                    const result = await cloudinary.uploader.upload(imageFile.filepath, { folder: 'categorys' });
                
                    if (result) {
                        const category = await categoryModel.create({
                            name,
                            slug,
                            image: result.url
                        });
                        responseReturn(res, 201, { category, message: 'Category added successfully' });
                    } else {
                        responseReturn(res, 404, { error: 'Image upload failed' });
                    }
                } catch (error) {
                    console.error("Error uploading to Cloudinary or saving to DB:", error);
                    responseReturn(res, 500, { error: 'Internal server error' });
                }
            }
        })
    }
    
}

module.exports = new categoryController()
