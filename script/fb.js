var firebaseConfig = {
  apiKey: "AIzaSyD_WjFZgCu6u8Xkf-LN2GuZrCLm8S4yLCE",
  authDomain: "onethirdmainpage.firebaseapp.com",
  projectId: "onethirdmainpage",
  storageBucket: "onethirdmainpage.appspot.com",
  messagingSenderId: "799639542776",
  appId: "1:799639542776:web:e5c9c11448e7f6043e140d",
  measurementId: "G-Q0VYC6J228"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let isSubmit = false;
const db = firebase.firestore();
    // email_sub is the collection name you wanna use

function subEnquiry(arg) {
        isSubmit = true;
        const data = {email:arg.email, name:arg.name, msg:arg.msg, created_at:firebase.firestore.FieldValue.serverTimestamp()}
        db.collection('enquiry').doc().set(data)
        .then(() => {console.log("success"); document.querySelector("#contact-success").style.display="block"})
        .catch((e) => console.log("failed, reason:", e))
    }
function formSumbit(e) {
        e.preventDefault();
        e.stopPropagation();
        const name = document.querySelector('#form-name-input').value;
        const email = document.querySelector('#form-email-input').value;
        const msg = document.querySelector('#form-msg-input').value;
        document.querySelector('#form-name-input').value = "";
        document.querySelector('#form-email-input').value = "";
        document.querySelector('#form-msg-input').value = "";
        if(!name&&!email&&!msg){alert("place fill in all fields");return;}
        if(true){subEnquiry({name,email,msg})}
    }