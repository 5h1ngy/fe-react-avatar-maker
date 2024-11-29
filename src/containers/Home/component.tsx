import { VStack, Text, HStack, Flex, Center } from "@chakra-ui/react";
import { useEffect } from "react";
import { STATUS } from "@/store/home";
import { Item } from "@/services/all.types";
import { Grid, GridItem } from "@chakra-ui/react";

import { Badge, Box, Card, Image } from "@chakra-ui/react"
import { Button } from "@/components/Chakra/button"


export interface Props {
    state: {
        occurrences: Item[];
        status: STATUS;
    };
    actions: { doGetNewest: () => void };
}

export default function MosaicGrid(props: Props) {
    const { state, actions } = props;

    useEffect(() => {
        actions.doGetNewest();
    }, []);

    return <VStack height="100vh" width="100%" align="center" justify="start">
        {state.status === STATUS.LOADING
            ? <Text>Loading...</Text>
            : <Flex wrap={'wrap'} gap='2rem' align="stretch" justify={"center"}>
                {state.occurrences.map(occurrence => occurrence.id)}
            </Flex>
        }
    </VStack>
}
