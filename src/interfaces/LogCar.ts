export interface LogCar {
  id:number
  user: {
    id:number,
    name:string,
    email:string
  }
  car:{
    id:number,
    name:string
  },
  log_time:Date|string
  type_action:string
}