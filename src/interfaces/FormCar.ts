export interface CreateFormCar {
  name:string
  price:number
  picture:any
  start_rent:Date|string
  finish_rent:Date|string
  available:number
  type_car:string;
  transmission:string;
  seat:number;
  type_driver:string;
  year:number;
  description:string;
}

export interface EditFormCar {
  name:string
  price:number
  picture:File
  start_rent:Date|string
  finish_rent:Date|string
  available:number
  type_car:string;
  transmission:string;
  seat:number;
  type_driver:string;
  year:number;
  description:string;
}