import React from 'react';
import carrito from "../assets/carrito.png";
import { Flex, Image, Button } from "@chakra-ui/react";

const CartWidget = () => {
    return (
        <>
            <Flex flexDirection="row-reverse">
                <Button className="shop-icon-button">
                    <p className="text-black"> 3 </p>
                    <Image className="shop-icon" src={carrito} />
                </Button>
            </Flex>
        </>
    )
}

export default CartWidget;