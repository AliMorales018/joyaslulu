import Price from '@/components/Price'

function ProductInfo({ title, description, price }) {
  return (
    <div className=" font-primary">
      <h1 className="leading-relaxed font-extrabold text-xl text-palette-primary py-1 sm:py-4">
        {title}
      </h1>
      <p className="font-medium text-l">
        {description}
      </p>
      <div className="text-l text-palette-primary font-medium py-1 px-1">
        <Price
          currency="S/."
          num={price}
          numSize="text-base"
        />
      </div>
    </div>
  )
}

export default ProductInfo
