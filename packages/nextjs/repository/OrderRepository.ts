import { Order } from "../../entities/Order";
import { GetDatabaseConnection } from "./BaseRepository";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { collection } from "firebase/firestore";

const ordersCollection = collection(GetDatabaseConnection(), "Orders");

export const GetOrderDetails = async (id: string): Promise<Order> => {
  const q = query(ordersCollection, where("id", "==", id));
  const response = await getDocs(q);
  const data = response.docs.at(0)?.data() as Order;
  data.id = response.docs.at(0)?.id as string;
  return data;
};

export const AddOrder = async (order: Order): Promise<void> => {
  await addDoc(ordersCollection, order);
};
