import React from 'react';
import { Flex } from '@chakra-ui/react';

const ItemListContainer = (props) => {
    return (
        <Flex justifyContent="center">
            <div>{props.greeting}</div>
        </Flex>
    )
}

export default ItemListContainer