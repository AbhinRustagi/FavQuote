import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(config);
const db = getFirestore(app);

export const getItems = async () => {
  const res = await getDocs(collection(db, "list"))
    .then((pk) => ({ ok: true, data: pk }))
    .catch((err) => ({
      ok: false,
      code: err.code,
      message: err.message,
    }));

  if (!res.ok) {
    return res;
  }

  let data = [];

  res.data.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return { ok: true, data };
};
