module.exports = async function(template, data) {
    const alert = document.getElementById('custom-alert')
    alert.innerHTML = await template(data)
}