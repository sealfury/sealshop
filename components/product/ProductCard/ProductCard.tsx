import Link from 'next/link'
import { Product } from '@common/types/product'
import Image from 'next/image'

interface CardProps {
  product: Product
}

const placeHolder = '/mr-seal-yo-girl.svg'

const ProductCard: React.FC<CardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>TEMP PRICE $7</span>
        </div>
        {product.images && (
          <Image
            alt={product.name ?? 'Product Image'}
            src={product.images[0].url ?? placeHolder}
            height={540}
            width={540}
            quality='85'
            layout='responsive'
          />
        )}
      </a>
    </Link>
  )
}

export default ProductCard
