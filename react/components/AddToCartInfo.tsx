import React from "react";
import { useProduct } from 'vtex.product-context';
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from "./ButtonGroup";
import Totalizers from "./Totalizers";
import ProductGroup from "./ProductGroup";

const AddToCartInfo = () => {
  const productInfo = useProduct();
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  console.log("este producto tiene esta info", productInfo)
  console.log("estos son mis totales:" , totalizers)
  return (
    <>
      <ProductGroup products={items}/>
      <Totalizers
      totalizers={totalizers[0]}
      items={items.length}
      />
      <ButtonGroup />
    </>
  )
}
export default AddToCartInfo
