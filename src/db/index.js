import firebase from 'firebase'
import 'firebase/firestore'
const config = {
	apiKey: '',
	authDomain: 'vuejs-product-app.firebaseapp.com',
	databaseURL: 'https://vuejs-product-app.firebaseio.com',
	projectId: 'vuejs-product-app',
	storageBucket: 'vuejs-product-app.appspot.com',
	messagingSenderId: '496448907799'
}
const firebaseapp = firebase.initializeApp(config)
export default firebaseapp.firestore()
