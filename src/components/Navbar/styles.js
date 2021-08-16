import styled, { keyframes } from "styled-components";


export const NavContainer = styled.nav`
padding:2%;
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
height:8vh;

position:sticky;
top:0;
`

export const Logo = styled.div`
flex:0.4;

`

export const Title = styled.h1`

font-weight:300;
font-size:2rem;
`

export const SearchArea = styled.div`
display:flex;
align-items:center;


flex:0.4;
`

export const SearchForm = styled.form`
border-bottom:1px solid #ccc;
width:80%;
padding:2%;

`

export const Input = styled.input`
border:none;
outline:none;
width:100%;
`
export const Icons = styled.div`
flex:0.6;
display:flex;

justify-content:flex-end;
align-items:center;
`
export const IconBox = styled.div`
display:flex;

justify-content:end;
align-items:center;
margin-left:5%;
cursor: pointer;
padding:1%;

`
export const IconTitle = styled.h3`

font-weight:bold;
font-size:0.8rem;
margin-right:12%;
`

