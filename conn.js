document.getElementById("signup").addEventListener("click", mafon);

function mafon() {
    var username = document.forms["sign"]["username"].value;
    var email = document.forms["sign"]["email"].value;
    var password = document.forms["sign"]["password"].value;
    var vpass = document.forms["sign"]["vpass"].value;
    var email_pattern = /\w@\w.\w/;
    var password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*])/;
    if (username.length < 4 || username.length > 12) {
        alert("Enter a valid username");
    } else if (!email_pattern.test(email)) {
        alert("Enter a valid email adress");
    } else if (password.length < 8 || !password_pattern.test(password)) {
        alert("Enter a valid password");
    } else if (password != vpass) {
        alert("the two passwords need to match");
    } else {
        window.open("home.html", '_self');
    }
}