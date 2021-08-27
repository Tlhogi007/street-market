import styled, { keyframes } from "styled-components";


export const ProductContainer = styled.div`
padding:2%;
position:sticky;
top:5%;
background-color: black;
`;

export const Breadcrumbs = styled.ul`
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;

`;

export const BreadcrumbsList = styled.li`

    display: inline;
    font-size: 18px;

    + &::before{
        padding: 8px;
  color: black;
  content: "/\00a0";
    }
`;

export const ProductBox = styled.div`

    height:100vh;
 
    background-color:yellow;
    display:flex;
`;

export const ProductImgs = styled.div`

height:100vh;
 
background-color:green;

`;

export const ProductMainImg = styled.div`

height:100vh;
 
background-color:blue;
`;

export const ProductFullInfo = styled.div`

background-color:red;
`;