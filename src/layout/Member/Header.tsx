import { Input } from "@/components/Input";
import { ReactElement } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

type HeaderProps = {
  setFunc?: CallableFunction | undefined
  refetch?: CallableFunction | undefined
}

export default function Header({
  setFunc = undefined, refetch = undefined
}: HeaderProps): ReactElement {
  
  const navigate: NavigateFunction = useNavigate()
  
  return(
    <>
      <header>
        <nav className="navbar navbar-expand-lg" style={{
          backgroundColor:'white',
          borderBottom:'1px solid lightgrey'
        }}>
          <div className="justify-content-between container d-flex">
            <div className="w-50">
                <div style={{
                  width:'100px',
                  height:'34px',
                  backgroundColor:'#CFD4ED'
                }} />
              </div>
              <div className="w-50 d-flex">
                <Input type="search" className="rounded-0" onChange={(event) => {
                  if(setFunc !== undefined) {
                    setFunc(event.target.value)
                  }
                }} />
                <button className="btn rounded-0 btn-outline-primary" style={{
                  marginRight:'2%'
                }} onClick={() => {
                  if(refetch !== undefined) {
                    refetch()
                  }
                }}>Search</button>
                <div className="dropdown d-flex">
                  <div className="bg--dark-blue-01 rounded-5 text-center p-1" style={{
                    width:'38px',
                    height:'38px'
                  }}>{ localStorage.getItem('auth_name')?.charAt(0) }</div>
                  <button type="button" className="btn rounded-0 dropdown-toggle" style={{
                    backgroundColor:'transparent'
                  }} data-bs-toggle="dropdown" aria-expanded="false">{ localStorage.getItem('auth_name') }
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={() => {
                      localStorage.removeItem('auth_token')
                      navigate('/')
                    }}>Logout</li>
                  </ul>
                </div>
              </div>
          </div>
        </nav>
      </header>
    </>
  )
}