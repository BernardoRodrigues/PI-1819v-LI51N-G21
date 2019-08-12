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
            logoutBtn.onclick = function() {
                    console.log('LOGOUT')
                    fetch('api/v1.0.0/auth/logout', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(async rsp => {
                        console.log(rsp)
                        if (rsp.ok) {
                            deleteCookies()
                            console.log(document.cookie)
                            // await alertScript(alertTemplate, {
                            //     message: 'We hope to see you soon',
                            //     type: 'success'
                            // })
                            window.location = '/'
                            return resolve()
                        } else {
                            await alertScript(alertTemplate, {
                                message: 'Log out failed. We\'re very sorry',
                                type: 'warning'
                            })
                            return reject()
                        }
                    })
                }
        }

        function deleteCookies() {
            document.cookie = `userId=;Max-Age=-99999999;connect.sid=;Max-Age=-99999999;username=;Max-Age=-99999999;playlistsId=;Max-Age=-99999999;`
        }


        const playlistsNav = document.querySelector('#playlistsNav')
        if (playlistsNav) {
            playlistsNav
                .onclick = function() {
                    fetch('api/v1.0.0/playlists')
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