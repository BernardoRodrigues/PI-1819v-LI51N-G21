module.exports = async function(tracksTemplate, tracksScript, alertTemplate, alertScript) {
    return new Promise((resolve, reject) => {
        const content = document.getElementById('main-content')
        const body = document.getElementById('playlists-table-body')
        document.getElementById('playlistBtn').onclick = function() {
            const name = document.getElementById('playlistName').value
            const description = document.getElementById('playlistDescription').value
            fetch(`api/v1.0.0/playlists`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name, description: description})
            })
            .then(async rsp => {
                if (rsp.ok) {
                    const data = await rsp.json()
                    const r = new HTMLTableRowElement()
                    r.appendChild(new HTMLTableDataCellElement(data.playlistId))
                    r.appendChild(new HTMLTableDataCellElement(name))
                    body.appendChild(r)
                } else {
                    alertScript(alertTemplate, {
                        message: 'Playlist could not be created',
                        type: 'danger'
                    })
                }
            }) 
        }
        const rows = body.getElementsByTagName('tr')
        for (const row of rows) {
            const data = row.getElementsByTagName('td')
            const playlistId = data[0].innerText
            row.onclick = function() {
                fetch(`api/v1.0.0/playlists/${playlistId}`)
                    .then(async (result) => {
                        if (result.ok) {
                            const data = await result.json()
                            content.innerHTML = await tracksTemplate(data)
                            await tracksScript()
                            return resolve()
                        } else {
                            alertScript(alertTemplate, {
                                message: 'An error occurred',
                                type: 'danger'
                            })
                            return reject()
                        }
                    })
            }
            data[2].getElementsByTagName('button')[0].onclick = function() {
                fetch(`api/v1.0.0/playlists/${playlistId}`, 
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(async rsp => {
                    if (rsp.ok) {
                        row.remove()
                        alertScript(alertTemplate, {
                            message: 'Playlist Deleted',
                            type: 'success'
                        })
                    } else {
                        alertScript(alertTemplate, {
                            message: 'An error occurred',
                            type: 'danger'
                        })
                        return reject()
                    }
                })
            }
        }
    })
}