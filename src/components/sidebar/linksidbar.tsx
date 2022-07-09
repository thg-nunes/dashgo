import { Icon, Link, LinkProps, Text } from "@chakra-ui/react"
import { ElementType } from "react"

interface LinkSideBarProps extends LinkProps {
  icon: ElementType
  children: string
}

export const LinkSideBar = ({ icon, children, ...rest }: LinkSideBarProps) => {
  return (
    <Link display={'flex'} alignItems='center' {...rest}>
      <Icon as={icon} fontSize='20'/>
      <Text ml={'4'}>{children}</Text>
    </Link>
  )
}
