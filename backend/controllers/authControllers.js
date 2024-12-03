const adminModel = require('../models/adminModel')
const archiModel = require('../models/archiModel')
const archiProModel = require('../models/archiProModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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

    getUser = async(req,res)=>{
        const { id, role } = req;

        try {
            if (role === 'admin') {
                const user = await adminModel.findById(id)
                responseReturn(res, 200, { userInfo: user })
            } else {
                console.log('Archi info')
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = new authControllers()