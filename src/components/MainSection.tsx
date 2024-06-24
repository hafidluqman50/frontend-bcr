import { ReactElement, ReactNode } from "react"
import { Link } from "react-router-dom"


type MainSectionProps = {
  children: ReactNode
}

const MainSection = ({children}: MainSectionProps): ReactElement => {
  return(
    <div className="container-fluid">
      <div className="row vh-100 overflow-scroll">
        {children}
      </div>
    </div>
  )
}

type MainSectionMenuGroupProps = {
  title: string
  children: ReactNode
}

const MainSectionMenuGroup = ({title, children}: MainSectionMenuGroupProps): ReactElement => {
  return(
    <div className="col-md-2 p-0">
      <h6 className="m-3 mt-4 mb-4" style={{color:'grey'}}><b>{title}</b></h6>
      {children}
    </div>
  )
}

type MainSectionMenuProps = {
  title: string
  to: string
  isActive?: boolean | undefined
}

const MainSectionMenu = ({title, to, isActive = undefined}: MainSectionMenuProps): ReactElement => {
  return(
    <div className={isActive ? "w-100 bg--dark-blue-01 p-3" : "w-100 p-3"}>
      <Link to={to} style={{
        textDecoration:'none',
        color:'black'
      }}>
        <b>{title}</b>
      </Link>
    </div>
  )
}

type MainSectionContentProps = {
  children: ReactNode
}

const MainSectionContent = ({children}: MainSectionContentProps): ReactElement => {
  return(
    <div className="col-md-10 padding-bottom" style={{
      backgroundColor:'#F4F5F7',
    }}>
      {children}
    </div>
  )
}

export {
  MainSection,
  MainSectionMenuGroup,
  MainSectionMenu,
  MainSectionContent
}