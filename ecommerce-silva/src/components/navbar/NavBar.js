import React, { useState } from "react";

import {

    IconLogo,

    Menu,

    MenuItem,

    MenuItemLink,

    NavBarContainer,

    NavbarWrapper,

    IconLogoMobile

} from "./NavBar.elements";

import { FaBars, FaTimes } from "react-icons/fa";

import { AiFillGift } from "react-icons/ai";

import {Link} from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';

import ItemListContainer from "../IteamListContainer/ItemListContainer";

import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../Item/Item";
import ItemDetailContain from "../ItemDetailContainer/ItemDetailContainer";

const NavBar = () => {

    const [click, setClick] = useState(false)

    const changeClick = () => {

        setClick(!click)

        console.log(click)

    }

    const handleAdd = (count) =>{
       
        console.log(count)
      
    }

    return (

        <>

            <NavBarContainer>

                <NavbarWrapper>

                    <IconLogo>

                        <AiFillGift />

                        Silva-ecommerce

                    </IconLogo>

                    <IconLogoMobile onClick={() => changeClick()}>

                        {

                            click ? <FaTimes /> : <FaBars />

                        }

                    </IconLogoMobile>

                    <Menu click={click}>

                    <Link to="/">
                    
                    <MenuItem onClick={() => changeClick()}>

                            <MenuItemLink>Home</MenuItemLink>

                        </MenuItem>
                    </Link>

                     <Link to="/Sale">  
                     
                      <MenuItem onClick={() => changeClick()}>

                            <MenuItemLink>Sale</MenuItemLink>

                        </MenuItem>

                    </Link>

                    <Link to="/clothes">
                        <MenuItem onClick={() => changeClick()}>

                            <MenuItemLink>Clothes</MenuItemLink>

                        </MenuItem>
                    
                    </Link>
                    
                    
                        
                        <MenuItem>

                        <Link to="/Accesories"><MenuItemLink onClick={() => changeClick()}>Accesories</MenuItemLink></Link>

                        </MenuItem>
                        
                    
                    
                    <Link to="/About">
                        
                        <MenuItem>

                            <MenuItemLink onClick={() => changeClick()}>About us</MenuItemLink>

                        </MenuItem>

                    </Link>

                        <CartWidget />

                    </Menu>

                </NavbarWrapper>
                

            </NavBarContainer>
    
        </>

    );

}

export default NavBar;





