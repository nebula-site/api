// ✅ Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBlW_3nYuvybOywnrzEAjzFftHE35mHiHg",
  authDomain: "idk-922fb.firebaseapp.com",
  projectId: "idk-922fb",
  storageBucket: "idk-922fb.firebasestorage.app",
  messagingSenderId: "515655757515",
  appId: "1:515655757515:web:ff771168f0b4ab91c7754e",
  measurementId: "G-Y6W4HER1HE"
};

// 🔧 Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 🔐 Sign up new user
function signUp() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, pass)
    .then(() => window.location.href = "dashboard.html")
    .catch(e => alert(e.message));
}

// 🔓 Login existing user
function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => window.location.href = "dashboard.html")
    .catch(e => alert(e.message));
}

// 🔒 Logout
function logout() {
  auth.signOut().then(() => window.location.href = "index.html");
}

// 🔍 Monitor auth state
auth.onAuthStateChanged(user => {
  const emailField = document.getElementById("user-email");
  if (emailField) {
    if (user) {
      emailField.textContent = "Logged in as: " + user.email;
    } else {
      window.location.href = "login.html";
    }
  }
});

