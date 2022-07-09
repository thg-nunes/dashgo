import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { cloneElement, ReactElement } from "react"

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export const ActiveLink = ({children, shouldMatchExactHref = false, ...rest}:ActiveLinkProps ) => {
  let isActiveLink = false
  const { asPath } = useRouter()

  if(asPath === rest.href || asPath === rest.as) {
    isActiveLink = true
  }

  if (!shouldMatchExactHref && (asPath.startsWith(String(rest.as)) || asPath.startsWith(String(rest.href)))) {
    isActiveLink = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActiveLink ? 'pink.500' : 'gray.500'
        })
      }
    </Link>
  )
}
