// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,
    doc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    addDoc,
    updateDoc,
    writeBatch} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl8QZ_sFMHA1byFhLdxumG9a4G1iZ3Adg",
  authDomain: "ecommerce-ac708.firebaseapp.com",
  projectId: "ecommerce-ac708",
  storageBucket: "ecommerce-ac708.firebasestorage.app",
  messagingSenderId: "98998122775",
  appId: "1:98998122775:web:3c1c437e51e458c9971f52",
  measurementId: "G-HBF4HR536X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)


export async function getProducts() {
    try{
        const querySnapshot = await getDocs(collection(db,"products"))
        if(querySnapshot.size !== 0){
            const productList = querySnapshot.docs.map((docu) => {
                return{
                    id:docu.id,
                    ...docu.data(),
                }
            })
            return productList
        }else{
            console.log("Coleccion vacia")
        }
    }catch(error) {
        console.error("error: ", error)
    }
}