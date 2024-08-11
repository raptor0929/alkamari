import { Order } from "../../entities/Order";
import { GetDatabaseConnection } from "./BaseRepository";
import { addDoc, getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { OrderStatus } from "~~/types/types";

const ordersCollection = collection(GetDatabaseConnection(), "Orders");

export const GetOrderDetails = async (id: string): Promise<Order> => {
  const response = await getDocs(ordersCollection);
  const all = response.docs.map(x => {
    const doc = x.data() as Order;
    doc.id = x.id;
    return doc;
  });
  return all.filter(x => (x.id = id)).at(0) as Order;
};

export const UpdateOrderStatus = async (orderId: string, newStatus: OrderStatus): Promise<void> => {
  const orderDoc = doc(ordersCollection, orderId);
  await updateDoc(orderDoc, {
    status: newStatus,
  });
};

export const AddOrder = async (order: Order): Promise<void> => {
  await addDoc(ordersCollection, order);
};
