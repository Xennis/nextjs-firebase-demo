"use client"

import { initializeApp, getApps } from "firebase/app"
import { firebaseConfig } from "./config"
import { getFirestore, initializeFirestore } from "firebase/firestore"

const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
initializeFirestore(firebaseApp, {})

export const db = getFirestore(firebaseApp)
