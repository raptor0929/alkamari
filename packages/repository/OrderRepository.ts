import {collection} from 'firebase/firestore/lite'
import {GetDatabaseConnection} from './BaseRepository'
import { getDocs, query, where, addDoc } from 'firebase/firestore';
import { Order } from '../entities/Order';

const ordersCollection = collection(GetDatabaseConnection(), 'Order');

export const GetOrderDetails = async(id:string): Promise<Order> =>{
    const q = query(ordersCollection, where('id','==',id));
    const response = await getDocs(q);
    return (response.docs.at(0)?.data()) as Order;
}


export const AddOrder = async(order:Order):Promise<void> =>{
    await addDoc(ordersCollection, order);
}

