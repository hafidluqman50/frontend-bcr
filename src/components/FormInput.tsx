import { ReactElement, PropsWithChildren } from "react"

type Props = {
  className?:string
}

const FormInput = ({children, className = '', ...props}: PropsWithChildren<Props>): ReactElement => {
  return(
    <div className={`form-group ${className}`} {...props}>
      {children}
    </div>
  )
}

export {
  FormInput
}