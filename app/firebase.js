const firebase = require('firebase');
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC06X1CKO5K1h3YInUCyjnzblE0q1lwxLQ',
  authDomain: 'guild-man.firebaseapp.com',
  databaseURL: 'https://guild-man.firebaseio.com',
  storageBucket: 'guild-man.appspot.com',
  messagingSenderId: '134513670784'
});

const db = firebaseApp.database();
const activeQuestsRef = db.ref('/activeQuests/');

export const ACTIVE_QUESTS_UPDATE = 'ACTIVE_QUESTS_UPDATE';

export const addQuest = (name, duration) => {
  db.ref(`/activeQuests/${activeQuestsRef.push().key}/`).set({
    name,
    duration
  });
}

function Firebase (store) {

  activeQuestsRef.on('value', (snapshot) => {
    const value = snapshot.val();

    store.dispatch({
      type: ACTIVE_QUESTS_UPDATE,
      updatedItems: value
    });
  });
}

export default Firebase
