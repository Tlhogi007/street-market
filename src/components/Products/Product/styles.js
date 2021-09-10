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
  display:flex;
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
    width:100%;
    position:sticky;
`

export const ProductImgContainer = styled.div`

display:flex;
height:100vh;
flex-direction:column;
flex:0.4;
`


export const ProductImgs = styled.div`
height:100vh;
background-color:green;
display:flex;
align-items:center;
justify-content:center;

&h5{
  border-top:1px solid red;
  height:10%;
  width:10%;

} 

`;
export const ProductMainContainerImg = styled.div`
height:100vh;
background-color:blue;
`

export const ProductMainImg = styled.div`

  height:50%;
  width:50%;
`;

export const Image = styled.img`
height:100%;width:100%;
object-fit:cover;

`

export const ProductFullInfo = styled.div`

background-color:red;
flex:0.6;
`;