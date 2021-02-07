var ObjPeople = [
    {
    Username: "Maciej",
    password: "qwerty"
},
{
    Username: "Adam",
    password: "asdf"
}
]

function getInfo(){
    var login = document.getElementById("Username").Value;
    var password = document.getElementById("password").value;

    for(var i = 0; i < ObjPeople.lenght; i++){
        if(Login == ObjPeople[i].login
            && password == ObjPeople[i].password){
                alert(login + " jest zalogowany");
                console.log(login + " jest zalogowany");
                return;
            }
    }
    alert("Nieprawidłowy użytkownik lub hasło");
    console.log("Nieprawidłowy użytkownik lub hasło");
}