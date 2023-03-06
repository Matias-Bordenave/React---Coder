import React from "react";
import { Flex } from '@chakra-ui/react';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <Flex h="6vh">
                <Flex w="20vw" bg="green">

                </Flex>
                <Flex w="100vw" justifyContent="center">
                    <p>Inicio</p>
                    <p>Productos</p>
                    <p>Ventas</p>
                    <p>Ubicacion</p>
                </Flex>

                <Flex bg="green">
                    <CartWidget />
                </Flex>
            </Flex>


        </>
    )
}

export default NavBar;