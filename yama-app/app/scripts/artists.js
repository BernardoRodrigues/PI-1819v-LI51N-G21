module.exports = async function(template) {
    return new Promise((resolve, reject) => {
        const albumsTable = document.querySelector('albums-table')
        const tableBody = document.getElementById('artist-table-body')
        const rows = tableBody.getElementsByTagName('tr')
        for (let index = 0; index < rows.length; index++) {
            const row = rows[i]
            row.onclick = onRowClick(row)
        }

        function onRowClick(row) {
            const mbid = row.getElementsByTagName('td')[0].innerText
            fetch(`api/v1.0.0/artists/${mbid}/albums`)
                .then(rsp => {
                    if (rsp.ok) {
                        const data = await rsp.json()
                        albumsTable.innerHTML = await template(data)
                        return resolve()
                    }
                    else reject('error on request')
                })
        }
    })
}