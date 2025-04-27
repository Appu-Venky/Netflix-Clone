import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {
    addDoc,
    collection,
    getFirestore
} from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
    apiKey: "AIzaSyCk8CU3T6ZqP2CcCKLevOdLhQUjukWC9as",
    authDomain: "netflix-clone-e935c.firebaseapp.com",
    projectId: "netflix-clone-e935c",
    storageBucket: "netflix-clone-e935c.firebasestorage.app",
    messagingSenderId: "473350131938",
    appId: "1:473350131938:web:a7e324d08a31e31d03cebb",
    measurementId: "G-0KBMM790QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


//user Sign Up Function
const signup = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        const user = response.user;
        console.log(user);
        await addDoc(collection(db, 'user'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
            password
        })
    } catch (error) {
        toast.error(error.codesplit('/')[1].split('-').join(""));
    }

}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(""));

    }
}

const logout = async () => {
    signOut(auth);
}

export { auth, db, login, logout, signup };

