const adminModel = require('../models/adminModel')
const archiModel = require('../models/archiModel')
const archiProModel = require('../models/archiProModel')
const bcrypt = require('bcrypt')
const formidable = require('formidable');
const cloudinary = require('cloudinary').v2;
const { responseReturn } = require('../utiles/response')
const { createToken } = require('../utiles/tokenCreate')
class authControllers {
    admin_login = async (req, res) => {
        const { email, password } = req.body
        try {
            const admin = await adminModel.findOne({ email }).select('+password')
            if(admin){
                const match = await bcrypt.compare(password,admin.password)
                if (match) {
                    const token = await createToken({
                        id: admin.id,
                        role: admin.role
                    })
                    res.cookie('accessToken', token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                    })
                    responseReturn(res,200,{token,message : 'Login success'})
                } else {
                    responseReturn(res, 404, { error: "Password wrong" })
                }
            }else{
                responseReturn(res, 404, { error : "Email not found "})
            }
        } catch (error) {
            responseReturn(res, 500, { error : error.message })
        }
    }

    archi_login = async (req, res) => {
        const { email, password } = req.body
        try {
            const archi = await archiModel.findOne({ email }).select('+password')
            if(archi){
                const match = await bcrypt.compare(password,archi.password)
                if (match) {
                    const token = await createToken({
                        id: archi.id,
                        role: archi.role
                    })
                    res.cookie('accessToken', token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                    })
                    responseReturn(res,200,{token,message : 'Login success'})
                } else {
                    responseReturn(res, 404, { error: "Password wrong" })
                }
            }else{
                responseReturn(res, 404, { error : "Email not found "})
            }
        } catch (error) {
            responseReturn(res, 500, { error : error.message })
        }
    }

    archi_register = async (req, res) => {
        const { email, name, password } = req.body;
        try {
            const getUser = await archiModel.findOne({ email });
            if (getUser) {
                return responseReturn(res, 400, { error: 'Email already exists' });
            }
    
            const hashedPassword = await bcrypt.hash(password, 10);
            const archi = await archiModel.create({
                name,
                email,
                password: hashedPassword,
                method: 'manual',
                shopInfo: {}
            });
    
            await archiProModel.create({ myId: archi._id });
            const token = await createToken({ id: archi._id, role: archi.role })
            res.cookie('accessToken', token, {
                expires: new Date(Date.nom() + 7 * 24 * 60 * 60 * 1000)
            })
            return responseReturn(res, 201, {token, message: 'Register success' });
        } catch (error) {
            console.error(error); 
            return responseReturn(res, 500, { error: error.message });
        }
    };

    getUser = async (req, res) => {
        const { id, role } = req;

        try {
            if (role === 'admin') {
                const user = await adminModel.findById(id)
                responseReturn(res, 200, { userInfo: user })
            } else {
                const archi = await archiModel.findById(id)
                responseReturn(res, 200, { userInfo: archi })
            }
        } catch (error) {
            responseReturn(res, 500, { error: 'Internal server error' })
        }
    }

    profile_image_upload = async (req, res) => {
        const { id } = req;
        const form = new formidable.IncomingForm({ multiples: false });
        console.log('Formidable Config:', form.options);
    
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Formidable Error:', err);
                return responseReturn(res, 400, { error: 'Error parsing the form' });
            }
    
            console.log('Parsed Fields:', fields);
            console.log('Parsed Files:', files);
    
            const uploadedImage = files.image && files.image[0];
            if (!uploadedImage || !uploadedImage.filepath) {
                console.error('Image Filepath:', uploadedImage?.filepath);
                return responseReturn(res, 400, { error: 'Missing required parameter - file' });
            }
    
            const imagePath = uploadedImage.filepath;
    
            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true,
            });
    
            try {
                const result = await cloudinary.uploader.upload(imagePath, { folder: 'profile' });
                if (result) {
                    await archiModel.findByIdAndUpdate(id, { image: result.url });
                    const userInfo = await archiModel.findById(id);
                    return responseReturn(res, 201, { message: 'Image upload success', userInfo });
                } else {
                    return responseReturn(res, 500, { error: 'Image upload failed' });
                }
            } catch (error) {
                console.error('Cloudinary Upload Error:', error);
                return responseReturn(res, 500, { error: error.message });
            }
        });
    };
      
    profile_info_add = async (req, res) => {
        // console.log(req.body)
        const { division, district, shopName, sub_district } = req.body;
        const { id } = req;

        try {
            await archiModel.findByIdAndUpdate(id, {
                shopInfo : {
                    shopName,
                    division,
                    district,
                    sub_district                                        
                }
            })
            const userInfo = await archiModel.findById(id);
                    return responseReturn(res, 201, { message: 'Profile info add success', userInfo });
        } catch (error) {
            responseReturn(res, 500, { error: 'Internal server error' })
        }
    }
}

module.exports = new authControllers()