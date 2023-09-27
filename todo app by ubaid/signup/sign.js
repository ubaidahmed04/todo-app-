var users = JSON.parse(localStorage.getItem("users")) || [];
// consol.log(users)

//  users jtny bhi hon us me 1000 plus krdo , agr iik bhi ni to 0 + 1000 hoo
var userId = users.length + 1000;

var btn = document.getElementById("btnlogin")
if (btn) {
  btn.addEventListener('click', function (event) {
    event.preventDefault()
  })
}

function signup() {

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;
  //validate

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


  if (username == "") {
    swal({
      title: "fields empty! !",
      text: "Please  fill  the  name field!",
      icon: "error",
      button: "OK",
    });
    // alert(' fill the Email  ')
    // return false
  }

  else if (email == "") {
    swal({
      title: "fields empty! !",
      text: "Please  fill  the  email field!",
      icon: "error",
      button: "OK",
    });
    // return false
  }

  else if (!emailRegex.test(email)) {
    swal({
      title: "Invalid email!",
      text: "Please enter a valid email address!",
      icon: "error",
      button: "OK",
    });
  }
  // else if(email ==  email){
  //   swal({
  //     title: "This email is already exist",
  //     // text: "Please try again!",
  //     icon: "error",
  //     button: "OK",
  //   })}
  else if (pass == "") {
    swal({
      title: "fields empty! !",
      text: "Please  fill  the  password field!",
      icon: "error",
      button: "OK",
    });
    // return false
  }
  else if (pass.length < 8) {
    swal({
      title: "Password too short!",
      text: "Password must be at least 8 characters long!",
      icon: "error",
      button: "OK",
    });
  }

  else if (cpass == "") {
    swal({
      title: "fields empty! !",
      text: "Please  fill  the  password field!",
      icon: "error",
      button: "OK",
    });
    // return false
  }
  else if (pass !== cpass) {
    swal({
      title: "Password not match! !",
      text: "Please try again!",
      icon: "error",
      button: "OK",
    });
    // return false
  }
  else {
    swal({
      title: "sign up success",
      // text: "Please check and fill  the  missing field!",
      icon: "success",
      button: "OK",
    });
    //    else me tab ayega tab sari validation hoogaye gi tab hum localstorage me save krwaen gy warna ni save krna
    var userobj = {
      userId: ++userId,
      username,
      email,
      pass,
      cpass
    }
    users.push(userobj);

    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("usersFound", JSON.stringify(usersFound))
    username.value ="";
    email.value ="";
    pass.value ="";
    cpass.value ="";

    // return true
  }

}


function login() {

  var email = document.getElementById("lemail").value;
  var pass = document.getElementById("lpass").value;

  var usersFound = users.find(function (userobj) {
    return userobj.email == email
  })

  if (email == "") {
    // alert("swal({

    swal({
      title: " incorrect email",
      text: " check your email",
      icon: "error",
    });
    // return
  }

  else if (pass == "") {
    swal({
      title: " fill the password ",
      text: " check your password",
      icon: "error",
    });
    // alert("incorrect password")
    //  return
  }
  else if (usersFound.pass !== pass) {
    swal({
      title: "  incorrect password ",
      text: " check your password",
      icon: "error",
    });
    // alert("incorrect password")
    //  return
  }
  else {
    // alert("login success")
    swal({
      title: "login success",
      text: " Welcome",
      icon: "success",
    });
    localStorage.setItem("usersFound", JSON.stringify(usersFound));
    location.href = "/home.html"
    // return
  }

}


// logout wala function Home.html me h end me