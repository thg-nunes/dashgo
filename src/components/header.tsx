import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react"
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export const Header = () => {
  return (
    <Flex width={'100%'} maxW={1480} h='28' mx='auto' mt='4' px='6' align='center'>
      <Text
        fontSize={'3xl'}
        fontWeight='bold'
        letterSpacing={'tight'}
        w='64'
      >
        dashgo
        <Text as='span' ml='4' color='pink.500'>.</Text>
      </Text>

      <Flex as='label' flex='1' align='center' py='4' px='8' ml='6' bg='gray.800' color='gray.200' position='relative' borderRadius='full' maxW={400}>
        <Input placeholder="Buscar na Plataforma" _placeholder={{ color: 'gray.400' }} color='gray.50' px='4' mr='4' variant='unstyled' />
        <Icon as={RiSearchLine} fontSize='20' />
      </Flex>

      <Flex align='center' ml='auto'>
        <HStack spacing='8' color='gray.400' mx='8' py='1' pr='8' borderRightWidth='1px' borderColor='gray.400'>
          <Icon as={RiNotificationLine} fontSize='20' />
          <Icon as={RiUserAddLine} fontSize='20' />
        </HStack>

        <Flex align='center'>
          <Box textAlign='right' mr='4'>
            <Text>Thiago Nunes</Text>
            <Text color='gray.400'>desenvolvedor.nunes@gmail.com</Text>
          </Box>
          <Avatar size='md' name="Thiago Nunes" src="https://github.com/thg-nunes.png" />
        </Flex>
      </Flex>
    </Flex>
  )
}
