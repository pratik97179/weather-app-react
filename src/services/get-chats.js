import { db } from "./firebase.config.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const collectionRef = collection(db, "chats");

const currentUser = "8T8LyM2mwu1oTrNrO0c9";

export default async function getChats() {
    let chats = await getDocs(query(collectionRef, where("chatForUser", "==", currentUser))).then((chat) => {
        return chat.docs.map((doc) => {
            return doc.data();
        });
    });
    return chats;
}
