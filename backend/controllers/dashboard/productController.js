const formidable = require('formidable');
const productModel = require('../../models/productModel')
const cloudinary = require('cloudinary').v2

class productController {
    add_product = async (req, res) => {
        const { id } = req;
        const form = new formidable.IncomingForm({ multiples: true });
    
        form.parse(req, async (err, field, files) => {
            if (err) {
                return res.status(400).json({ error: 'Form parsing error' });
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
    
                console.log(product);
                res.status(201).json({ success: true, product });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Server error' });
            }
        });
    };
    
}

module.exports = new productController();
