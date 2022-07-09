import { useDisclosure, UseDisclosureProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerContextData extends UseDisclosureProps {}

export const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

type SidebarDrawerProviderProps = {
  children: ReactNode
}

export const SidebarDrawerProvider = ({children}:SidebarDrawerProviderProps ) => {
  const disclousure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclousure.onClose()
  }, [router.asPath])

  return <SidebarDrawerContext.Provider value={disclousure}>{children}</SidebarDrawerContext.Provider>
}

export const useSidebarDrawerContext = () => useContext(SidebarDrawerContext)
