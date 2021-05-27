
alert("hello");
var loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (email && password) {

        const response = await fetch("/api/user", {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/pages/dashboard");
        } else {
            document.location.replace("./models/login");
        }
    }
};

var signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (username && email && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            header: { "Content-Type": "application/json"},
        });

        if (response.ok) {
            document.location.replace("/")
        } else {
            console.log(response);
        }
    }
};

var logoutFormHandler = async () => {
    const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        document.location.replace("/");
    } else {
        console.log(response);
    }
};
console.log(document.querySelector("#register-form"))
//document.querySelector(".login-form").addEventListener("submit", loginFormHandler);

document.querySelector(".register-form", signupFormHandler).addEventListener("submit", signupFormHandler);

document.querySelector("#logout").addEventListener("click", logoutFormHandler);