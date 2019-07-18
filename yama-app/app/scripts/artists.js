module.exports = async function(albumsTemplate, albumsScript) {
    return new Promise((resolve, reject) => {
        const content = document.getElementById('main-content')
        const tableBody = document.getElementById('artist-table-body')
        const rows = tableBody.getElementsByTagName('tr')
        for (let index = 0; index < rows.length; index++) {
            const row = rows[index]
            row.onclick = onRowClick(row)
        }

        function onRowClick(row) {
            const mbid = row.getElementsByTagName('td')[0].innerText
            fetch(`api/v1.0.0/artists/${mbid}/albums`)
                .then(async rsp => {
                    if (rsp.ok) {
                        const data = await rsp.json()
                        content.innerHTML = await albumsTemplate(data)
                        await albumsScript()
                        resolve()
                    }
                    else reject('error on request')
                })
        }
    })
}