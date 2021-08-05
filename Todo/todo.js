document.getElementById('check').onclick = function () {
    const log = document.getElementById('login').value
    const pass = document.getElementById('password').value

    const regData = localStorage.getItem(log)
    console.log(regData)

    if (pass === regData) {
        alert('Wellcome')
        // localStorage.setItem('loginTwo', log)
        // console.log(typeof(log))
    } else {
        alert(':(')
    }
}

document.getElementById('register').onclick = function() {
    const reg = document.getElementById('login').value
    const regPass = document.getElementById('password').value

    localStorage.setItem(reg, regPass)
}


