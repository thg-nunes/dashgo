import { Flex, Icon, IconButton, Input, Text, useBreakpointValue } from "@chakra-ui/react"
import { RiMenuLine, RiSearchLine } from 'react-icons/ri'
import { useSidebarDrawerContext } from "../../contexts/sidebarDrawerContext"
import { InforUser } from "./inforUser"
import { Notifications } from "./notifications"

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  const { onOpen } = useSidebarDrawerContext()
  return (
    <Flex width={'100%'} maxW={1480} h='28' mx='auto' mt='4' px='6' align='center'>
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          variant='unstyled'
          fontSize={'24'}
          onClick={onOpen}
          mr='2'
          pt={1.5}
        />
      )}
      <Text
        fontSize={['2xl', '3xl']}
        fontWeight='bold'
        letterSpacing={'tight'}
        w='64'
      >
        dashgo
        <Text as='span' ml='4' color='pink.500'>.</Text>
      </Text>

      {isWideVersion &&
        <Flex as='label' flex='1' align='center' py='4' px='8' ml='6' bg='gray.800' color='gray.200' position='relative' borderRadius='full' maxW={400}>
          <Input placeholder="Buscar na Plataforma" _placeholder={{ color: 'gray.400' }} color='gray.50' px='4' mr='4' variant='unstyled' />
          <Icon as={RiSearchLine} fontSize='20' />
        </Flex>
      }

      <Flex align='center' ml='auto'>
        <Notifications />
        <InforUser showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
