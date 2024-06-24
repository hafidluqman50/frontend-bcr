import { httpServer } from "@/lib/server";
import { useQuery } from "react-query";
import Layout from "@/layout/Member/Layout";
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


export default function Main(): ReactElement {
  
  const [search, setSearch] = useState<string>('')
  
  const fetchCars = async(): Promise<{cars:Car[]}> => {
    const request = await httpServer.get('/api/cars/list-available', {
      params:{
        search
      }
    })
    
    return request.data
  }
  
  const { isLoading, data, refetch } = useQuery({
    queryKey: ['carsAvailable'],
    queryFn: fetchCars
  })
  
  console.log(data)
  
  return(
    <Layout
      sidebar="cars"
      setFunc={setSearch}
      refetch={refetch}
    >
      <MainSection>
        <MainSectionMenuGroup title="CARS">
          <MainSectionMenu title="List Cars" to="/member/cars" isActive />
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
                                    <Link to={`/member/cars/rent/${row.id}`}>
                                      <button
                                          className="btn btn-outline-success rounded-0" style={{
                                            width:'45%',
                                            margin:'2%'
                                          }}
                                      >
                                          <i className="fas fa-clock"></i> Rent Car
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