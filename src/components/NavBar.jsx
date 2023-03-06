import React from "react";
import { Flex, Button, Image } from '@chakra-ui/react';
import CartWidget from "./CartWidget";
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react';
import logo from "../assets/asd.jpg";

const NavBar = () => {
    return (
        <>
            <Flex h="6vh">
                <Flex w="20vw">
                    <a href="./#"><Image src={logo} h="12vh" w="10vw" /></a>
                </Flex>

                <Flex w="100vw" justifyContent="center" gap={10}>
                    <Menu>
                        <MenuButton as={Button} variant="link">
                            Inicio
                        </MenuButton>
                        <MenuButton as={Button} variant="link">
                            Productos
                        </MenuButton>
                        <MenuButton as={Button} variant="link">
                            Accesorios
                        </MenuButton>
                        <MenuButton as={Button} variant="link">
                            Ubicación
                        </MenuButton>
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