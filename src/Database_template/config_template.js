/*

  Before use, set up Firebase project with the following settings:
  1. Create Database, then change to 'Realtime Database'
  2. Change rules to ".read": true and ".write": true

  Next,
  1. Copy database configuration from settings and apply them below
  2. Rename enclosing folder to 'Database'
  3. Rename file to config.js

*/  

import * as firebase from 'firebase'

const firebaseConfig = {
  // database configuration
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}