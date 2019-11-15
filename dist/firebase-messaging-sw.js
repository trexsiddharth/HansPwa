importScripts('https://www.gstatic.com/firebasejs/5.7.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.3/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/7.3.0/firebase-analytics.js');

firebase.initializeApp({
    messagingSenderId: '485274545846'
});

const messaging = firebase.messaging();
