import { GetDatabaseConnection } from "./BaseRepository";
import { addDoc, collection, getDocs } from "firebase/firestore";
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
