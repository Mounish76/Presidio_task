const firebaseConfig = {
    apiKey: "AIzaSyDeHT6V-Ujk_LAJh8aEjnMzCD09q7AS_b4",
    authDomain: "presidio-round4.firebaseapp.com",
    projectId: "presidio-round4",
    storageBucket: "presidio-round4.appspot.com",
    messagingSenderId: "222684270246",
    appId: "1:222684270246:web:504b5ca6fb77e6a30dee67"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth= firebase.auth();
  const database= firebase.database(); 

  function register(){
        Name=document.getElementById("register-name").value;
        mobile=document.getElementById("register-mobile").value;
        email=document.getElementById("register-email").value;
        pwd=document.getElementById("register-password").value;
        if(validate_email(email)==true){
            alert("Email is registered successfully");
        }else{
            alert("failed");
        }

    auth.createUserWithEmailAndPassword(email,pwd).then(function(){
        var user=auth.currentUser
        var database_ref=database.ref()
        var user_data={
            Name:Name,
            mobile:mobile,
            email:email
        }

        database_ref.child('users/' +user.uid).set(user_data)
        alert("User Created")

    }).catch(function(error){
         var error_code=error.code
         var error_message=error.message
         alert(error_message+error_code)
    })

  }
  function validate_email(email){
      expression=/^[^@]+@\w+(\.\w+)+\w$/
      if(expression.test(email)==true){
          return true
      }else{
          return false
      }
  }
