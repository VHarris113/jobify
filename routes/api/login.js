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
            document.location.replace("/pages/resume");
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
        const response = await fetch("/pages/resume", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            header: { "Content-Type": "application/json"},
        });

        if (response.ok) {
            document.location.replace("/")
        }
    }
}

