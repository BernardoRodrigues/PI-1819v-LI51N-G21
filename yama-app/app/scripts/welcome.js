module.exports = async function(albumsTemplate, albumsScript, artistTemplate, artistScript, alertScript, alertTemplate) {
    return new Promise((resolve, reject) => {
        console.log('welcome script')
        document.getElementById('searchBtn').onclick = function() {
            const name = document.getElementById('searchInput').value.replace(/ /g , '+')
            console.log(name)
            if (name && name.length > 0) {
                console.log(name)
                fetch(`api/v1.0.0/artists/search/${name}`)
                    .then(async result => {
                        console.log("request returned")
                        const data = await result.json()
                        if (result.ok) {
                            console.log(data)
                            document.getElementById('artist-search-results').innerHTML = await artistTemplate(data)
                            await artistScript(albumsTemplate, albumsScript)
                            resolve()
                        } else {
                            await alertScript(alertTemplate, {message: data.message, type: 'danger'})
                            reject()
                        }
                    })
            }
        }
    })
}