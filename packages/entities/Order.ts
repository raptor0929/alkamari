import { OrderStatus } from "./enums"

export type Order ={
    id:string,
    fromUserId: string,
    toUserId: string,
    orderSize: number,
    status: OrderStatus
}