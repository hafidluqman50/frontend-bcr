import { httpServer } from "@/lib/server";
import { useMutation } from "react-query";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Layout from "@/layout/SuperAdmin/Layout";
import { ReactElement, useState } from "react";
import { BreadCrumb,BreadCrumbMenu } from "@/components/Breadcrumb";
import { 
  MainSection, 
  MainSectionMenuGroup, 
  MainSectionMenu, 
  MainSectionContent 
} from "@/components/MainSection";
import { Link } from "react-router-dom";
import { FormInput } from "@/components/FormInput";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateFormUserAdmin } from "@/interfaces/FormUserAdmin";
import Swal from "sweetalert2";


export default function Create(): ReactElement {
  
  const navigate: NavigateFunction = useNavigate()
  
  const [isError, setIsError] = useState<boolean>(false)
  const [errorMessages, setErrorMessages] = useState<string[]>([])
  
  const createDataUserAdmin = async(request: CreateFormUserAdmin): Promise<{
    status:boolean,
    message:string
  }> => {
    const response:{status:boolean, message:string} = await httpServer.post('/api/user-admin', request, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    
    return response
  }
  
  const { register, handleSubmit } = useForm<CreateFormUserAdmin>()
  
  const { mutate, isLoading } = useMutation({
    mutationFn: createDataUserAdmin,
    onSuccess: () => {
      Swal.fire('Success Insert User Admin!').then(() => {
        navigate('/superadmin/user-admins')
      })
    },
    onError: (error) => {
      setIsError(true)
      if((error as any).message.response.data.data.validations !== undefined) {
        setErrorMessages((error as any).message.response.data.data.validations)
      } else {
        setErrorMessages([(error as any).message.response.data.message])
      }
    }
  })
  
  const submit: SubmitHandler<CreateFormUserAdmin> = (data): void => {
    const car: CreateFormUserAdmin = {
      ...data
    }
    
    mutate(car)
  }
  
  return(
    <Layout
      sidebar="cars"
    >
      <MainSection>
        <MainSectionMenuGroup title="USER ADMINS">
          <MainSectionMenu title="List User Admins" to="/superadmin/user-admins" isActive />
        </MainSectionMenuGroup>
        <MainSectionContent>
          <BreadCrumb>
            <BreadCrumbMenu title="User Admins"/>
            <BreadCrumbMenu title="List User Admins" isActive />
          </BreadCrumb>
          <div className="w-100">
            <div className="container-fluid">
            {
              isError ?
              <div className="alert alert-danger">
                <div className="d-flex justify-content-between">
                  <div>
                    <ul>
                      {
                        errorMessages.map((error, key) => (
                            <li key={key}>{error}</li>
                        ))
                      }
                    </ul>
                  </div>
                  <div>
                    <button type="button" className="btn-close" onClick={() => {
                    setIsError(false)
                    setErrorMessages([])
                  }} />
                  </div>
                </div>
              </div>
              : <></>
            }
              <div className="card">
                <div className="card-header">
                  <Link to="/superadmin/user-admins">
                    <button className="btn btn-primary rounded-0"><i className="fas fa-arrow-left"></i> Kembali </button>
                  </Link>
                  <h5 className="mt-2"><b>Form Create Data User Admin</b></h5>
                </div>
                <form onSubmit={handleSubmit(submit)} encType="multipart/form-data">
                  <div className="card-body">
                    <FormInput className="mb-2">
                      <Label name="Nama Admin" htmlFor="name" isRequired />
                      <Input type="text" {...register('name')} required />
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Email" htmlFor="email" isRequired />
                      <Input type="email" {...register('email')} required />
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Password" htmlFor="password" isRequired />
                      <Input type="password" {...register('password')} required />
                    </FormInput>
                  </div>
                  <div className="card-footer">
                    {
                      !isLoading ? 
                      <button className="btn bg--lime-green-04 rounded-0 text-white">
                        Simpan <i className="fas fa-floppy-disk"></i>
                      </button> : 
                      <button className="btn btn-success rounded-0 text-white" disabled>
                        Loading...
                      </button>
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </MainSectionContent>
      </MainSection>
    </Layout>
  )
}