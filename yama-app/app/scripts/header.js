module.exports = async function (homeTemplate, playlistsTemplate, alertScript, alertTemplate) {
    return new Promise((resolve, reject) => {
        const content = document.querySelector('#main-content')

        const signUpBtn = document.getElementById('signUpBtn')

        if (signUpBtn) {
            signUpBtn.onclick = () => {
                window.location.hash = '#signUp'
            }
        }

        const loginBtn = document.getElementById('loginBtn')
        if (loginBtn) {
            loginBtn.onclick = () => {
                window.location.hash = '#login'
            }
        }

        const logoutBtn = document.getElementById('logoutBtn')
        if (logoutBtn) {
            logoutBtn
                .onclick = () => {
                    jQuery.post('api/v1.0.0/auth/logout')
                        .done(() => {
                            alertScript(alertTemplate, {
                                message: 'We hope to see you soon',
                                type: 'success'
                            })
                            window.location.hash = '#welcome'
                            resolve()
                        })
                        .fail(() => {
                            alertScript(alertTemplate, {
                                message: 'Log out failed. We\'re very sorry',
                                type: 'warning'
                            })
                        })
                }
        }


        const playlistsNav = document.querySelector('#playlistsNav')
        if (playlistsNav) {
            playlistsNav
                .onclick = () => {
                    fetch('api/v1.0.0/playlists/')
                        .then(async (result) => {
                            console.log(result)
                            const data = await result.json()
                            if (result.ok) {
                                content.innerHTML = await playlistsTemplate(data)
                                resolve()
                            } else {
                                alertScript(alertTemplate, {
                                    message: 'We couldn\'t go to your playlists',
                                    type: 'warning'
                                })
                                reject()
                            }
                        })
                }
        }

    })
}