import { Order } from "../../entities/Order";
import { GetDatabaseConnection } from "./BaseRepository";
import { addDoc, getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

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

export const AddOrder = async (order: Order): Promise<void> => {
  await addDoc(ordersCollection, order);
};
