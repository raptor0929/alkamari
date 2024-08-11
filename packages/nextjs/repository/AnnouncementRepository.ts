import { GetDatabaseConnection } from "./BaseRepository";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { Announcement } from "~~/types/types";

const announcementsCollection = collection(GetDatabaseConnection(), "Announcement");

export const GetAllAnnouncements = async (): Promise<Array<Announcement>> => {
  const response = await getDocs(announcementsCollection);
  return response.docs.map(x => {
    const doc = x.data() as Announcement;
    doc.id = x.id;
    return doc;
  });
};

export const GetAnnounceDetails = async (id: string): Promise<Announcement> => {
  const q = query(announcementsCollection, where("id", "==", id));
  const response = await getDocs(q);
  const data = response.docs.at(0)?.data() as Announcement;
  data.id = response.docs.at(0)?.id;
  return data;
};

export const AddAnnouncement = async (data: Announcement): Promise<void> => {
  await addDoc(announcementsCollection, data);
};
