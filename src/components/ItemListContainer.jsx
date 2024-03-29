import { React, useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { filter, Flex } from "@chakra-ui/react";

import ItemList from "./ItemList";
import Loading from "../Loading";

import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    //controla pantalla de carga
    const [loading, setLoading] = useState(true);

    //recupera la categoria de la url
    const { category } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const prods_collection = collection(db, "Products");
        getDocs(prods_collection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            let cat = "all";

            if (category) {
                cat = category;

                setProducts(docs.filter((item) => item.category == cat));
            } else {
                setProducts(docs.sort((x,y) => x.category.localeCompare(y.category) ))
            }
        });

        setLoading(false);
    }, [category]);

    if (loading) {
        return (
            <>
                <Flex m={200} justifyContent="center">
                    <Loading />
                </Flex>
            </>
        );
    } else {
        return (
            <>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="10px"
                    className="border"
                    m={100}
                    p={10}
                >
                    <ItemList products={products} />
                </Flex>
            </>
        );
    }
};

export default ItemListContainer;