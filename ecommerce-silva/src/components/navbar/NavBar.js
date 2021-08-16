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

import CartWidget from '../CartWidget/CartWidget';

import ItemListContainer from "../IteamListContainer/ItemListContainer";

import ItemCount from "../ItemCount/ItemCount";

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

                        <MenuItem onClick={() => changeClick()}>

                            <MenuItemLink>Home</MenuItemLink>

                        </MenuItem>

                        <MenuItem onClick={() => changeClick()}>

                            <MenuItemLink>Sale</MenuItemLink>

                        </MenuItem>

                        <MenuItem onClick={() => changeClick()}>

                            <MenuItemLink>Clothes</MenuItemLink>

                        </MenuItem>

                        <MenuItem>

                            <MenuItemLink onClick={() => changeClick()}>Accesories</MenuItemLink>

                        </MenuItem>

                        <MenuItem>

                            <MenuItemLink onClick={() => changeClick()}>About us</MenuItemLink>

                        </MenuItem>

                        <CartWidget />

                    </Menu>

                </NavbarWrapper>

            </NavBarContainer>

            <ItemListContainer greeting="hola"/>

            <ItemDetailContain></ItemDetailContain>

            <ItemCount stock={5} initial={1} onAdd = {handleAdd}></ItemCount>

        </>

    );

}

export default NavBar;





