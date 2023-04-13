import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnLNnajhILRLEFPRx2edYb7yd7rao5GqM",
    authDomain: "ecommerce-d7fe0.firebaseapp.com",
    projectId: "ecommerce-d7fe0",
    storageBucket: "ecommerce-d7fe0.appspot.com",
    messagingSenderId: "507937992663",
    appId: "1:507937992663:web:6930e96d2af40dc4212592"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);