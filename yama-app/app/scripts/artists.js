module.exports = async function (albumsTemplate, albumsScript) {
    return new Promise((resolve, reject) => {
        const content = document.getElementById('main-content')
        console.log({
            table: document.getElementById('artists-table')
        })
        console.log({
            tableBody: document.getElementById('artist-table-body')
        })
        const tableBody = document.getElementById('artist-table-body')
        const rows = tableBody.getElementsByTagName('tr')
        for (const row of rows) {
            row.onclick = function(ev) {
                console.log(`onclick event on row: ${row}`)
                console.log({row: row})
                console.log({event: ev})
                const mbid = row.getElementsByTagName('td')[0].innerText
                fetch(`api/v1.0.0/artists/${mbid}/albums`)
                    .then(async rsp => {
                        if (rsp.ok) {
                            const data = await rsp.json()
                            content.innerHTML = ''
                            content.innerHTML = await albumsTemplate(data)
                            await albumsScript()
                            return resolve()
                        } else reject('error on request')
                    })
            }
        }
    })
}