import { Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import { LinkSideBar } from "./linksidbar"
import { Section } from "./section"

export const SidebarNav = () => {
  return (
    <Stack spacing='4' align='flex-start'>
      <Section title="GERAL">
        <Stack spacing={'4'} mt='8' align={'stretch'}>
          <LinkSideBar href="/dashboard" children="Dashboard" icon={RiDashboardLine}/>
          <LinkSideBar href="/users" children="Usuários" icon={RiContactsLine}/>
        </Stack>
      </Section>
      <Section title='AUTOMAÇÃO'>
        <Stack spacing={'4'} mt='8' align={'stretch'}>
          <LinkSideBar href="/forms" children="Formulários" icon={RiInputMethodLine}/>
          <LinkSideBar href="/automation" children="Automação" icon={RiGitMergeLine}/>
        </Stack>
      </Section>
    </Stack>
  )
}
