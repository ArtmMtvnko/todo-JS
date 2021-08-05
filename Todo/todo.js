document.getElementById('check').onclick = () => {
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value

    const userData = localStorage.getItem(login)
    console.log(userData)

    if (password === userData) {
        alert('Wellcome')
    } else {
        alert(':(')
    }
}

document.getElementById('register').onclick = () => {
    const registration = document.getElementById('login').value
    const registretionPassword = document.getElementById('password').value

    localStorage.setItem(registration, registretionPassword)
}


