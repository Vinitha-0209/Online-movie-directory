let username = document.querySelector('#name');
let password = document.querySelector('#password');
let sumbit = document.querySelector('#btn');

sumbit.addEventListener('click' , loginFunction)

function loginFunction(e){

    let name = /^[A-Z a-z]+$/
    let pass = /^[A-Z a-z \-]+$/
    if(username.value.match(name) && password.value.match(pass)){
        // document.location.href = "main.html"
        console.log(username.value , password.value)
        document.location.href = "main.html"
    }
    else{
        alert("Invalid")
    }

    e.preventDefault();
}
