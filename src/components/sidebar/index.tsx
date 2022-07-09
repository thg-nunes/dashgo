import { Box, Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import { LinkSideBar } from "./linksidbar"
import { Section } from "./section"

export const SideBar = () => {
  return (
    <Box as="aside" w='64' mr='8'>
      <Stack spacing='4' align='flex-start'>
        <Section title="GERAL">
          <Stack spacing={'4'} mt='8' align={'stretch'}>
            <LinkSideBar children="Dashboard" icon={RiDashboardLine}/>
            <LinkSideBar children="Usuários" icon={RiContactsLine}/>
          </Stack>
        </Section>
        <Section title='AUTOMAÇÃO'>
          <Stack spacing={'4'} mt='8' align={'stretch'}>
            <LinkSideBar children="Formulários" icon={RiInputMethodLine}/>
            <LinkSideBar children="Automação" icon={RiGitMergeLine}/>
          </Stack>
        </Section>
      </Stack>
    </Box>
  )
}
