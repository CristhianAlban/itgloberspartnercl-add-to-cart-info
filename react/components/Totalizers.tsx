import React from 'react'

type Props = {
  totalizers: {
    id?:string
    name?: string
    value?: number
  }
  items:number
}



const Totalizers = ({totalizers, items}: Props) => {
  console.log("estos son los totalizers en el componente",totalizers)
  const data = totalizers? totalizers: { id:null,name:null,value:null}
  const {id, name, value} = data;
  console.log( "mis totales son igual a:", id, name, value)
  return (
    <div>
      <p>Tenemos {items} items en tu compra</p>
      <p>Total: ${value}</p>
    </div>
  )
}

export default Totalizers
