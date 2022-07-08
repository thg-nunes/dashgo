import Head from 'next/head'
import type { NextPage } from 'next'
import { Button, Flex, Stack } from '@chakra-ui/react'

import { Input } from '../components/form/input'

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Flex w='100vw' h='100vh' align='center' justify='center'>
        <Flex as={'form'} w='100%' maxW={360} borderRadius={8} bg='gray.800' p='8' flexDir={'column'}>
          <Stack spacing={'4'}>
            <Input name='email' type={'email'} label='E-mail' />
            <Input name='password' type={'password'} label='Senha' />
          </Stack>

          <Button mt={'6'} colorScheme={'pink'} size={'lg'} >Entrar</Button>
        </Flex>
      </Flex>
    </>
  )
}

export default SignIn
