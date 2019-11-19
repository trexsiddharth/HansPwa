importScripts('https://www.gstatic.com/firebasejs/5.7.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.3/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/7.3.0/firebase-analytics.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCU-ZHkKEBJgfbcotGjEqrsU6C2aB9tDj4",
    authDomain: "hanswebapp-b30da.firebaseapp.com",
    databaseURL: "https://hanswebapp-b30da.firebaseio.com",
    projectId: "hanswebapp-b30da",
    storageBucket: "hanswebapp-b30da.appspot.com",
    messagingSenderId: "485274545846",
    appId: "1:485274545846:web:2574d9fbff3d2b0bec4017",
    measurementId: "G-6Y2VQMSDV5",
    vapidKey: 'BM-CiqqzLOGPQ0C53Dj4p-5qvmIjTOzyjWNBqPUVHNwxR4JNMWurhJU2nqJi3RjZH1qr1Vn4ue3E5g8Gzz2nP0A'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  const messaging = firebase.messaging();
  const analytics = firebase.analytics();