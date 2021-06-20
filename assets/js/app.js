// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBHlQMKji_lfj371tzzLVUp1rYsGmC5z-A",
  authDomain: "test-form-3f301.firebaseapp.com",
  projectId: "test-form-3f301",
  storageBucket: "test-form-3f301.appspot.com",
  messagingSenderId: "86503858913",
  appId: "1:86503858913:web:fcf67c896a9b25541bcda0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact__form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact__form").reset();

  sendEmail(name,email,message);
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}

//Send Email info
function sendEmail(name, email, message) {
  Email.send({
    Host:"smtp.gmail.com",
    Username: "boddunitishkumar@gmail.com",
    Password: "bwsmbxagjfqnbsom",
    To: 'boddunitishkumar@gmail.com',
    From: 'boddunitishkumar@gmail.com',
    Subject: `${name} sent you a message`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
  }).then((message) => alert("Mail has been sent successfully"));
}