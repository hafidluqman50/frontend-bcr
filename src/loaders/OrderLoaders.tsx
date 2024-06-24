import { ListOrderContext } from "@/context/OrderContext";
import { Order } from "@/interfaces/Order";
import { useContext } from "react";

export function useListOrdersAPI(): Order[] {
  const context = useContext(ListOrderContext)
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context
}