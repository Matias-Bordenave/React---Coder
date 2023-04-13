import logo from "../assets/icons/logo.webp";
import { React, useContext } from "react";
import { Flex, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <Flex className="navbar-container" h="10vh" alignItems="center">
                <Flex w="20vw">
                    <Link to="/">
                        <Image src={logo} h="20vh" w="25vw" />
                    </Link>
                </Flex>

                <Flex justifyContent="center" className="navbar-list" w="100vw">
                    <ul className="none-style-list">
                        <li className="list-item">
                            <Link to={"/catalogue"}>
                                <Button
                                    className="item-button"
                                    variant="link"
                                    colorScheme="white"
                                    fontSize={20}
                                >
                                    Catalogo
                                </Button>
                            </Link>
                        </li>
                        {">>"}
                        <li className="list-item">
                            <Link to={`/catalogue/${"teclado"}`}>
                                <Button
                                    className="item-button"
                                    variant="link"
                                    colorScheme="white"
                                >
                                    Teclado
                                </Button>
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to={`/catalogue/${"mouse"}`}>
                                <Button
                                    className="item-button"
                                    variant="link"
                                    colorScheme="white"
                                >
                                    Mouse
                                </Button>
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to={`/catalogue/${"monitor"}`}>
                                <Button
                                    className="item-button"
                                    variant="link"
                                    colorScheme="white"
                                >
                                    Monitor
                                </Button>
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to={`/catalogue/${"accesorios"}`}>
                                <Button
                                    className="item-button"
                                    variant="link"
                                    colorScheme="white"
                                >
                                    Accesorios
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </Flex>

                <Flex flexDirection="column" className="navbar-item" w="20vw">
                    <CartWidget />
                </Flex>
            </Flex>
        </>
    );
};

export default NavBar;