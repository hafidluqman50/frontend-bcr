import { httpServer } from "@/lib/server";
import { useMutation, useQuery, QueryFunctionContext } from "react-query";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import Layout from "@/layout/Admin/Layout";
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
import { useForm } from "react-hook-form";
import { dateTime } from "@/lib/utils";
import Swal from "sweetalert2";


export default function Edit(): ReactElement {
  
  const navigate: NavigateFunction = useNavigate()
  
  const [isError, setIsError] = useState<boolean>(false)
  const [errorMessages, setErrorMessages] = useState<string[]>([])
  
  const params = useParams()
  
  const fetchCarById = async({
    queryKey
  }: QueryFunctionContext) => {
    const request = await httpServer.get(`/api/cars/${params.id}`)
    
    return request.data.data.car
  }
  
  const { data:row, isLoading:fetchLoad, error, refetch } = useQuery({
    queryFn: fetchCarById,
    queryKey: ['getCarById']
  })
  
  const updateDataCar = async(request: any): Promise<any> => {
    const response = await httpServer.put(`/api/cars/${params.id}`, request, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    
    return response
  }
  
  const { register, handleSubmit, setValue } = useForm()
  
  const { mutate, isLoading } = useMutation({
    mutationFn: updateDataCar,
    onSuccess: (data) => {      
      Swal.fire('Success Insert Car!').then(() => {
        navigate('/superadmin/cars')
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
  
  const submit = (data: any): void => {
    const car = {
      name: data.name,
      price: Number(data.price),
      picture: data.picture[0],
      start_rent: data.start_rent,
      finish_rent: data.finish_rent,
      available: Number(data.available)
    }
    console.log(car)
    mutate(car)
  }
  
  useEffect(() => {
    if(row !== undefined) {
      setValue('name', row.name)
      setValue('price', row.price)
      setValue('start_rent', dateTime(row.start_rent))
      setValue('finish_rent', dateTime(row.finish_rent))
      setValue('available', row.available)
      setValue('type_car', row.type_car)
      setValue('transmission', row.transmission)
      setValue('seat', row.seat)
      setValue('type_driver', row.type_driver)
      setValue('year', row.year)
      setValue('description', row.description)
    }
    
    return () => {
      setValue('name', null)
      setValue('price', null)
      setValue('start_rent',null)
      setValue('finish_rent', null)
      setValue('available', null)
      setValue('type_car', null)
      setValue('transmission', null)
      setValue('seat', null)
      setValue('type_driver', null)
      setValue('year', null)
      setValue('description', null)
    }
  },[row])
  
  return(
    <Layout
      sidebar="cars"
    >
      <MainSection>
        <MainSectionMenuGroup title="CARS">
          <MainSectionMenu title="List Cars" to="/admin/cars" isActive />
          <MainSectionMenu title="Log Cars" to="/admin/cars/logs" />
        </MainSectionMenuGroup>
        <MainSectionContent>
          <BreadCrumb>
            <BreadCrumbMenu title="Cars"/>
            <BreadCrumbMenu title="List Cars" />
            <BreadCrumbMenu title="Edit Data" isActive />
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
                  <Link to="/admin/cars">
                    <button className="btn btn-primary rounded-0"><i className="fas fa-arrow-left"></i> Kembali </button>
                  </Link>
                  <h5 className="mt-2"><b>Form Edit Data Cars</b></h5>
                </div>
                <form onSubmit={handleSubmit(submit)} encType="multipart/form-data">
                  <div className="card-body">
                  <FormInput className="mb-2">
                      <Label name="Nama Tipe" htmlFor="type_car" isRequired />
                      <Input type="text" {...register('type_car')} required />
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Nama Mobil" htmlFor="name" isRequired />
                      <Input type="text" {...register('name')} required />
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Tahun Mobil" htmlFor="year" isRequired />
                      <Input type="number" {...register('year')} required />
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Transmisi" htmlFor="transmission" isRequired />
                      <Input type="text" {...register('transmission')} required />
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Kursi" htmlFor="seat" isRequired />
                      <Input type="number" {...register('seat')} required />
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Tipe Driver" htmlFor="type_driver" isRequired />
                      <select className="form-control" {...register('type_driver')} defaultValue={''} required>
                        <option value={''} disabled>=== Pilih Tipe Driver ===</option>
                        <option value={'dengan-sopir'}>Dengan Sopir</option>
                        <option value={'tanpa-sopir'}>Tanpa Sopir</option>
                      </select>
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Deskripsi Mobil" htmlFor="description" isRequired />
                      <textarea {...register('description')} className="form-control" required />
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Harga Rental" htmlFor="price" isRequired />
                      <Input type="number" {...register('price')} required />
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Gambar Mobil" htmlFor="picture" isRequired />
                      <Input type="file" {...register('picture')} required />
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Mulai Rental" htmlFor="start_rent" isRequired />
                      <Input type="datetime-local" {...register('start_rent')} required />
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Selesai Rental" htmlFor="finish_rent" isRequired />
                      <Input type="datetime-local" {...register('finish_rent')} required />
                    </FormInput>
                    <FormInput className="mb-2">
                      <Label name="Ketersediaan" htmlFor="available" isRequired />
                      <select className="form-control" {...register('available')} defaultValue={''} required>
                        <option value={''} disabled>=== Pilih Ketersediaan ===</option>
                        <option value={1}>Tersedia</option>
                        <option value={0}>Tidak Tersedia</option>
                      </select>
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