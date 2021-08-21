import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// @desc Fetch all products
// @route GET /api/products
//@access Public

const getProducts = asyncHandler (async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})

// @desc Fetch single product 
// @route GET /api/products/:id
//  @access Public

const getProductById = asyncHandler (async (req, res) => {

    const product = await Product.findById(req.params.id)

    if(product) {

        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
    
})

// @desc delete a product
// @route Delete /api/products/:id
// @access Private 

const deleteProduct = asyncHandler (async (req, res) => {

    const product = await Product.findById(req.params.id)

    if(product) {
        await product.remove()
        res.json({ message: 'Product delete'})
       
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
    
})


// @desc create a product
// @route POST /api/products/:id
// @access Private/Admin

const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
      name: req.body.name,
      images: req.body.images,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      size: req.body.size,
      materials: req.body.materials,
      quality: req.body.quality,
      productNumber:req.body.productNumber
      
    })
  
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
  })
  
  // @desc    Update a product
  // @route   PUT /api/products/:id
  // @access  Private/Admin

  const updateProduct = asyncHandler(async (req, res) => {
    const {
      name,
      images,
      category,
      price,
      description,
      size,
      materials,
      quality,
      productNumber
      
    } = req.body
  
    const product = await Product.findById(req.params.id)
  
    if (product) {
      product.name = name
      product.images = images
      product.category = category
      product.description = description
      product.price = price
      product.size = size,
      product.materials = materials,
      product.quality = quality,
      product.productNumber = productNumber  
  
      const updatedProduct = await product.save()
      res.json(updatedProduct)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
  



export { getProducts, getProductById, deleteProduct, createProduct, updateProduct}


