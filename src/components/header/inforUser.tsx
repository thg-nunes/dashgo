import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

type InforUserProps = {
  showProfileData?: boolean
}

export const InforUser = ({showProfileData}: InforUserProps) => {
  return (
    <Flex align='center'>
      {showProfileData &&
        <Box textAlign='right' mr='4'>
          <Text>Thiago Nunes</Text>
          <Text color='gray.400'>desenvolvedor.nunes@gmail.com</Text>
        </Box>
      }
    <Avatar size='md' name="Thiago Nunes" src="https://github.com/thg-nunes.png" />
  </Flex>
   )
}
