import Link from 'next/link'
import { ProductType } from '../types/productType'

type ProductItemProps = {
    product: ProductType;
}


export default function ProductItem({ product } : ProductItemProps) {
  return (
    <div className="mt-5 bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm mx-auto">
      <div className="relative">
        <img src= {product.image} alt="Product Image" width={500} height={500} className="w-full h-64 object-cover" />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-500 text-xl font-bold">{product.title}</h3>
          <span className="text-gray-500 text-2xl font-bold text-primary">${product.price}</span>
        </div>
        <p className="text-gray-500 text-sm">
          {product.description}
        </p>
        <Link href="#" className="w-full">Add to Cart</Link>
      </div>
    </div>
  )
}
