import React from 'react'
import ProductLayout from '../../components/products/ProductType';
import { ProductType } from '../../types/product';

type Props = {
    data: ProductType[];
}

const Home = (props: Props) => {
  return (
    <ProductLayout data={props.data} />
  )
}

export default Home