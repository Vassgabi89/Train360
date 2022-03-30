import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBQ8F-zSTcJMLKZQOf1dsr_2ovA5Fza-A",
  authDomain: "vassgabi89-firebase-5.firebaseapp.com",
  projectId: "vassgabi89-firebase-5",
  storageBucket: "vassgabi89-firebase-5.appspot.com",
  messagingSenderId: "564583521664",
  appId: "1:564583521664:web:8789930f5ff4beea3d3565",
  measurementId: "G-3NN7TD8MX4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: false,
  //apiUrl: 'http://localhost:3000',
  apiUrl: 'https://nettuts.hu/jms/Vassgabi89',
  firebaseConfig
};
