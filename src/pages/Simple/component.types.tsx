import { ReactElement } from "react"

export interface NavbarItem {
    label: string
    value: string
}

export interface ComponentProps {
    children?: ReactElement
    navbarItems: Array<NavbarItem>
    logo: string | null
    decorationBody: string | null
}