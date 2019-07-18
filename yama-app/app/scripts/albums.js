module.exports = async function (template, albumInfoScript) {
    return new Promise((resolve, reject) => {
        const content = document.getElementById('main-content')
        const tableBody = document.getElementById('albums-table-body')
        const rows = tableBody.getElementsByTagName('tr')
        for (const row of rows) {
            row.onclick = () => {
                const mbid = row.getElementsByTagName('td')[0].innerText
                fetch(`api/v1.0.0/artists/album/${mbid}`)
                    .then(async rsp => {
                        if (rsp.ok) {
                            const data = await rsp.json()
                            if (isUserLoggedIn()) {
                                data['playlistListId'] = getUserCookieData('playlistListId')
                                data['username'] = getUserCookieData('username')
                                fetch('api/v1.0.0/playlists/')
                                    .then(async response => {
                                        if (response.ok) {
                                            data['playlists'] = await response.json()
                                            fillContent(content, data)
                                        } else {
                                            console.log('error on request')
                                        }
                                    })
                            }
                            fillContent(content, data)
                        } else reject('error on request')
                    })
            }
        }

        async function fillContent(content, data) {
            content.innerHTML = await template(data)
            await albumInfoScript()
            return resolve()
        }

        function getUserCookieData(key) {
            const split = document.cookie.split("&")
            const cookieSet = split.find(c => c.includes(key))
            if (cookieSet)
                return cookieSet.split("=")[1]
        }

        function isUserLoggedIn() {
            return document.cookie.includes('username')
        }

        function getUserData(data) {
            if (document.cookie.includes("username")) {
                const split = document.cookie.split("&")
                const usernameCookie = split.find(c => c.includes("username"))
                const playlistListIdCookie = split.find(c => c.includes("playlistListId"))
                if (usernameCookie && playlistListIdCookie) {
                    const username = usernameCookie.split("=")[1]
                    const playlistListsId = playlistListIdCookie.split("=")[1]
                    data['username'] = username
                    data['playlistsListId'] = playlistListsId
                }
            }
            return data;
        }
    })
}