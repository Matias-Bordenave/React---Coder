import { Card, Flex } from '@chakra-ui/react'
import React from 'react'
import Item from "./Item"

const ItemList = ({products}) => {
    return (
        <>
            <Flex>
                {products.map((item) => {
                    return (
                        <Item key={item.id}
                        firstName={item.first_name}
                        />
                    )
                })}
            </Flex>
        </>
    )
}

export default ItemList