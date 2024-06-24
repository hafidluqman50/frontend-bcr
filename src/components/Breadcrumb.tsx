import { ReactElement, ReactNode } from "react";


type BreadCrumbProps = {
  children: ReactNode
}

const BreadCrumb = ({children}: BreadCrumbProps): ReactElement => {
  return(
  <nav className="arrow-breadcrumb" aria-label="breadcrumb">
    <ol className="breadcrumb">
      {children}
    </ol>
  </nav>
  )
}

type BreadCrumbMenuProps = {
  title: string
  isActive?: boolean|undefined
}

const BreadCrumbMenu = ({title, isActive = undefined}: BreadCrumbMenuProps): ReactElement => {
  return (
    <li className={isActive ? "breadcrumb-item active" : "breadcrumb-item"}>
      {title}
    </li>
  )
}

export {
  BreadCrumb,
  BreadCrumbMenu
}