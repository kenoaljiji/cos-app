import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
 {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      },
    
    category: {
      type: String,
      required: true,
      },
    
    price: {
      currency: { type: String, required: true},
      value: { type: Number, required: true },
      discount: { type: Number, required: false },
      },
    
    description: { type: String, required: true },
    
    size: {
      type: Array, required: true
    },
    materials: {
      type: String, required: true
    },
    quality: {
      type: Array, required: true
    },
    productNumber: {
      type: String, required: true
    }
    },
    { timestamps: true }
  );

const Product = mongoose.model('Product', productSchema)

export default Product

