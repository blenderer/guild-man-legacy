const firebase = require('firebase');
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC06X1CKO5K1h3YInUCyjnzblE0q1lwxLQ',
  authDomain: 'guild-man.firebaseapp.com',
  databaseURL: 'https://guild-man.firebaseio.com',
  storageBucket: 'guild-man.appspot.com',
  messagingSenderId: '134513670784'
});

const db = firebaseApp.database();
const activeQuestsRef = db.ref('activeQuests');
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export const ACTIVE_QUESTS_UPDATE = 'ACTIVE_QUESTS_UPDATE';
export const AUTH_UPDATE = 'AUTH_UPDATE';

export const addQuest = (questName, duration, start) => {
  db.ref(`/activeQuests/${activeQuestsRef.push().key}/`).set({
    questName,
    duration,
    start
  });
}

export const loginTwitter = () => {
  firebase.auth().signInWithPopup(twitterAuthProvider).then((result) => {
    
  });
}

function Firebase (store) {

  var scoresRef = firebase.database().ref("activeQuests");

  activeQuestsRef.orderByChild('start').on('value', (snapshot) => {
    const values = [];
    snapshot.forEach((data) => {
      values.push(data.val());
    });

    store.dispatch({
      type: ACTIVE_QUESTS_UPDATE,
      updatedItems: values.reverse()
    });
  });

  firebase.auth().onAuthStateChanged(function(user) {
    store.dispatch({
      type: AUTH_UPDATE,
      user: user
    });
  });
}

export default Firebase
