import { Button, Flex, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex as={'form'} w='100%' maxW={360} borderRadius={8} bg='gray.800' p='8' flexDir={'column'}>
        <Stack spacing={'4'}>
          <FormControl>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input type={'email'} name='email' size={'lg'} focusBorderColor='pink.500' variant={'filled'} bg={'gray.900'} _hover={{bg: 'gray-900'}} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='password'>Senha</FormLabel>
            <Input type={'password'} name='password' size={'lg'} focusBorderColor='pink.500' variant={'filled'} bg={'gray.900'} _hover={{bg: 'gray-900'}} />
          </FormControl>
        </Stack>

        <Button mt={'6'} colorScheme={'pink'} size={'lg'} >Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default Home
