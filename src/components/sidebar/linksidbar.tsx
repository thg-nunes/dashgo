import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react"
import { ElementType } from "react"
import { ActiveLink } from "../activeLink"

interface LinkSideBarProps extends LinkProps {
  icon: ElementType
  children: string
  href: string
}

export const LinkSideBar = ({ icon, children, href, ...rest }: LinkSideBarProps) => {
  return (
    <ActiveLink href={href} passHref >
      <ChakraLink display={'flex'} alignItems='center' {...rest}>
        <Icon as={icon} fontSize='20'/>
        <Text ml={'4'}>{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}
