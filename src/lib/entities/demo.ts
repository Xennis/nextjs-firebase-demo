import {
    doc,
    FirestoreDataConverter,
    getDoc,
  } from "firebase/firestore"
import { db } from "@/lib/firebase/client-app"

const collectionName = "demo"

export type Demo = {
  hello: string
}

const demoConverter: FirestoreDataConverter<Demo> = {
  toFirestore(value) {
    return value
  },
  fromFirestore(snapshot, options) {
    return snapshot.data(options) as Demo
  },
}

export const getDemo = async (demoId: string): Promise<{hello: string} | null> => {
    const docRef = doc(db, collectionName, demoId).withConverter(demoConverter)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return docSnap.data()
    }
    return null
}