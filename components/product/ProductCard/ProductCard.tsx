import { Product } from '@common/types/product'

interface CardProps {
  product: Product
}

const ProductCard: React.FC<CardProps> = ({ product }) => {
  return <div>{product.name}</div>
}

export default ProductCard
