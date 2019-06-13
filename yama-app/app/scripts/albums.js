module.exports = async function(template) {
    return new Promise((resolve, reject) => {
        const content = document.getElementById('main-content')
        const tableBody = document.getElementById('albums-table-body')
        const rows = tableBody.getElementsByTagName('tr')
        for (let index = 0; index < rows.length; index++) {
            const row = rows[i]
            row.onclick = onRowClick(row)
        }

        function onRowClick(row) {
            const mbid = row.getElementsByTagName('td')[0].innerText
            fetch(`api/v1.0.0/artists/album/${mbid}`)
                .then(rsp => {
                    if (rsp.ok) {
                        const data = await rsp.json()
                        data = getUserData(data)
                        content.innerHTML = await template(data)
                        return resolve()
                    }
                    else reject('error on request')
                })
        }

        function getUserData(data) {
            if (document.cookie.includes("username")) {
                const split = document.cookie.split("&")
                const usernameCookie = split.find(c => c.includes("username"))
                const playlistListIdCookie = split.find(c => c.includes("playlistListId"))
                if (usernameCookie && playlistListIdCookie) {
                    const username = usernameCookie.split("=")[1]
                    const playlistListsId = playlistListIdCookie.split("=")[1]
                    fetch()
                    data['username'] = username
                    data['playlistsListId'] = playlistListsId
                }
            }
            return data;
        }
    })
}