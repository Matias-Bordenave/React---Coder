import React from 'react';
import { Flex } from '@chakra-ui/react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({products}) => {
    const {categoria} = useParams()

    let posicion;
    switch (categoria) {
        case "teclado":
            posicion = "G";
            break;
        case "mouse":
            posicion = "G-F";
            break;
    }

    const filtrado = products.filter((product) => product.position == posicion );

    return (
        <Flex justifyContent="center" alignItems="center">
            {categoria ? (
                    <ItemList products={filtrado} />
                ) : (
                    <ItemList products={products} />
                )}
        </Flex>
    )
}

export default ItemListContainer    