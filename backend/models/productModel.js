import mongoose from 'mongoose'


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
      type: Number,
      required: true,
      },
    
    newPrice: {
      type: Number,
      required: false,
      },
    
    },
    { timestamps: true }
  );

const Product = mongoose.model('Product', productSchema)

export default Product

