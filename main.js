var objPeople = [
    {
        username: "Maciej",
        password: "qwerty"
    },
    {
        username: "Adam",
        password: "asdf"
    }
]

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(var i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username
            && password == objPeople[i].password){
                alert(username + " jest zalogowany!");
                console.log(username + " jest zalogowany!")
                return;
            }
    }
    alert("Niepoprawidłowy użytkownik lub hasło");
    console.log("Niepoprawidłowy użytkownik lub hasło");
}