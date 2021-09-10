import React from "react";
import {
  ProductContainer,
  Breadcrumbs,
  BreadcrumbsList,
  ProductBox,
  ProductImgContainer,
  ProductImgs,
  ProductMainContainerImg,
  ProductMainImg,
  Image,
  ProductFullInfo,
} from "./styles";

const Product = () => {
  return (
    <ProductContainer>
      <Breadcrumbs>
        <BreadcrumbsList>Brands Name</BreadcrumbsList>
        <BreadcrumbsList> Product Name</BreadcrumbsList>
      </Breadcrumbs>

      <ProductBox>
        <ProductImgContainer>
          <ProductMainContainerImg>
            <ProductMainImg>
                <Image src="../products/shoes.jpg" alt="" />
            </ProductMainImg>
          </ProductMainContainerImg>

          <ProductImgs>
            <h5>small pics</h5>
            <h5>small pics</h5>
            <h5>small pics</h5>
          </ProductImgs>
        </ProductImgContainer>
        <ProductFullInfo>
          <h4>product details</h4>
        </ProductFullInfo>
      </ProductBox>
    </ProductContainer>
  );
};

export default Product;
