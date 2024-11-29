import { ReactElement } from "react"

export interface NavbarItem {
    label: string
    value: string
}

export interface NavbarSubItem {
    icon: ReactElement | string
    label: string
    value: string
}

export interface ComponentProps {
    children?: ReactElement
    navbarItems: Array<NavbarItem>
    navbarSubItems: Array<NavbarSubItem>
    logo: string | null
    decorationBody: string | null
}