import { LabelHTMLAttributes, ReactElement } from "react";


const Label = ({
  className = '', 
  name, 
  isRequired = undefined,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & {
  name:string, 
  isRequired?: boolean | undefined
}): ReactElement => {
  return(
    <>
    {
      isRequired ? <label {...props} className={`required-field ${className}`}>{name}</label> : <label {...props} className={className}>{name}</label>
    }
    </>
  )
}

export {
  Label
}