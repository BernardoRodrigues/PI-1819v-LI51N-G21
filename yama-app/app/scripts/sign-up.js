module.exports = async function (alertTemplate, alertScript) {
    return new Promise((resolve, reject) => {
        document.getElementById('sendSignUpBtn').onclick = function() {
            console.log('sending sign up request')
            const username = document.getElementById('signUpUsername').value
            const password = document.getElementById('signUpPassword').value
            console.log({
                username: document.getElementById('signUpUsername'),
                password: document.getElementById('signUpPassword')
            })
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }
            console.log({
                options: options
            })
            fetch('api/v1.0.0/auth/sign-up', options)
                .then(
                    async rsp => {
                        if (rsp.ok) {
                            alertScript(alertTemplate, {
                                message: 'Welcome!',
                                type: 'success'
                            })
                            // const lastHash = localStorage.getItem('lastHash')
                            window.location.hash = '#welcome'
                            return resolve()
                        } else {
                            alertScript(alertTemplate, {
                                message: 'These credentials are already being used',
                                type: 'error'
                            })
                        }
                    },
                    (err) => {
                        if (err.status && err.status >= 500) {
                            alertScript(alertTemplate, {
                                message: 'There was a server error. We\'re very sorry!',
                                type: 'error'
                            })
                        }
                        return reject()
                    })
        }
    })
}