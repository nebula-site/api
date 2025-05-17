// 🔧 Replace with your actual config:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, pass)
    .then(() => window.location.href = "dashboard.html")
    .catch(e => alert(e.message));
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => window.location.href = "dashboard.html")
    .catch(e => alert(e.message));
}

function logout() {
  auth.signOut().then(() => window.location.href = "index.html");
}

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
