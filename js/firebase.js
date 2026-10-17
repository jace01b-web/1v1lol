function initializeFireBase(){
	// Your web app's Firebase configuration
	var firebaseConfig = {
	apiKey: "AIzaSyA0xHTS3vec9zX2GP2v3JidY1Af9TnTilA",
	authDomain: "v1-lol-1e584.firebaseapp.com",
	databaseURL: "https://v1-lol-1e584-default-rtdb.firebaseio.com",
	projectId: "v1-lol-1e584",
	storageBucket: "v1-lol-1e584.firebasestorage.app",
	messagingSenderId: "1083992982686",
	appId: "1:1083992982686:web:61c8486bba6de426a1a78f",
	measurementId: "G-QRB101Z6VQ"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
}

// index.html calls this on localhost; same project so it works there too
function initializeFireBaseDev(){
	initializeFireBase();
}
