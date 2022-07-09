import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react"
import { useSidebarDrawerContext } from "../../contexts/sidebarDrawerContext"
import { SidebarNav } from "./sidebarNav"

export const SideBar = () => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  const { isOpen, onClose } = useSidebarDrawerContext()

  if(isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg={'gray.800'} p='4'>
            <DrawerCloseButton mt={'6'} />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as="aside" w='64' mr='8'>
      <SidebarNav />
    </Box>
  )
}
