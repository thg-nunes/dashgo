import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react"
import Link from "next/link"
import { ElementType } from "react"

interface LinkSideBarProps extends LinkProps {
  icon: ElementType
  children: string
  href: string
}

export const LinkSideBar = ({ icon, children, href, ...rest }: LinkSideBarProps) => {
  return (
    <Link href={href} passHref >
      <ChakraLink display={'flex'} alignItems='center' {...rest}>
        <Icon as={icon} fontSize='20'/>
        <Text ml={'4'}>{children}</Text>
      </ChakraLink>
    </Link>
  )
}
