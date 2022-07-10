import Head from 'next/head'
import type { NextPage } from 'next'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/form/input'

import { useForm } from 'react-hook-form'

type SignFormData = {
  email: string
  password: string
}

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm()

  async function handleForm(data: SignFormData) {
    await new Promise(resolve => setTimeout(resolve , 2000))
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Flex w='100vw' h='100vh' align='center' justify='center'>
        <Flex as={'form'} w='100%' maxW={360} borderRadius={8} bg='gray.800' p='8' flexDir={'column'} onSubmit={handleSubmit(handleForm)}>
          <Stack spacing={'4'}>
            <Input id='email' type={'email'} label='E-mail' {...register('email')} />
            <Input id='password' type={'password'} label='Senha' {...register('password')} />
          </Stack>

          <Button mt={'6'} colorScheme={'pink'} size={'lg'} type='submit' isLoading={formState.isSubmitting}>Entrar</Button>
        </Flex>
      </Flex>
    </>
  )
}

export default SignIn
