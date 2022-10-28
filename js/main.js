// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase



const firebaseConfig = {
  apiKey: "AIzaSyAnkwt0fmzziJoJNZTGz6cXRsvvOYfv08E",
  authDomain: "login-form-page-4f618.firebaseapp.com",
  projectId: "login-form-page-4f618",
  storageBucket: "login-form-page-4f618.appspot.com",
  messagingSenderId: "353976628915",
  appId: "1:353976628915:web:8bdd60435e221a343b62c6",
  measurementId: "G-CVFP9YE6FV"
};



firebase.initializeApp(firebaseConfig);
render();



// Validate inputs
let input = document.querySelector(".input-box");
let button = document.querySelector(".clicky");

if (document.querySelector(".input-box").value === "") {
  button.disabled = true;
} else {
  button.disabled = false;
}



function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible',
    'callback': (response) => {
      
    }
  });
  recaptchaVerifier.render();
}

// const auth = getAuth();
// window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
//	function for send message
function phoneAuth(e) {
  e.preventDefault();
  var number = document.getElementById('phoneNumber').value;
  firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
    window.confirmationResult = confirmationResult;
    console.log(confirmationResult);

    coderesult = confirmationResult;
    document.getElementById('otp').style.display = 'block';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('recaptcha-container').style.display = 'none';
  }).catch(function (error) {
    // Error; SMS not sent
      // ...
    alert(error);
  });
}

// Verify button validation
// let otpInput = document.getElementById("code");
// let verify = document.getElementById("verify");

// function stateHandle() {
//   if (document.getElementById("code").value === "") {
//     verify.disabled = true;
//   } else {
//     verify.disabled = false;
//   }
// }
// $('#code').blur(function () {
//   if ($('#code').val() !== "") {
//     $('.clicky').attr('href', 'register.html');
//   } else {
//     $('.clicky').removeAttr('href');
//   }
// });

// Validate inputs
// button.disabled = true;
// input.addEventListener("change", stateHandle);

// function stateHandle() {
//   if (document.querySelector(".input-box").value === "") {
//     button.disabled = true;
//   } else {
//     button.disabled = false;
//   }
// }

function codeverify(){
	var code = document.getElementById('code').value;
	coderesult.confirm(code).then(function(){
		document.getElementsByClassName('p-conf')[0].style.display = 'block';
		document.getElementsByClassName('n-conf')[0].style.display = 'none';
	}).catch(function(){
    document.getElementById('verify').removeAttribute('href');
		document.getElementsByClassName('p-conf')[0].style.display = 'none';
		document.getElementsByClassName('n-conf')[0].style.display = 'block';
	})
}
// import { getAuth, RecaptchaVerifier } from "firebase/auth";

// const auth = getAuth();
// window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

// Display otp section
// let otp = document.getElementById('btn');

// otp.onclick = function () {

//   // document.getElementById('number').style.display = 'none';
//   document.getElementById('otp').style.display = 'block';
//   document.getElementById('btn').style.display = 'none';
// }



// Verify button validation
// $('#code').blur(function () {
//   if ($('#code').val() !== "") {
//     $('.clicky').attr('href', 'register.html');
//   } else {
//     $('.clicky').removeAttr('href');
//   }
// });






// function submitForm() {
//   let form = document.getElementById("contactform");
//   form.submit();
// }








// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyAnkwt0fmzziJoJNZTGz6cXRsvvOYfv08E",
//     authDomain: "login-form-page-4f618.firebaseapp.com",
//     projectId: "login-form-page-4f618",
//     storageBucket: "login-form-page-4f618.appspot.com",
//     messagingSenderId: "353976628915",
//     appId: "1:353976628915:web:de09b707f0e4f81d3b62c6",
//     measurementId: "G-T6L55NPC3R"
//   };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);










// Firebase
// function phoneAuth() {
//   let number = document.getElementById('number').value;
//   firebase.auth().signInWithPhoneNumber(number).then(function (confirmationResult) {
//     window.confirmationResult = confirmationResult;
//     coderesult = confirmationResult;
//   }).catch(function (error) {
//     alert(error.message);
//   });
// }

// function codeverify() {
//   let code = document.getElementById('verify').value;
//   coderesult.confirm(code).then(function() {

//   })
// }



// document.addEventListener("DOMContentLoaded", event => {
//   const app = firebase.app();
// });

// function phoneLogin() {
//   const provider = new firebase.auth.PhoneAuthProvider();

//   firebase.auth().signInWithPhoneNumber(provider)
//   .then(result => {
//     const user = result.user;
//     document.write('Hello ${user.displayNamw}');
//     console.log(user)
//   })
//   .catch(console.log)

// }


// Listen for from submit
// document.getElementById('contactform').addEventListener('submit', submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   // Get values
//   let phoneNumber = getInputVal('phoneNumber');
//   let code = getInputVal('code');

//   console.log(phoneNumber);
//   console.log(code);
// }

// // Function to get form values
// function getInputVal(id) {
//   return document.getElementById(id).value
// }