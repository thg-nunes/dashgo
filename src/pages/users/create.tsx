import { Box, Button, Divider, Flex, Heading,HStack,SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/form/input";
import { Header } from "../../components/header";
import { SideBar } from "../../components/sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w='100%' maxW={1480} mx='auto' px='6' my='6' >
        <SideBar />
        <Box flex={'1'} bg='gray.800' borderRadius={8} p='8'>
          <Heading fontWeight={'normal'}>Criar Usuário</Heading>

          <Divider color={'gray.600'} my='6'/>

          <VStack spacing={'8'}>
            <SimpleGrid minChildWidth={240} spacing='8' w='100%'>
              <Input name="name" type={'text'} label='Nome'/>
              <Input name="email" type={'email'} label='E-mail'/>
            </SimpleGrid>

            <SimpleGrid minChildWidth={240} spacing='8' w='100%'>
              <Input name="password" type={'password'} label='Senha'/>
              <Input name="password" type={'password'} label='Confirmação de Senha'/>
            </SimpleGrid>

            <Flex w={'100%'} align={'center'} justify='flex-end'>
              <HStack spacing={'4'}>
                <Button colorScheme={'whiteAlpha'}>Cancelar</Button>
                <Button colorScheme={'pink'}>Salvar</Button>
              </HStack>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}
