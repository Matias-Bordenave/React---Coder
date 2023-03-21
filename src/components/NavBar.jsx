import React from "react";
import { Flex, Button, Image } from '@chakra-ui/react';
import CartWidget from "./CartWidget";
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react';
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
            <Flex h="6vh">
                <Flex w="20vw">
                    <a href="./home"><Image src={logo} h="10vh" w="10vw" /></a>
                    <a href="./home">Tecla2</a>
                </Flex>

                <Flex w="100vw" justifyContent="center" gap={10}>
                    <Menu>
                        <Link to="/home">
                            <MenuButton as={Button} variant="link">
                                Home
                            </MenuButton>
                        </Link>
                        <Link to="/product">
                            <MenuButton as={Button} variant="link">
                                Products
                            </MenuButton>
                        </Link>
                        <Link to={`/product/${"mouse"}`}>
                            <MenuButton as={Button} variant="link">
                                mouses
                            </MenuButton>
                        </Link>
                        <Link to={`/product/${"teclado"}`}>
                            <MenuButton as={Button} variant="link">
                                teclados
                            </MenuButton>
                        </Link>
                    </Menu>
                </Flex>

                <Flex w="20vw">
                    <CartWidget />
                </Flex>
            </Flex>
        </>
    )
}

export default NavBar;