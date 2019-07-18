module.exports = async function(alertScript, alertTemplate) {
    console.log('Sign Up Script ')
    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST'
        }
        document.getElementById('sendSignUpBtn').onclick = () => {
                console.log('sending sign up request')
                const username = document.getElementById('signUpUsername').value
                const password = document.getElementById('signUpPassword').value
                options['body'] = {
                    username: username,
                    password: password
                }
                fetch('api/v1.0.0/auth/sign-up', options)
                    .then(
                        (value) => {
                        alertScript(alertTemplate, {message: 'Welcome!', type: 'success'})
                        // const lastHash = localStorage.getItem('lastHash')
                        window.location.hash = '#welcome'
                        resolve()
                    }, 
                    (err) => {
                        if (err.status && err.status >= 500) {
                            alertScript(alertTemplate, {message: 'There was a server error. We\'re very sorry!', type: 'error'})
                        } else {
                            alertScript(alertTemplate, {message: 'These credentials are already being used', type: 'error'})
                        }
                        reject()
                    })
            }
    })
}
