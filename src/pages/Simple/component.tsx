import { NavLink } from "react-router";

import { Flex } from "@chakra-ui/react"
import { Spacer } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

import { Toaster } from "@/components/Chakra/toaster"
import { ColorModeButtonExtended } from "@/components/Chakra/color-mode"
import { ComponentProps } from "./component.types";


export default function Component(props: ComponentProps) {
    const { children, navbarItems, logo, decorationBody } = props

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