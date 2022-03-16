
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");


// function for form varification
function formValidation() {
    let valid = true;
  // checking name length
  if (name.value.length < 2 || name.value.length > 20) {
    alert("Name length should be more than 2 and less than 21");
    name.focus();
    return false;
  }
  // checking email
  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }
  // checking password
  if (!password.value.match(/^.{5,15}$/)) {
    alert("Password length must be between 5-15 characters!");
    password.focus();
    return false;
  }
  // checking phone number
  if (!phone.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
    phone.focus();
    return false;
  }
   valid;

  if(valid){
     postData('http://localhost:3000/sign_up', { name: name.value, email: email.value, password: password.value, phone: phone.value })
                     .then(data => {
                         console.log(data); // JSON data parsed by `data.json()` call
                 });  
  }else {
        alert("There is an error");
     }

};

                    // // function formValidation(){
                    // //     //alert("hello");
                    // //     let valid = true;
                    // //     let name = document.getElementById("name");
                    // //     if(name.value === ""){
                    // //         valid = false;
                    // //     }

                    // //     let email = document.getElementById("email");
                    // //     if(email.value === ""){
                    // //         valid = false;
                    // //     }

                    // //     return valid;

                    //     // if(valid){
                    //     //     fetch('https://fakestoreapi.com/products/1')
                    //     //     .then(res=>res.json())
                    //     //     .then(json=>console.log(json))
                    //     //     // postData('http://localhost:3000/sign_up', { name: name.value, email: email.value })
                    //     //     // .then(data => {
                    //     //     //     console.log(data); // JSON data parsed by `data.json()` call
                    //     //     // });       
                    //     // } else {
                    //     //     alert("There is an error");
                    //     // }

                    // }

                    async function postData(url = '', data = {}) {
                        const response = await fetch(url, {
                            method: 'POST', // *GET, POST, PUT, DELETE, etc.
                            mode: 'cors', // no-cors, *cors, same-origin
                            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                            credentials: 'same-origin', // include, *same-origin, omit
                            headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            redirect: 'follow', // manual, *follow, error
                            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                            body: JSON.stringify(data) // body data type must match "Content-Type" header
                        });
                        
                        return response.json(); // parses JSON response into native JavaScript objects
                    }
                