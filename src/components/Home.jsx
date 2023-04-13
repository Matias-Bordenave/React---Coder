import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/icons/logo.webp";

const Home = () => {
    return (
        <>
            <Flex justify="center" justifyContent="center" mt={100}>
                <Image src={logo}></Image>
            </Flex>
        </>
    );
};

export default Home;