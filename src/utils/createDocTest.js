import { addDoc, collection } from "firebase/firestore";
import {db} from "@/src/firebase/config";


export async function createDocTest(){

    try{
        const docRef = await addDoc(collection(db, "cities"), {
            name: "Macaé",
            country: "Brazil",
        });

        console.log("Documento criado com ID:", docRef.id);
        return docRef.id;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}