module.exports = async function (homeTemplate, playlistsTemplate) {
    return new Promise((resolve, reject) => {
        const content = document.getElementById('main-content')
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

        document.getElementById('logoutBtn')
            .onclick(() => {
                jQuery.post('api/v1.0.0/auth/logout')
                    .done(() => {
                        alert('successfully logged out')
                        content.innerHTML = homeTemplate()
                        resolve()
                    })
                    .fail(() => {
                        alert('fail on log out')
                    })
            })

        document.getElementById('playlistsNav')
                .onclick(() => {
                    fetch('api/v1.0.0/playlists/')
                    .then((result) => {
                        const data = await result.json()
                        if (result.ok) {
                            content.innerHTML = playlistsTemplate(data)
                            resolve()
                        }
                        reject('error on request')
                    })
                })


    })
}