import Head from 'next/head'
import type { NextPage } from 'next'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components/form/input'

type SignFormData = {
  email: string
  password: string
}

const signinSchema = yup.object().shape({
  email: yup.string().required().email('E-mail inválido.'),
  password: yup.string().required()
})

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signinSchema)
  })

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
            <Input id='email' type={'email'} label='E-mail' error={{type: 'required', message: 'E-mail obrigatório.'}} {...register('email')} />
            <Input id='password' type={'password'} label='Senha' error={{type: 'required', message: 'Senha obrigatória.'}} {...register('password')} />
          </Stack>

          <Button mt={'6'} colorScheme={'pink'} size={'lg'} type='submit' isLoading={formState.isSubmitting}>Entrar</Button>
        </Flex>
      </Flex>
    </>
  )
}

export default SignIn
