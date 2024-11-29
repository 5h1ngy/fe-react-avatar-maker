import _ from "lodash";
import { useLoaderData } from "react-router-dom";
import DOMPurify from 'dompurify';
import { Flex, Box } from "@chakra-ui/react";
import { Image, Text, Badge } from "@chakra-ui/react"
import { Separator } from "@chakra-ui/react"

import getRandomColor from "@/utils/getRandomColor"
import { STATUS } from "@/store/containerDetails";
import { WithRouterProps } from "@/hocs/withRouter";
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from "@/components/Chakra/breadcrumb";

import { Bind } from "./container"

const Component: React.FC<Bind & WithRouterProps> = ({ state }) => {

    const occurrence = useLoaderData()

    {/** Navigation History Component */ }
    const NavigationHistory: React.FC = () => state.pageLanding.history.length != 0 && <BreadcrumbRoot>
        {state.pageLanding.history.map(history =>
            !history.current
                ? <BreadcrumbLink key={crypto.randomUUID()} href="#">{history.label}</BreadcrumbLink>
                : <BreadcrumbCurrentLink key={crypto.randomUUID()}>{history.label}</BreadcrumbCurrentLink>
        )}
    </BreadcrumbRoot>

    return <>

        {state.containerDetails.status === STATUS.LOADING
            ? "LOADING..."
            : <Flex direction={"column"} gapY={'2rem'}>
                <NavigationHistory />

                <Flex wrap={"wrap"} gap={'2rem'} justifyContent={"center"}>

                    <Flex direction={"column"} width={'fit-content'} gap={'1rem'}>
                        <Image
                            width={'300px'}
                            borderWidth="1px" borderRadius={'10px'}
                            src={occurrence.image.thumbnail}
                            alt="Green double couch with wooden legs"
                        />
                    </Flex>

                    <Flex direction={"column"} width={{ base: "none", sm: "none", md: "50%", lg: '50%', xl: '50%', "2xl": '50%' }} gap={'0.4rem'}>

                        <Flex direction={"row"} gap={"1rem"}>
                            <Text textStyle="md">{occurrence!.season} {occurrence!.year_start}</Text>
                            <Text textStyle="md">{occurrence!.type}, episodes: {occurrence!.episodes}</Text>
                        </Flex>

                        <Separator />

                        <Text textStyle="3xl">
                            {occurrence!.title}
                        </Text>

                        {occurrence.tags && <Flex wrap={"wrap"} gap={'0.3rem'}>
                            {occurrence.tags.map((tag: { label: string }) =>
                                <Badge colorPalette={getRandomColor()}>{tag.label}</Badge>
                            )}
                        </Flex>}

                        {occurrence.description && <Box
                            borderWidth="1px" borderRadius={'10px'} padding={'1rem'}
                            backgroundColor={"white"} _dark={{ backgroundColor: "black" }}
                        >
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(occurrence?.description) || '' }} />
                        </Box>}
                    </Flex>

                </Flex>
            </Flex>
        }

    </>
}

export default Component;
