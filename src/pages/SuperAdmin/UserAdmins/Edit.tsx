import { httpServer } from "@/lib/server";
import { QueryFunctionContext, useMutation, useQuery } from "react-query";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import Layout from "@/layout/SuperAdmin/Layout";
import { ReactElement, useEffect, useState } from "react";
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
import { UpdateFormUserAdmin } from "@/interfaces/FormUserAdmin";
import Swal from "sweetalert2";


export default function Edit(): ReactElement {
  
  const navigate: NavigateFunction = useNavigate()
  
  const [isError, setIsError] = useState<boolean>(false)
  const [errorMessages, setErrorMessages] = useState<string[]>([])
  
  const params = useParams()
  
  const fetchUserAdminById = async({
    queryKey
  }: QueryFunctionContext) => {
    const request = await httpServer.get(`/api/user-admin/${params.id}`)
    
    return request.data.data.user
  }
  
  const { data:row, isLoading:fetchLoad, error, refetch } = useQuery({
    queryFn: fetchUserAdminById,
    queryKey: ['getUserAdminByid']
  })
  
  const updateDataUserAdmin = async(request: UpdateFormUserAdmin): Promise<{
    status:boolean,
    message:string
  }> => {
    const response:{status:boolean, message:string} = await httpServer.put(`/api/user-admin/${params.id}`, request, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    
    return response
  }
  
  const { register, handleSubmit, setValue } = useForm<UpdateFormUserAdmin>()
  
  const { mutate, isLoading } = useMutation({
    mutationFn: updateDataUserAdmin,
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
  
  const submit: SubmitHandler<UpdateFormUserAdmin> = (data): void => {
    const car: UpdateFormUserAdmin = {
      ...data
    }
    
    mutate(car)
  }
  
  useEffect(() => {
    if(row !== undefined) {
      setValue('name', row.name)
      setValue('email', row.email)
    }
    
    return () => {
      setValue('name', null)
      setValue('email', null)
      setValue('password', null)
    }
  }, [row])
  
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
                  <h5 className="mt-2"><b>Form Update Data User Admin</b></h5>
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
                      <button className="btn btn-warning rounded-0">
                        Edit <i className="fas fa-floppy-disk"></i>
                      </button> : 
                      <button className="btn btn-warning rounded-0" disabled>
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