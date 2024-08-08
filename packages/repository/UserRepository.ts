import {collection} from 'firebase/firestore/lite'
import {GetDatabaseConnection} from './BaseRepository'
import { getDocs, query, where, addDoc } from 'firebase/firestore';
import { User } from '../entities/User';

const usersCollection = collection(GetDatabaseConnection(), 'Users');

export const GetUserInfo = async(email:string): Promise<User> =>{
    const q = query(usersCollection, where('email','==',email));
    const response = await getDocs(q);
    return (response.docs.at(0)?.data()) as User;
}


export const AddUser = async(user:User):Promise<void> =>{
    await addDoc(usersCollection, user);
}

