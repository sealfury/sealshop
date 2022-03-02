interface SwatchProps {
  color?: string
  label?: string
}

const ProductSwatch: React.FC<SwatchProps> = ({ color, label }) => {
  return (
    <>
      {color && <>Color: {color}</>}
      Label: {label.toLowerCase()} {` , `}
    </>
  )
}

export default ProductSwatch
