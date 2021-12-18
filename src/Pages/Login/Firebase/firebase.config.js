const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_SECRET_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_SECRET_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_SECRET_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_SECRET_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SECRET_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_SECRET_APPID
  };
export default firebaseConfig;