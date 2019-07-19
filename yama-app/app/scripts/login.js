module.exports = async function (alertScript, alertTemplate) {
    return new Promise((resolve, reject) => {
        document.getElementById('sendLoginBtn')
            .onclick = () => {
                const username = document.getElementById('logInUsername').value
                const password = document.getElementById('logInPassword').value

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
                
                fetch('api/v1.0.0/auth/login', options)
                    .then((value) => {
                        alertScript(alertTemplate, {
                            message: 'Welcome!',
                            type: 'success'
                        })
                        window.location.hash = '#welcome'
                        resolve()
                    },
                    (err) => {
                        if(err.status && err.status >= 500)
                            alertScript(alertTemplate, {
                                message: 'There was a server error. We\'re very sorry!',
                                type: 'error'
                            })
                        else
                            alertScript(alertTemplate, {
                                message: 'Invalid credentials',
                                type: 'danger'
                            })

                        reject()
                    })
            }
    })
}