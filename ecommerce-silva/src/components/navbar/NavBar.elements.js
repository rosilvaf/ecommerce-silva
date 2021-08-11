import React from "react";

import styled from "styled-components";

export const NavBarContainer = styled.div`

  width: 100%;

  height: 80px;

  position: sticky;

  top: 0;

  z-index: 99;

  background-color: #ffffff;

`;

export const NavbarWrapper = styled.div`

  width: 100%;

  margin: auto;

  max-width: 1000px;

  height: 100%;

  align-items: center;

  display: flex;

  flex-wrap: wrap;

  justify-content: space-between;


`;

 

export const IconLogo = styled.div`

  display: flex;

  flex-wrap: wrap;

  justify-content: flex-start;

  align-item: center;

  font-size: 1.5rem;

  font-family: "Staatliches";

  color: #000000;

`;

 

export const Menu = styled.ul`

  height: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

@media screen and (max-width:960px){

  width:100%;

  height:98vh;

  position:absolute;

  top:40px;

  left: ${({click})=>(click ? 0: "-130%")};

  flex-direction:column;

transition:0.5s all ease-in;

background-color:#ffffff;

}

  `;

 

export const MenuItem = styled.li`

  height: 100%;

  padding: 0.5rem 1.5rem;

  display: flex;

  justify-content: center;

  align-items: center;

  font-size: 1.2rem;

  font-family: "Staatliches";

  font-weight: 400;

  &:hover {

    background-color: #D6D9D0;

    border-bottom: 0.4rem solid;

    transition: 0.4s ease-in;

  }

  @media screen and (max-width:960px){

  width:100%;

  height:70px;

  }

`;

 

export const MenuItemLink = styled.a`

  text-decoration: none;

  color: black;

`;

 

export const IconLogoMobile = styled.div`

display:none;

padding-right:50px; 

@media screen and (max-width:960px){

display:flex;

color:#00000;

font-size:2rem;

}

`