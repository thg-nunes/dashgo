import { HStack, Icon } from "@chakra-ui/react"
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri"

export const Notifications = () => {
  return (
    <HStack spacing={['6', '8']} color='gray.400' mx={['6', '8']} py='1' pr={['6', '8']} borderRightWidth='1px' borderColor='gray.400'>
      <Icon as={RiNotificationLine} fontSize='20' />
      <Icon as={RiUserAddLine} fontSize='20' />
    </HStack>
  )
}
