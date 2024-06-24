import { ReactElement, useEffect, useState } from "react";
import { FormInput } from "@/components/FormInput";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { FormRegister } from "@/interfaces/FormRegister";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { checkIfLogin } from "@/lib/utils";


export default function Register(): ReactElement {
  
  const navigate = useNavigate()
  
  const { register, handleSubmit } = useForm<FormRegister>()
  
  const [isError, setIsError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string[]>([])
  
  const registerPost = async(request: FormRegister): Promise<{
    status:boolean,
    message:string,
    data:any
  }> => {
    
    const response: {
      status:boolean,
      message:string,
      data:any
    } = await axios.post(`https://backend-bcr.fly.dev/api/member/register`, request)
    
    return response.data
  }
  
  const { mutate, isLoading } = useMutation({
    mutationFn: registerPost,
    onSuccess: (data) => {
      
      localStorage.setItem('auth_token', data.data.token)
      localStorage.setItem('auth_name', data.data.name)
      
      navigate('/member/dashboard')
    },
    onError: (error) => {
      setIsError(true)
      if((error as any).response.data.data.validations !== undefined) {
        setErrorMessage((error as any).response.data.data.validations)
      } else {
        setErrorMessage([(error as any).response.data.message])
      }
    }
  })
  
  const submit: SubmitHandler<FormRegister> = (data): void => {
    const dataLogin = {
      ...data
    }
    
    mutate(dataLogin)
  }
  
  useEffect(() => {
    checkIfLogin('/member/dashboard', navigate)
  },[])
  
  return(
    <div className="container-fluid p-0 m-0">
      <div className="row vh-100">
        <div className="col-md-8" style={{
          backgroundImage:'linear-gradient(rgba(1, 1, 122, 0.3), rgba(1, 1, 122, 0.3)), url(https://res.cloudinary.com/dfylrgzcu/image/upload/v1717591548/cars_login_vse6be.png)',
          backgroundSize:'cover',
        }}>
          
        </div>
        <div className="col-md-4 d-flex flex-column align-items-center p-4">
          <div className="card w-100 border-0" style={{marginTop:'25%'}}>
            <div className="card-header border-0" style={{backgroundColor:"transparent"}}>
              <div style={{
                width:'100px',
                height:'34px',
                backgroundColor:'#CFD4ED',
                marginBottom:'8%'
              }} />
              <h4><b>Sign Up</b></h4>
            </div>
            <form onSubmit={handleSubmit(submit)}>
            <div className="card-body">
              {
                isError ? 
                <div className="alert alert-danger">
                  <div className="d-flex justify-content-between">
                    <div>
                      <ul>
                        {
                          errorMessage.map((error, key) => (
                            <li key={key}>{error}</li>
                          ))
                        }
                      </ul>
                    </div>
                    <div>
                      <button type="button" className="btn-close" onClick={() => {
                        setIsError(false)
                        setErrorMessage([])
                      }} />
                    </div>
                  </div>
                </div> : ''
              }
              <FormInput className="mb-3">
                <Label htmlFor="name" name="Name" className="mb-2" />
                <Input type="text" id="name" placeholder="Contoh: Ujang" style={{
                  borderRadius:'0',
                  height:'40px'
                }} {...register('name')} required autoFocus />
              </FormInput>
              <FormInput className="mb-3">
                <Label htmlFor="email" name="Email" className="mb-2" />
                <Input type="email" id="email" placeholder="Contoh: user@gmail.com" style={{
                  borderRadius:'0',
                  height:'40px'
                }} {...register('email')} required />
              </FormInput>
              <FormInput className="mb-4">
                <Label htmlFor="password" name="Password" className="mb-2" />
                <Input type="password" id="password" style={{
                  borderRadius:'0',
                  height:'40px'
                }} {...register('password')} required />
              </FormInput>
              {
                isLoading ?
                <button className="btn btn-primary w-100" style={{borderRadius:'0'}} disabled>
                  <div className="spinner-border text-white" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </button>
                : 
                <button className="btn btn-primary w-100" style={{borderRadius:'0'}}>
                  SIGN UP
                </button>
              }
              <p className="mt-2 text-center">Already have an account ? <Link to="/member/login">Sign In Here</Link></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}