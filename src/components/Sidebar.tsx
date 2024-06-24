import { ReactElement, ReactNode } from "react"
import { Link } from "react-router-dom"

type SidebarProps = {
  children: ReactNode
}

const Sidebar = ({children}: SidebarProps): ReactElement => {
  return(
    <div className="w-100 vh-100 bg--dark-blue-04 pt-2">
      <div className="w-100" style={{marginBottom:'15%'}}>
        <div style={{
          width:'60px',
          height:'60px',
          margin:'10% 0 0 27%',
          backgroundColor:'#CFD4ED'
        }} />
      </div>
      {children}
    </div>
  )
}

type SidebarMenuProps = {
  title: string
  icon: ReactNode
  isActive?: boolean|undefined
  to: string
}

const SidebarMenu = ({
  title, 
  icon, 
  isActive = undefined,
  to
}: SidebarMenuProps): ReactElement => {
  return(
    <Link to={to} style={{textDecoration:'none', color:'white'}}>
      <div className={isActive ? "font--white text-center p-2 sidebar-active" : "font--white text-center p-2"} style={{
        fontSize:'15px'
      }}>
          {icon}
          <p className="text-center m-0" style={{
            paddingLeft:'2.7%'
          }}>
              {title}
          </p>
      </div>
    </Link>
  )
}

export {
  Sidebar,
  SidebarMenu
}