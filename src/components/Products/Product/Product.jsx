import React from 'react'
import {ProductContainer,Breadcrumbs,BreadcrumbsList,ProductBox,ProductImgs,ProductMainImg,ProductFullInfo} from "./styles"

const Product = () => {
    return (
        <ProductContainer>
            <Breadcrumbs>
                <BreadcrumbsList>Brands Name</BreadcrumbsList>
                <BreadcrumbsList> Product Name</BreadcrumbsList>
            </Breadcrumbs>

            <ProductBox>

                <ProductImgs></ProductImgs>
                <ProductMainImg></ProductMainImg>
                <ProductFullInfo></ProductFullInfo>                
            </ProductBox>
        </ProductContainer>
    )
}

export default Product
