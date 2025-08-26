

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "7",
    appId: ""
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

import { signOut } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Always attach click once
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("user-icon").addEventListener("click", () => {
        const user = auth.currentUser;
        if (user) {
            // If logged in → logout
            logoutUser();
        } else {
            // If not logged in → open login popup
            openPopup('login');
        }
    });
});

// Logout
window.logoutUser = function() {
    signOut(auth).then(() => {
        document.getElementById("user-name").textContent = "";
    });
};

// Show user name if logged in
onAuthStateChanged(auth, user => {
    if (user) {
        document.getElementById("user-name").textContent = user.displayName || user.email;
    } else {
        document.getElementById("user-name").textContent = "";
    }
});


window.openPopup = function (type) {
    document.querySelector(".login-popup-bg").style.display = "flex";
    switchTab(type);
};

// Close popup
window.closePopup = function () {
    document.querySelector(".login-popup-bg").style.display = "none";
};

// Switch between Login / Sign Up tabs
window.switchTab = function (tab) {
    document.getElementById("login-form").style.display = tab === 'login' ? 'block' : 'none';
    document.getElementById("signup-form").style.display = tab === 'signup' ? 'block' : 'none';
    document.getElementById("login-tab").classList.toggle("active", tab === 'login');
    document.getElementById("signup-tab").classList.toggle("active", tab === 'signup');
};

// Sign Up
window.signUp = function () {
    let name = document.getElementById("signup-name").value.trim();
    let email = document.getElementById("signup-email").value.trim();
    let pass = document.getElementById("signup-pass").value.trim();
    let valid = true;

    if (!name) { document.getElementById("signup-name-error").style.display = "block"; valid = false; }
    else document.getElementById("signup-name-error").style.display = "none";

    if (!email || !validateEmail(email)) { document.getElementById("signup-email-error").style.display = "block"; valid = false; }
    else document.getElementById("signup-email-error").style.display = "none";

    if (!pass) { document.getElementById("signup-pass-error").style.display = "block"; valid = false; }
    else document.getElementById("signup-pass-error").style.display = "none";

    if (!valid) return;

    createUserWithEmailAndPassword(auth, email, pass)
        .then(userCredential => updateProfile(userCredential.user, { displayName: name }))
        .then(() => {
            alert("Sign Up Successful!");
            closePopup();
        })
        .catch(error => alert(error.message));
};

// Sign In
window.signIn = function () {
    let email = document.getElementById("login-email").value.trim();
    let pass = document.getElementById("login-pass").value.trim();
    let valid = true;

    if (!email || !validateEmail(email)) { document.getElementById("login-email-error").style.display = "block"; valid = false; }
    else document.getElementById("login-email-error").style.display = "none";

    if (!pass) { document.getElementById("login-pass-error").style.display = "block"; valid = false; }
    else document.getElementById("login-pass-error").style.display = "none";

    if (!valid) return;

    signInWithEmailAndPassword(auth, email, pass)
        .then(() => closePopup())
        .catch(error => alert(error.message));
};

