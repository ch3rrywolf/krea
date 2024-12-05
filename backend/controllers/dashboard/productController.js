const formidable = require('formidable');
const productModel = require('../../models/productModel');
const cloudinary = require('cloudinary').v2;
const { responseReturn } = require('../../utiles/response') 

class productController {
    add_product = async (req, res) => {
        const { id } = req;
        const form = new formidable.IncomingForm({ multiples: true });

        form.parse(req, async (err, field, files) => {
            if (err) {
                return responseReturn(res, 400, { error: 'Form parsing error' });
            }

            let { name, category, description, stock, price, discount, shopName, brand } = field;

            name = (name || '').toString().trim();
            category = (category || '').toString().trim();
            description = (description || '').toString().trim();
            shopName = (shopName || '').toString().trim();
            brand = (brand || '').toString().trim();

            const slug = name.split(' ').join('-');

            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true,
            });

            try {
                let allImageUrl = [];

                const images = Array.isArray(files.images) ? files.images : [files.images];
                for (let i = 0; i < images.length; i++) {
                    const result = await cloudinary.uploader.upload(images[i].filepath, { folder: 'products' });
                    allImageUrl.push(result.url);
                }

                const product = await productModel.create({
                    archiId: id,
                    name,
                    slug,
                    shopName,
                    category,
                    description,
                    stock: parseInt(stock || '0'),
                    price: parseInt(price || '0'),
                    discount: parseInt(discount || '0'),
                    images: allImageUrl,
                    brand,
                });

                responseReturn(res, 201, { message: 'Product added successfully' });
            } catch (error) {
                responseReturn(res, 500, { error: error.message });
            }
        });
    };
    product_get = async (req, res) => {
        const { page, searchValue, parPage } = req.query
        const {id} = req;

        const skipPage = parseInt(parPage) * (parseInt(page) - 1);

        try {
            if (searchValue) {
                const products = await productModel.find({
                    $text: { $search: searchValue },
                    archiId : id
                }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalProduct = await productModel.find({
                    $text: { $search: searchValue },
                    archiId : id
                }).countDocuments()
                responseReturn(res, 200, { totalProduct, products })
            }else {
                const products = await productModel.find({archiId : id}).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalProduct = await productModel.find({archiId : id}).countDocuments()
                responseReturn(res, 200, { totalProduct, products })
            }
        } catch (error) {

        }
    }
}

module.exports = new productController();