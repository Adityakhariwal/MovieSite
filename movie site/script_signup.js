const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyDGVDLpCWE0276XmV-Q6yGG3G8F0zREo60",
  authDomain: "moviesite-ba88c.firebaseapp.com",
  databaseURL: "https://moviesite-ba88c-default-rtdb.firebaseio.com",
  projectId: "moviesite-ba88c",
  storageBucket: "moviesite-ba88c.appspot.com",
  messagingSenderId: "59171279241",
  appId: "1:59171279241:web:71fc18e1f8246f1fa79158"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var passwordid = getElementVal("passwordid");

  saveMessages(name, emailid, passwordid);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, passwordid) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    passwordid: passwordid,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
