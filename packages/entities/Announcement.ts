import { OrderType, Currency } from "./enums"

export type Announcement = {
    id:string,
    userId:string,
    type:OrderType,
    fromCurrency: Currency,
    toCurrency: Currency,
    ammount: number,
    creationDate: Date,
    active: boolean
}

