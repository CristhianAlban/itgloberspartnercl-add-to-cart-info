import React from 'react'

type Props = {
  products: []
}

const ProductGroup = ({products}:Props) => {

  console.log("mis productos en product group son:", products)
  return (
    <div>
      {
        products.map((item:any, index: number) => {
          console.log(item)
          return (
            <div key= {index}>
              <div>
                <img src={item.imageUrls.at1x}/>
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.id}</p>
                <p>${item.price / 100}</p>
                <p>Cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductGroup
