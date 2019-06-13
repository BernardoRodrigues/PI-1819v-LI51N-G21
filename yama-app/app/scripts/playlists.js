module.exports = async function(template) {
    return new Promise((resolve, reject) => {
        const content = document.getElementById('main-content')
        const body = document.getElementById('playlists-table-body')
        const rows = body.getElementsByTagName('tr')
        for (const row of rows) {
            const playlistId = row.getElementsByTagName('td')[0].innerText
            row.onclick = function() {
                fetch()
                    .then((result) => {
                        if (result.ok) {
                            const data = await result.json()
                            content.innerHTML = template(data)
                            resolve()
                        } else {
                            reject('error on request')
                        }
                    })
            }
        }
    })
}