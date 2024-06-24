import { ReactElement, forwardRef } from "react";
import { InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}


const Input = forwardRef<HTMLInputElement, InputProps>((
  {className, type, ...props}: InputHTMLAttributes<HTMLInputElement>, ref): ReactElement => {
  return(
    <input type={type} className={`form-control ${className}`} {...props} ref={ref} />
  )
})

export {
  Input
}