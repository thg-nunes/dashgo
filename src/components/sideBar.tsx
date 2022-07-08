import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"

export const SideBar = () => {
  return (
    <Box as="aside" w='64' mr='8'>
      <Stack spacing='4' align='flex-start'>
        <Box>
          <Text fontWeight='bold' fontSize='small' color='gray.400' >GERAL</Text>
          <Stack spacing={'4'} mt='8' align={'stretch'}>
            <Link display={'flex'} alignItems='center'>
              <Icon as={RiDashboardLine} fontSize='20'/>
              <Text ml={'4'}>Dashboard</Text>
            </Link>
            <Link display={'flex'} alignItems='center'>
              <Icon as={RiContactsLine} fontSize='20'/>
              <Text ml={'4'}>Usuários</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight='bold' fontSize='small' color='gray.400' >AUTOMAÇÃO</Text>
          <Stack spacing={'4'} mt='8' align={'stretch'}>
            <Link display={'flex'} alignItems='center'>
              <Icon as={RiInputMethodLine} fontSize='20'/>
              <Text ml={'4'}>Formulários</Text>
            </Link>
            <Link display={'flex'} alignItems='center'>
              <Icon as={RiGitMergeLine} fontSize='20'/>
              <Text ml={'4'}>Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
