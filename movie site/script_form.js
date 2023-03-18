

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref('moviesite');
  document.getElementById('registerform').addEventListener('submit' , submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('personname');
    var emailid = getElementVal('emailid');
    var Password = getElementVal('passwordid');

    console.log(name , emailid , Password);
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click' , ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click' , ()=> {
    wrapper.classList.remove('active');
});