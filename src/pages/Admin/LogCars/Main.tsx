import { 
  MainSection, 
  MainSectionMenuGroup, 
  MainSectionMenu, 
  MainSectionContent 
} from "@/components/MainSection";
import { ReactElement } from "react";
import { BreadCrumb,BreadCrumbMenu } from "@/components/Breadcrumb";
import { LogCar } from "@/interfaces/LogCar";
import { useQuery } from "react-query";
import { httpServer } from "@/lib/server";
import { ColumnDef } from "@tanstack/react-table";
import React from 'react'
import { TableTanstack } from "@/components/Table";
import Layout from "@/layout/Admin/Layout";
import { formatDate } from "@/lib/utils";

export default function Main(): ReactElement {
  
  const fetchLogCars = async(): Promise<LogCar[]> => {
    const response = await httpServer.get('/api/cars/log-activity')
    
    console.log(response)
    
    return response.data.car_logs
  }
  
  const { isLoading, data } = useQuery({
    queryFn: fetchLogCars,
    queryKey: ['fetchLogCars']
  })
  
  const columns = React.useMemo<ColumnDef<LogCar>[]>(
    () => [
      {
        accessorFn:(row, key) => key+1,
        id:'no',
        header: () => 'No.'
      },
      {
        accessorFn: row => row.user.email,
        id:'email',
        header: () => 'Email'
      },
      {
        accessorFn: row => row.car.name,
        id:'car',
        header: () => 'Car'
      },
      {
        accessorFn: row => formatDate(row.log_time),
        id:'log_time',
        header: () => 'Log Time'
      },
      {
        accessorFn: row => row.type_action,
        id:'type_action',
        header: () => 'Type Action'
      }
    ],[])
  
  return(
    <Layout
      sidebar="cars"
    >
    <MainSection>
      <MainSectionMenuGroup title="CARS">
        <MainSectionMenu title="List Cars" to="/admin/cars" />
        <MainSectionMenu title="Log Cars" to="/admin/cars/logs" isActive />
      </MainSectionMenuGroup>
      <MainSectionContent>
        <BreadCrumb>
          <BreadCrumbMenu title="Cars"/>
          <BreadCrumbMenu title="Log Cars" isActive />
        </BreadCrumb>
        <div className="w-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title"><b>Log Cars</b></h5>
                  </div>
                  <div className="card-body">
                  {
                    !isLoading ? 
                    <TableTanstack<LogCar>
                      {...{
                        data,
                        columns
                      }}
                      /> : <></>
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainSectionContent>
    </MainSection>
    </Layout>
  )
}