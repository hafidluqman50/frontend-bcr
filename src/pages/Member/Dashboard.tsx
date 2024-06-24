import { ReactElement } from "react";
import Layout from "@/layout/Member/Layout";
import { BreadCrumb,BreadCrumbMenu } from "@/components/Breadcrumb";
import { 
  MainSection, 
  MainSectionMenuGroup, 
  MainSectionMenu, 
  MainSectionContent 
} from "@/components/MainSection";
import { TableTanstack } from "@/components/Table";
import React from 'react'
import { ColumnDef } from "@tanstack/react-table";
import { formatDate, formatRupiah } from "@/lib/utils";
import { Order } from "@/interfaces/Order";
import { useListOrdersAPI } from "@/loaders/OrderLoaders";


export default function Dashboard(): ReactElement {
  
  const listOrders = useListOrdersAPI()
  
  const columnsListOrders = React.useMemo<ColumnDef<Order>[]>(
    () => [
      {
        accessorFn:(row, key) => key+1,
        id:'no',
        header: () => 'No'
      },
      {
        accessorFn: row => row.email,
        id: 'email',
        header: () => 'Email'
      },
      {
        accessorFn: row => row.car,
        id: 'car',
        header: () => 'Car'
      },
      {
        accessorFn: row => formatDate(row.start_rent),
        id: 'start_rent',
        header: () => 'Start Rent'
      },
      {
        accessorFn: row => formatDate(row.finish_rent),
        id: 'finish_rent',
        header: () => 'Finish Rent'
      },
      {
        accessorFn: row => `Rp. ${formatRupiah(row.price)}`,
        id: 'price',
        header: () => 'Price'
      },
      {
        accessorFn: row => row.status,
        id:'status',
        header: () => 'Status'
      }
    ], 
    []
  )
  
  return(
    <Layout
      sidebar="dashboard"
    >
      <MainSection>
        <MainSectionMenuGroup title="DASHBOARD">
          <MainSectionMenu 
            title="Dashboard" 
            to="/member/dashboard"
            isActive
          />
        </MainSectionMenuGroup>
        <MainSectionContent>
          <BreadCrumb>
            <BreadCrumbMenu title="Dashboard"/>
            <BreadCrumbMenu title="Dashboard" isActive/>
          </BreadCrumb>
          <div className="w-100">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="card">
                    <div className="card-header">
                      <h5><b>LIST ORDER</b></h5>
                    </div>
                    <div className="card-body">
                      <TableTanstack<Order>{...{
                        data:listOrders,
                        columns:columnsListOrders
                      }} />
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