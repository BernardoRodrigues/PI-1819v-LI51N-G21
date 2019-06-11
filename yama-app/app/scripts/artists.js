module.exports = async function(template) {
    return new Promise((resolve, reject) => {
        const tableBody = document.querySelector('artist-table-body')
        const rows = tableBody.getElementsByTagName('tr')
        for (let index = 0; index < rows.length; index++) {
            const row = rows[i]
            row.onclick = onRowClick(row)
            const mbid = row.getElementsByTagName('td')[0].innerText
            fetch(`api/v1.0.0/artists${mbid}/albums`)
                .then(rsp => {
                    const data = await rsp.json()
                    if (rsp.ok) {
                        template(data)
                        return resolve()
                    }
                    else reject(data)
                })
        }

        async function processAlbums(rsp) {
            if (rsp.)
        }

        function onRowClick(row) {
            row.
        }
    })
}