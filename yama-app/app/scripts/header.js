module.exports = async function (template) {
    return new Promise((resolve, reject) => {
        document.getElementById('loginBtn')
            .onclick(() => {
                const username = document.getElementById('logInUsername').innerText
                const password = document.getElementById('logInPassword').innerText

                jQuery.post('api/v1.0.0/auth/login', {
                        username: username,
                        password: password
                    })
                    .done((data) => {
                        alert('successfully logged in')
                        resolve(data)
                    })
                    .fail((data) => {
                        alert('Invalid Credentials')
                        reject(data)
                    })
            })
        document.getElementById('signUpBtn')
            .onclick(() => {
                const username = document.getElementById('signUpUsername').innerText
                const password = document.getElementById('signUpPassword').innerText

                jQuery.post('api/v1.0.0/auth/sign-up', {
                        username: username,
                        password: password
                    })
                    .done((data) => {
                        alert('successfully signed up')
                        resolve(data)
                    })
                    .fail((data) => {
                        alert('Invalid Credentials')
                        reject(data)
                    })
            })


    })
}