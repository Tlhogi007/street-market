import {
  NavContainer,
  Logo,
  Title,
  SearchArea,
  SearchForm,
  Input,
  Icons,
  IconBox,
  IconTitle,
} from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>
        <Title>Fashion</Title>
      </Logo>
      <SearchArea>
        <SearchIcon />
        <SearchForm>
          <Input placeholder="Search"></Input>
        </SearchForm>
      </SearchArea>

      <Icons>
        <IconBox>
          <IconTitle>CART</IconTitle>
          <ShoppingBasketIcon />
        </IconBox>
        <IconBox>
          <IconTitle>CART</IconTitle>
          <ShoppingBasketIcon />
        </IconBox>
      </Icons>
    </NavContainer>
  );
};

export default Navbar;
