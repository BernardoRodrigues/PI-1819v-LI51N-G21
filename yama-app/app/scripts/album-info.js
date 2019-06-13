module.exports = async function() {
    return new Promise((resolve, reject) => {
        const albumInfoTableBody = document.getElementById('album-info-table-body')
        const rows = albumInfoTableBody.getElementsByTagName('tr')
        for (const row of rows) {
            const rowData = row.getElementsByTagName('td')
            if (rowData.length !== 3) {
                
            }
        }
    })
}