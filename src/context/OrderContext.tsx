import { ReactElement, ReactNode, createContext, useContext } from "react";
import { Order } from "@/interfaces/Order";
import { listOrders } from "@/lib/fakeData";

export const ListOrderContext = createContext<Order[]>([])

type ListOrderContextProps = {
  children: ReactNode
}

export function ListOrderContextProvider({children}: ListOrderContextProps): ReactElement {
  
  return(
    <ListOrderContext.Provider value={listOrders}>
      {children}
    </ListOrderContext.Provider>
  )
}