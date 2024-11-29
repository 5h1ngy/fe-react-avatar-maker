import { Box, Grid, GridItem } from "@chakra-ui/react"
import { HStack, VStack, Center, Spacer, IconButton } from "@chakra-ui/react"
import { Tabs } from "@chakra-ui/react"
import { HiBars3 } from "react-icons/hi2";

import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from "@/components/Chakra/breadcrumb"
import { ColorModeButtonExtended } from "@/components/Chakra/color-mode"

import { ReactElement } from "react";

interface NavbarItems {
    icon: ReactElement
    label: string
    value: string
    default: boolean
}

interface NavigationHistory {
    label: string
    current: boolean
}

interface ComponentProps {
    children?: ReactElement
    navbarItems: Array<NavbarItems>
    navigationHistory: Array<NavigationHistory>
}

export default function Component(props: ComponentProps) {
    const { children, navbarItems, navigationHistory } = props

    return <Grid
        templateRows="0.1fr 1fr" templateColumns="0.1fr 1fr"
        height={'100vh'} gap={'0.1rem'} overflowY={"hidden"}
    /** COLORS */ backgroundColor={'gray.200'} _dark={{ backgroundColor: 'black' }}
    >
        <GridItem
            rowSpan={2} colSpan={1}
            display={{ base: "none", xl: "block", lg: "none", md: "none", sm: "none" }}
        >
            <VStack
                width={'100%'} height={'100%'}
                justifyContent={"center"} alignContent={"center"}
            >
                <Center>

                    {/** Navbar items */}
                    {navbarItems.length !== 0
                        ? <Tabs.Root size={"lg"}
                            defaultValue={navbarItems.find(item => item.default)!.value}
                            variant={'subtle'}
                            orientation={"vertical"}
                        >
                            <Tabs.List
                                gap={'1rem'}
                            >
                                {navbarItems.map(item => (
                                    <Tabs.Trigger key={crypto.randomUUID()} value={item.value}>
                                        {item.icon}
                                        {item.label}
                                    </Tabs.Trigger>
                                ))}
                            </Tabs.List>
                        </ Tabs.Root>
                        : undefined
                    }

                </Center>
            </VStack>
        </GridItem>
        <GridItem
            rowSpan={1}
            colSpan={{ base: 2, xl: 1, lg: 2, md: 2, sm: 2 }}
        >
            <HStack
                width={'100%'}
                wrap={"wrap"} gap={"4"} padding={'1rem'}
            >

                {/** Navbar enable button */}
                <IconButton
                    display={{ base: "inherit", lg: "none", md: "inherit", sm: "inherit" }}
                    variant={"outline"}
                    size={"lg"}
                >
                    <HiBars3 />
                </IconButton>
                <Spacer />
                {/** ColorMode button (custom) */}
                <ColorModeButtonExtended variant="enclosed" />

            </HStack>
        </GridItem>
        <GridItem
            rowSpan={2}
            colSpan={{ base: 2, xl: 1, lg: 2, md: 2, sm: 2 }}
            borderTopRadius={'6px'} paddingTop={'1rem'} paddingLeft={'1rem'} paddingRight={'1rem'} paddingBottom={'6rem'}
            width={{ base: '100%', xl: '99%', lg: '100%', md: '100%', sm: '100%' }}
        /** COLORS */ backgroundColor={'white'} _dark={{ backgroundColor: 'gray.900' }}
        // border="1px solid" // Spessore e stile del bordo
        // borderColor="gray.300" // Colore del bordo (puoi usare colori della palette Chakra)
        // borderRadius="md" // Arrotondamento degli angoli
        // p={4} // Padding interno
        // shadow="md" // Ombra per dare profondità
        // _hover={{
        //     borderColor: "blue.500", // Cambia colore bordo al passaggio del mouse
        // }}
        >
            {/* <Box
                p="4"
                borderWidth="1px"
                borderColor="border.disabled"
                color="fg.disabled"
            > */}

            {/** Navigation History */}
            <HStack
                width={'100%'}
                wrap={"wrap"} gap={"4"} padding={'2rem'}
            >
                {/** Navigation History */}
                {navigationHistory.length != 0
                    ? <BreadcrumbRoot>
                        {navigationHistory.map(history =>
                            !history.current
                                ? <BreadcrumbLink key={crypto.randomUUID()} href="#">{history.label}</BreadcrumbLink>
                                : <BreadcrumbCurrentLink key={crypto.randomUUID()}>{history.label}</BreadcrumbCurrentLink>
                        )}
                    </BreadcrumbRoot>
                    : undefined}
            </HStack>

            <VStack
                width={'100%'} height={'100%'}
                overflowY={"scroll"}
            >
                {children !== undefined ? children : undefined}
            </VStack>

            {/* </Box> */}

        </GridItem>
    </Grid>
}