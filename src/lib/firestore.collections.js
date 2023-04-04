import { collection } from "@firebase/firestore";
import { db } from "./init-firebase";


export const booksCollectionRef = collection(db, 'books')