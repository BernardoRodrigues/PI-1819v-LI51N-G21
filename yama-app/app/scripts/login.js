module.exports = async function (alertTemplate, alertScript) {
    return new Promise((resolve, reject) => {
        document.getElementById('sendLoginBtn')
            .onclick = () => {
                const username = document.getElementById('logInUsername').value
                const password = document.getElementById('logInPassword').value
                fetch('api/v1.0.0/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password
                        })
                    })
                    .then(async rsp => {
                        if (rsp.ok) {
                            alertScript(alertTemplate, {
                                message: 'Welcome!',
                                type: 'success'
                            })
                            window.location.hash = '#welcome'
                            return resolve()
                        } else {
                            alertScript(alertTemplate, {
                                message: 'Wrong Credentials',
                                type: 'error'
                            })
                        }
                    })
            }
    })
}