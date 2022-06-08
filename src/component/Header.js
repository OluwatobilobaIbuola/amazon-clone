import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom"
import { useStateValue } from '../StateProvider.js';
import { auth } from "../firebase"
import { BasketCount, OptionBasket, OptionOne, Optiontwo, Options, Nav, Search, Logo, HeaderStyled} from "./styled/Header.styled"

export default function Header() {

    const [{user, basket}, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

  return (
    <HeaderStyled>
        <Link to="/">
            <Logo 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="nav-logo"
            />
        </Link>
        
        <Search>
            <input type="text"/>
            <div>
                <SearchIcon />
            </div>
        </Search>
        <Nav>  
            <Link to={!user && "/login"}>
                <Options onClick={handleAuthenticaton}>
                    <OptionOne>Hello Guest</OptionOne>
                    <Optiontwo>{user ? 'Sign Out' : 'Sign In'}</Optiontwo>
                </Options>
            </Link> 
            <Options>
                <OptionOne>
                    Returns
                </OptionOne>
                <Optiontwo>
                    Orders
                </Optiontwo>
            </Options>
            <Options>
                <OptionOne>
                    Your
                </OptionOne>
                <Optiontwo>
                    Prime
                </Optiontwo>
            </Options>
            <Link to="/checkout">
                <OptionBasket>
                    <AddShoppingCartIcon/>
                    <BasketCount>{basket?.length}</BasketCount>
                </OptionBasket>
            </Link>
        </Nav>
    </HeaderStyled>
  )
}
