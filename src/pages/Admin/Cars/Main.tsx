import { httpServer } from "@/lib/server";
import { useQuery } from "react-query";
import Layout from "@/layout/Admin/Layout";
import { ReactElement, useState } from "react";
import { BreadCrumb,BreadCrumbMenu } from "@/components/Breadcrumb";
import { 
  MainSection, 
  MainSectionMenuGroup, 
  MainSectionMenu, 
  MainSectionContent 
} from "@/components/MainSection";
import { formatDate, formatRupiah } from "@/lib/utils";
import { Car } from "@/interfaces/Car";
import { Link } from "react-router-dom";
import { isAxiosError } from "axios";
import Swal from "sweetalert2";


export default function Main(): ReactElement {
  
  const [search, setSearch] = useState<string>('')
  
  const fetchCars = async(): Promise<{cars:Car[]}> => {
    const request = await httpServer.get('/api/cars',{
      params:{
        search
      }
    })
    
    return request.data.data
  }
  
  const { isLoading, data, refetch } = useQuery({
    queryKey: ['cars'],
    queryFn: fetchCars
  })
  
  const deleteCar = async(id: number): Promise<void> => {
    try {
      const swalAlert = await Swal.fire({
          title: 'Yakin Hapus Data ?',
          showDenyButton: true,
          confirmButtonText: 'Ya',
          denyButtonText: 'Tidak',
        })
        if(swalAlert.isConfirmed) {
            await httpServer.delete(`/api/cars/${id}`)
            refetch()
            Swal.fire('Data Terhapus!')
        } else {
          Swal.fire('Data Batal Terhapus!')
        }
    } catch(error) {
      if(isAxiosError(error)) {
        console.log(error.response?.data.message)
      }
    }
  }
  
  return(
    <Layout
      sidebar="cars"
      setFunc={setSearch}
      refetch={refetch}
    >
      <MainSection>
        <MainSectionMenuGroup title="CARS">
          <MainSectionMenu title="List Cars" to="/admin/cars" isActive />
          <MainSectionMenu title="Log Cars" to="/admin/cars/logs" />
        </MainSectionMenuGroup>
        <MainSectionContent>
          <BreadCrumb>
            <BreadCrumbMenu title="Cars"/>
            <BreadCrumbMenu title="List Cars" isActive />
          </BreadCrumb>
          <div className="w-100">
            <div className="container-fluid">
              <div className="row" style={{height: '50em !important'}}>
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <b>LIST CARS</b>
                    <div className="mt-3">
                      <button className="m-1 rounded-0 btn btn-primary">Small</button>
                      <button className="m-1 rounded-0 btn btn-outline-primary">Medium</button>
                      <button className="m-1 rounded-0 btn btn-outline-primary">Large</button>
                    </div>
                  </div>
                  <div>
                    <Link to="/admin/cars/create">
                      <button className="btn btn-primary rounded-0 mb-3">
                        <b><i className="fas fa-plus" /></b> TAMBAH DATA
                      </button>
                    </Link>
                  </div>
                </div>
                {
                  isLoading ? <></> : data?.cars.map((row, key) => (
                    <div className="col-md-4 mb-4" key={key}>
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={row.picture} alt="Ferrari"
                                style={{width:'100%', height:'250px'}}
                            />
                            <div className="card-body">
                                <p className="card-text">{row.name} / Sport Car</p>
                                <p className="card-text">
                                    <b>Rp. {formatRupiah(row.price)} / Hari</b>
                                </p>
                                <p className="card-text">
                                    {formatDate(row.start_rent)} - {formatDate(row.finish_rent)}
                                </p>
                                <p className="card-text">
                                    Updated At {formatDate(row.updated_at)}
                                </p>
                                <div>
                                    <button className="btn btn-outline-danger rounded-0" style={{
                                      width:'45%',
                                      margin:'2%'
                                    }} onClick={() => deleteCar(row.id)}>
                                        <i className="fas fa-trash"></i> Hapus
                                    </button>
                                    <Link to={`/admin/cars/edit/${row.id}`}>
                                      <button
                                          className="btn btn-outline-success rounded-0" style={{
                                            width:'45%',
                                            margin:'2%'
                                          }}
                                      >
                                          <i className="fas fa-pencil"></i> Edit
                                      </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </MainSectionContent>
      </MainSection>
    </Layout>
  )
}