import { GetDatabaseConnection } from "./BaseRepository";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { AnnouncementsData } from "~~/app/marketplace/types/types";
import { Announcement, Order, OrderStatus } from "~~/types/types";

const announcementsCollection = collection(GetDatabaseConnection(), "Announcement");
const ordersCollection = collection(GetDatabaseConnection(), "Orders");

export const GetAllAnnouncements = async (): Promise<Array<Announcement>> => {
  const response = await getDocs(announcementsCollection);
  return response.docs.map(x => {
    const doc = x.data() as Announcement;
    doc.id = x.id;
    return doc;
  });
};

export const GetAnnounceDetails = async (id: string): Promise<Announcement> => {
  const response = await getDocs(announcementsCollection);
  const all = response.docs.map(x => {
    const doc = x.data() as Announcement;
    doc.id = x.id;
    return doc;
  });
  return all.filter(x => x.id === id).at(0) as Announcement;
};

export const AddAnnouncement = async (data: Announcement): Promise<void> => {
  await addDoc(announcementsCollection, data);
};

export const CreateOrders = async (ordersData: AnnouncementsData): Promise<any> => {
  let correlationId = 1010;
  console.log({ ordersData });
  const announceIdAux = await GetAnnounceDetails(ordersData.id);
  console.log({ announceIdAux });

  const orden: Order = {
    correlationId: correlationId++,
    anounceId: announceIdAux.id + "",
    fromWalletAddress: "0x62D33cd97d6fe96a4Af733D49c6b2E1B2925B5Cf",
    toWalletAddress: "0xaE07c9d049440CCF685954e8214F7cCea826CE11",
    orderSize: parseInt(ordersData?.cryptoAmount),
    Fee: 1,
    status: OrderStatus.Initialized,
  };

  const orderRef = await addDoc(ordersCollection, orden);
  // console.log("Orden creada con announceId: ", orden.anounceId, " y documentId: ", orderRef.id);
  return orderRef.id;
};
