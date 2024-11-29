import { NavLink, useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';

import { Flex } from "@chakra-ui/react"
import { Spacer } from "@chakra-ui/react"
import { Tabs, Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

import { Toaster } from "@/components/Chakra/toaster"
import { ColorModeButtonExtended } from "@/components/Chakra/color-mode"
import { ComponentProps, NavbarSubItem } from "./component.types";

function findMatchingNavbarValue(location: string, items: NavbarSubItem[]): string | null {
    const locationBase = location.split('/')[1];
    const matchedItem = items.find(item => locationBase === item.value.split('/')[1]);

    return matchedItem ? matchedItem.value : null;
}

export default function Component(props: ComponentProps) {
    const { children, navbarItems, navbarSubItems, logo, decorationBody } = props
    const location = useLocation();
    const navigate = useNavigate();

    const Logo: React.FC = () => logo &&
        <Image src={logo} width={'42px'} />

    const DecorationBody: React.FC = () => decorationBody &&
        <Image
            src={decorationBody}
            position={'fixed'}
            transform="scaleX(-1)"
            zIndex={-1}
            right={0}
            bottom={0}
            display={{ base: "none", sm: "none", md: "none", lg: 'none', xl: 'block', "2xl": 'block' }}
        />;

    const Header: React.FC = () => <Flex wrap={"wrap"} position={"fixed"} zIndex={'2'} width={"100%"} top={0}
        backgroundColor={"white"} _dark={{ backgroundColor: "black" }}
        borderYWidth="1px"
    >

        <Flex wrap={"wrap"} direction={"row"} width={'100%'}
            gapX={'1rem'} justifyContent={"center"} justifyItems={"center"} alignContent={'center'} alignItems={'center'}
            paddingX={'5%'} paddingTop={'1rem'}
        >
            <Logo />

            {navbarItems.map(item => (
                <NavLink key={crypto.randomUUID()} to={item.value} end>
                    <Text textStyle="md">{item.label}</Text>
                </NavLink>
            ))}

            <Spacer />

            {/** ColorMode button (custom) */}
            <ColorModeButtonExtended variant="enclosed" size={"sm"} />
        </Flex>

        <Flex wrap={"wrap"} direction={"row"} width={'100%'}
            gapX={'1rem'} justifyContent={"start"} justifyItems={"center"} alignContent={'center'} alignItems={'center'}
            paddingX={'10%'}
        >
            <Tabs.Root key={crypto.randomUUID()}
                defaultValue={findMatchingNavbarValue(location.pathname, navbarSubItems)}
                variant={"line"}
                size={"sm"}
                onValueChange={(details: { value: string }) => {
                    navigate(details.value)
                }}
            >
                <Tabs.List>
                    {navbarSubItems.map(item => (
                        <Tabs.Trigger key={crypto.randomUUID()} value={item.value}>
                            {item.icon} {item.label}
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>
            </ Tabs.Root>
        </Flex>

    </Flex>

    const Body: React.FC = () => <Flex direction={"column"} zIndex={'1'} marginTop={'5.4rem'}
        paddingX={{ base: "5%", sm: "4rem", md: "4rem", lg: '4rem', xl: '15%', "2xl": '15%' }} gap={'3rem'}
        paddingY={'4rem'}
        minHeight={'90.5vh'}
        borderYWidth="1px"
        backgroundColor={"gray.100"} _dark={{ backgroundColor: "gray.900" }}
    >

        <DecorationBody />

        {children !== undefined && children}

        <Toaster />

    </Flex>

    return <Flex direction={"column"} width={"100%"} minHeight={'100vh'}>
        <Header />
        <Body />
    </Flex>
}