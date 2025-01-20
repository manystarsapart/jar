import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

document.addEventListener("DOMContentLoaded", (e) => {

    console.log("DOM loaded");


// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import 'firebase/firestore';
// import { getFirestore, doc, updateDoc } from "firebase/firestore";

    


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "...",
    authDomain: "swearjar-fe354.firebaseapp.com",
    projectId: "swearjar-fe354",
    storageBucket: "swearjar-fe354.firebasestorage.app",
    messagingSenderId: "709170037061",
    appId: "1:709170037061:web:da3795380569d6ed1f7ed 2c"
    };

// Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);

    const swearCountRef = doc(db, "swear-count", "swear-count");




    let messages = [];
    let statusDiv = document.getElementById("status-div");
    updateStatusMsg("Initialised!");

    // buttons:
    // 1: ea
    // 2: wy
    // 3: an
    // 4: qi 
    // 5: sy
    // 6: ai

    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let b3 = document.getElementById("b3");
    let b4 = document.getElementById("b4");
    let b5 = document.getElementById("b5");
    let b6 = document.getElementById("b6");

    b1.addEventListener("click", (e) => {
        // send a request to db to add b1 count by 1
        updateStatusMsg("b1 count +1");
    });

    b2.addEventListener("click", (e) => {
        // send a request to db to add b2 count by 1
        updateStatusMsg("b2 count +1");

    });

    b3.addEventListener("click", (e) => {
        // send a request to db to add b3 count by 1
        updateStatusMsg("b3 count +1");
    });

    b4.addEventListener("click", (e) => {
        // send a request to db to add b4 count by 1
        updateStatusMsg("b4 count +1");
    });

    b5.addEventListener("click", (e) => {
        // send a request to db to add b5 count by 1
        updateStatusMsg("b5 count +1");
    });

    b6.addEventListener("click", (e) => {
        // send a request to db to add b6 count by 1
        updateDoc(swearCountRef, {
            aicount: increment(1)
          })
          .then(() => {
            console.log("aicount incremented successfully");
            updateStatusMsg("b6 count +1");
          })
          .catch((error) => {
            console.error("Error incrementing aicount: ", error);
            updateStatusMsg("failed");
          });

        
    });

// PROBLEM: I DO NOT HAVE A DB

// function updateStatusMsg(message) {
//     messages.push(message);
//     const status = messages.join('<br>');
//     statusDiv.innerHTML = status
// };


function updateStatusMsg(message) {
    const now = new Date(Date.now());
    const formattedTime = now.toLocaleString();
    messages.push(message + " | Log time: " + formattedTime);
    const status = messages.join('<br>');
    statusDiv.innerHTML = status;
}







});