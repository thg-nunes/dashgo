import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/header";
import { Pagination } from "../../components/pagination";
import { SideBar } from "../../components/sidebar";
import { useUsers } from "../../services/hooks/useUsers";

export default function UsersList() {
  const { isLoading, data } = useUsers()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

        <Flex w='100%' maxW={1480} mx='auto' px='6' my='6' >
          <SideBar />
          <Box flex={'1'} bg='gray.800' borderRadius={8} p='8'>
            <Flex justify={'space-between'} align='center' mb={'8'}>
              <Heading fontWeight={'normal'} size='lg'>Usuários</Heading>
              <Link href='/users/create' passHref>
                <Button as='a' leftIcon={<Icon as={RiAddLine} fontSize='20' />} size={'sm'} fontSize='sm' colorScheme={'pink'}>Criar Novo</Button>
              </Link>
            </Flex>
            {isLoading ? (
              <Flex align={'center'} justify='center'>
                <Spinner />
              </Flex>
            ) : (
              <>
                <Table colorScheme={'whiteAlpha'}>
                  <Thead>
                    <Tr>
                      <Th px={['4', '4', '6']} color='gray.200' w={'8'}>
                        <Checkbox colorScheme={'pink'} />
                      </Th>
                      <Th>Usuários</Th>
                      <Th>Cadastro</Th>
                      <Th w={'8'} />
                    </Tr>
                  </Thead>

                  <Tbody>
                    {data?.map((user) => (
                      <Tr key={user.id}>
                        <Td px={['4', '4', '6']}>
                          <Checkbox colorScheme={'pink'} />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight={'bold'}>{user.name}</Text>
                            <Text color={'gray.300'} fontSize='sm'>{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td align="right">
                          <Button as='a' leftIcon={<Icon as={RiPencilLine} fontSize='20' />} size={'sm'} fontSize='sm' colorScheme={'purple'}>Editar</Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                <Pagination />
              </>
            )}
          </Box>
        </Flex>
    </Box>
  )
}
