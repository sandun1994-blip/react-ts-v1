import React, { ReactElement } from 'react'
import { ProductType } from '../context/ProductProvider'
import { ReducerAction, ReducerActionType } from '../context/CartProvider'

type PropsType={
    product:ProductType,
    dispatch:React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS:ReducerActionType,
    inCart:boolean
}

const Product = ({product,dispatch,REDUCER_ACTIONS,inCart}:PropsType):ReactElement => {
  
  const img:string =new URL(`../images/${product.sku}.jpg`,import.meta.url).href



  const onAddToCart=()=>dispatch({type:REDUCER_ACTIONS.ADD,payload:{...product,qty:1}})
   
  const itemCart =inCart?'->item in cart: ok':null
  
  const content=(
    <article className='product'>
<h3>
    {product.name}</h3>
    <img src={img} alt={product.name} className="product__img" />
    <p>{new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(product.price)}</p>
<button onClick={onAddToCart}>Add to cCard</button>
    </article>
  )
  return content
}

export default Product