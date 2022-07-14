import { Box, Button, Divider, Flex, Heading,HStack,SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from "../../components/form/input";
import { Header } from "../../components/header";
import { SideBar } from "../../components/sidebar";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { useRouter } from "next/router";
import { client } from "../../services/queryClient";


type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_conofirmation: string
}

const signinSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório.'),
  email: yup.string().required().email('E-mail inválido.'),
  password: yup.string().required('Senha obrigatória.').min(6, 'Minimo de 66 caractéries.'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'Senhas devem ser iguais.')
})

export default function CreateUser() {
  const router = useRouter()
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signinSchema)
  })

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('/users', {
      user: {
        ...user,
        created_at: new Date()
      }
    })

    return response.data.users
  }, {
    onSuccess: () => {
      client.invalidateQueries('users')
    }
  })

  async function handleCreateUser(data: CreateUserFormData) {
    await new Promise(resolve => setTimeout(resolve , 2000))
    await createUser.mutateAsync(data)

    router.push('/users')
  }

  return (
    <Box>
      <Header />
      <Flex w='100%' maxW={1480} mx='auto' px='6' my='6' >
        <SideBar />
        <Box as='form' flex={'1'} bg='gray.800' borderRadius={8} p='8' onSubmit={handleSubmit(handleCreateUser)}>
          <Heading fontWeight={'normal'}>Criar Usuário</Heading>

          <Divider color={'gray.600'} my='6'/>

          <VStack spacing={'8'}>
            <SimpleGrid minChildWidth={240} spacing={['6', '8']} w='100%'>
              <Input id="name" type={'text'} {...register('name')} error={{type: 'required', message: 'Nome obrigatório.'}} label='Nome'/>
              <Input id="email" type={'email'} {...register('email')} error={{type: 'required', message: 'E-mail obrigatório.'}} label='E-mail'/>
            </SimpleGrid>

            <SimpleGrid minChildWidth={240} spacing={['6', '8']} w='100%'>
              <Input id="password" type={'password'} {...register('password')} error={{type: 'required', message: 'Senha obrigatória.'}} label='Senha'/>
              <Input id="password_confirmation" type={'password'} {...register('password_confirmation')} error={{type: 'required', message: 'Confirmação de senha obrigatória.'}} label='Confirmação de Senha'/>
            </SimpleGrid>

            <Flex w={'100%'} align={'center'} justify={['center', 'flex-end']}>
              <HStack spacing={'4'}>
                <Link href='/users' passHref>
                  <Button as='a' colorScheme={'whiteAlpha'}>Cancelar</Button>
                </Link>
                <Button type='submit' colorScheme={'pink'} isLoading={formState.isSubmitting}>Salvar</Button>
              </HStack>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}
