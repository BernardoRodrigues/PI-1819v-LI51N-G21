module.exports = async function (homeTemplate, playlistsTemplate, artistsTemplate) {
    return new Promise((resolve, reject) => {
        const content = document.getElementById('main-content')

        document.getElementById('searchBtn').onclick = () => {
            const name = document.getElementById('searchInput').value.replace(/g/ , '+')
            console.log(name)
            fetch(`api/v1.0.0/artists/search/${name}`)
                .then(async (result) => {
                    const data = await result.json()
                    console.log(data)

                    if (result.ok) {
                        content.innerHTML = await artistsTemplate({artists: data})
                        window.location.hash = '#artists'
                        resolve()
                    } else if (result.status >= 500){
                        alert("No results found")
                        reject()
                    }  
                })
        }

        document.getElementById('loginBtn')
            .onclick = () => {
                const username = document.getElementById('logInUsername').value
                const password = document.getElementById('logInPassword').value

                jQuery.post('api/v1.0.0/auth/login', {
                        username: username,
                        password: password
                    })
                    .done((data) => {
                        alert('successfully logged in')
                        window.location.reload()
                        resolve(data)
                    })
                    .fail((data) => {
                        alert('Invalid Credentials')
                        reject(data)
                    })
            }
        document.getElementById('signUpBtn')
            .onclick = () => {
                const username = document.getElementById('signUpUsername').value
                const password = document.getElementById('signUpPassword').value

                jQuery.post('api/v1.0.0/auth/sign-up', {
                        username: username,
                        password: password
                    })
                    .done((data) => {
                        alert('successfully signed up')
                        window.location.reload()
                        resolve(data)
                    })
                    .fail((data) => {
                        if (data.status >= 500) {
                            alert("Server error")
                        } else {
                            alert('Invalid Credentials')
                        }
                        reject(data)
                    })
            }

        document.getElementById('logoutBtn').onclick = () => {
                jQuery.post('api/v1.0.0/auth/logout')
                    .done(() => {
                        alert('successfully logged out')
                        content.innerHTML = homeTemplate()
                        resolve()
                    })
                    .fail(() => {
                        alert('fail on log out')
                    })
            }

        document.getElementById('playlistsNav')
                .onclick = () => {
                    fetch('api/v1.0.0/playlists/')
                    .then(async (result) => {
                        console.log(result)
                        const data = await result.json()
                        if (result.ok) {
                            content.innerHTML = await playlistsTemplate(data)
                            resolve()
                        } else {
                            alert("Couldn't get playlists")
                            reject('error on request')
                        }
                    })
                }

        
    })
}