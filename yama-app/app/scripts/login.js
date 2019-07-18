module.exports = async function (alertScript, alertTemplate) {
    return new Promise((resolve, reject) => {
        document.getElementById('sendLoginBtn')
            .onclick = () => {
                const username = document.getElementById('logInUsername').value
                const password = document.getElementById('logInPassword').value

                jQuery.post('api/v1.0.0/auth/login', {
                        username: username,
                        password: password
                    })
                    .done(() => {
                        alertScript(alertTemplate, {
                            message: 'Welcome!',
                            type: 'success'
                        })
                        window.location.hash = '#welcome'
                        resolve()
                    })
                    .fail(() => {
                        alertScript(alertTemplate, {
                            message: 'Invalid Credentials',
                            type: 'danger'
                        })
                        reject()
                    })
            }
    })
}